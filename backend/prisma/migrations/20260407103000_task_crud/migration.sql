-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('todo', 'inProgress', 'done');

-- CreateEnum
CREATE TYPE "TaskPriority" AS ENUM ('low', 'high');

-- AlterTable
ALTER TABLE "Task"
ADD COLUMN "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN "dueDate" TIMESTAMP(3),
ADD COLUMN "priority" "TaskPriority" NOT NULL DEFAULT 'low',
ADD COLUMN "status" "TaskStatus" NOT NULL DEFAULT 'todo',
ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Migrate existing data
UPDATE "Task"
SET
  "status" = CASE
    WHEN "completed" = true THEN 'done'::"TaskStatus"
    ELSE 'todo'::"TaskStatus"
  END,
  "updatedAt" = "createdAt";

-- Cleanup legacy column
ALTER TABLE "Task" DROP COLUMN "completed";
