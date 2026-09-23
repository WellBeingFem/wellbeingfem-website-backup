CREATE TABLE `resource_requests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `resource_slug` varchar(128) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `email` varchar(320) NOT NULL,
  `requested_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) /*T![clustered_index] CLUSTERED */
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin AUTO_INCREMENT=450001;
