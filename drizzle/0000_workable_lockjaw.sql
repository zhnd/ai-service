CREATE TABLE `api_host_orders` (
	`id` text PRIMARY KEY NOT NULL,
	`price` real NOT NULL,
	`refund` integer NOT NULL,
	`orderDate` text NOT NULL,
	`DueDate` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`apiHostId` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `api_hosts` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`ip` text NOT NULL,
	`domainName` text NOT NULL,
	`sshPort` integer NOT NULL,
	`sshPassword` text NOT NULL,
	`orderDate` text NOT NULL,
	`DueDate` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `api_hosts_name_unique` ON `api_hosts` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `api_hosts_ip_unique` ON `api_hosts` (`ip`);--> statement-breakpoint
CREATE UNIQUE INDEX `api_hosts_domainName_unique` ON `api_hosts` (`domainName`);--> statement-breakpoint
CREATE TABLE `service_instances` (
	`id` text PRIMARY KEY NOT NULL,
	`endPoint` text NOT NULL,
	`maxUserCount` integer NOT NULL,
	`userName` text NOT NULL,
	`password` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`userId` text,
	`apiHostId` text NOT NULL,
	FOREIGN KEY (`apiHostId`) REFERENCES `api_hosts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `service_instance_users` (
	`service_instance_id` text NOT NULL,
	`user_id` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `service_instance_users_unique` ON `service_instance_users` (`service_instance_id`,`user_id`);--> statement-breakpoint
CREATE INDEX `service_instance_users_user_index` ON `service_instance_users` (`user_id`);--> statement-breakpoint
CREATE TABLE `third_party_accounts` (
	`id` text PRIMARY KEY NOT NULL,
	`userName` text NOT NULL,
	`password` text NOT NULL,
	`orderDate` text,
	`status` text NOT NULL,
	`accountType` text,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user_orders` (
	`id` text PRIMARY KEY NOT NULL,
	`price` real NOT NULL,
	`orderDate` text NOT NULL,
	`refund` real NOT NULL,
	`startTime` text NOT NULL,
	`endTime` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`userId` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`key` text,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_name_unique` ON `users` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_key_unique` ON `users` (`key`);