CREATE TABLE IF NOT EXISTS `resource_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`resource_slug` varchar(128) NOT NULL,
	`first_name` varchar(100) NOT NULL,
	`email` varchar(320) NOT NULL,
	`requested_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `resource_requests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `resource_email_consents` (
	`id` int AUTO_INCREMENT NOT NULL,
	`request_id` int NOT NULL,
	`first_name` varchar(100) NOT NULL,
	`email` varchar(320) NOT NULL,
	`consent_statement` text NOT NULL,
	`consented_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `resource_email_consents_id` PRIMARY KEY(`id`),
	CONSTRAINT `resource_email_consents_request_id_unique` UNIQUE(`request_id`),
	CONSTRAINT `resource_email_consents_request_id_resource_requests_id_fk`
		FOREIGN KEY (`request_id`) REFERENCES `resource_requests`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION
);
