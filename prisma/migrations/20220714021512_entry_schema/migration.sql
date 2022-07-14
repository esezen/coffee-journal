/*
  Warnings:

  - You are about to drop the column `name` on the `Entry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Entry` DROP COLUMN `name`,
    ADD COLUMN `brewMethod` VARCHAR(191) NULL,
    ADD COLUMN `brewTime` INTEGER NULL,
    ADD COLUMN `coffeeIn` INTEGER NULL,
    ADD COLUMN `coffeeOut` INTEGER NULL,
    ADD COLUMN `result` VARCHAR(191) NULL;
