-- CreateTable
CREATE TABLE "TestcaseResult" (
    "id" TEXT NOT NULL,
    "testcase" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "stdin" TEXT,
    "stdout" TEXT,
    "expectedOutput" TEXT,
    "stderr" TEXT,
    "compileOutput" TEXT,
    "status" TEXT NOT NULL,
    "memory" TEXT,
    "time" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "submissionId" TEXT NOT NULL,

    CONSTRAINT "TestcaseResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "problemSolved" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,

    CONSTRAINT "problemSolved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TestcaseResult_submissionId_idx" ON "TestcaseResult"("submissionId");

-- CreateIndex
CREATE UNIQUE INDEX "problemSolved_userId_problemId_key" ON "problemSolved"("userId", "problemId");

-- AddForeignKey
ALTER TABLE "TestcaseResult" ADD CONSTRAINT "TestcaseResult_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problemSolved" ADD CONSTRAINT "problemSolved_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problemSolved" ADD CONSTRAINT "problemSolved_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
