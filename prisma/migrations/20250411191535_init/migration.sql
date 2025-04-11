-- CreateTable
CREATE TABLE "saldo" (
    "id" SERIAL NOT NULL,
    "valor" INTEGER NOT NULL,
    "user" TEXT NOT NULL,

    CONSTRAINT "saldo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "saldo_user_key" ON "saldo"("user");

-- AddForeignKey
ALTER TABLE "saldo" ADD CONSTRAINT "saldo_user_fkey" FOREIGN KEY ("user") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
