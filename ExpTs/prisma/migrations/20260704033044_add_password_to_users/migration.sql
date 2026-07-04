/*
  Warnings:

  - The primary key for the `majors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `majors` table. All the data in the column will be lost.
  - The required column `idMajor` was added to the `majors` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `majors` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `idMajor` CHAR(36) NOT NULL,
    ADD PRIMARY KEY (`idMajor`);

-- CreateTable
CREATE TABLE `users` (
    `idUser` CHAR(36) NOT NULL,
    `fullName` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `majorId` CHAR(36) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gameSessions` (
    `id` CHAR(30) NOT NULL,
    `UserId` CHAR(36) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_majorId_fkey` FOREIGN KEY (`majorId`) REFERENCES `majors`(`idMajor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gameSessions` ADD CONSTRAINT `gameSessions_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `users`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;
