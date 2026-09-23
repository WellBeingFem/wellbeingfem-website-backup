CREATE TABLE `resource_email_consents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `request_id` int NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `email` varchar(320) NOT NULL,
  `consent_statement` text NOT NULL,
  `consented_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) /*T![clustered_index] CLUSTERED */,
  UNIQUE KEY `resource_email_consents_request_id_unique` (`request_id`),
  CONSTRAINT `resource_email_consents_request_id_resource_requests_id_fk` FOREIGN KEY (`request_id`) REFERENCES `resource_requests` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin AUTO_INCREMENT=180001;
