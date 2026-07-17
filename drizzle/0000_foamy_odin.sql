CREATE TABLE `participations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`phone` text NOT NULL,
	`sector` text NOT NULL,
	`role` text NOT NULL,
	`availability` text DEFAULT '' NOT NULL,
	`consent` integer NOT NULL,
	`status` text DEFAULT 'nuevo' NOT NULL,
	`source` text DEFAULT 'web' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);

