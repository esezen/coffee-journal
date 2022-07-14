/*
  Warnings:

  - Added the required column `coffeeName` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Made the column `brewMethod` on table `Entry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `brewTime` on table `Entry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `coffeeIn` on table `Entry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `coffeeOut` on table `Entry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `result` on table `Entry` required. This step will fail if there are existing NULL values in that column.

*/
TRUNCATE TABLE `Entry`;

-- AlterTable
ALTER TABLE `Entry` ADD COLUMN `coffeeName` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    MODIFY `brewMethod` VARCHAR(191) NOT NULL,
    MODIFY `brewTime` INTEGER NOT NULL,
    MODIFY `coffeeIn` INTEGER NOT NULL,
    MODIFY `coffeeOut` INTEGER NOT NULL,
    MODIFY `result` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Entry` ADD CONSTRAINT `Entry_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
