-- AlterTable
ALTER TABLE "leilao" ALTER COLUMN "matricula_arremate" SET DATA TYPE VARCHAR(50);

-- CreateTable
CREATE TABLE "lances" (
    "id" SERIAL NOT NULL,
    "valor" INTEGER NOT NULL,
    "Dh_Lance" VARCHAR(255) NOT NULL,
    "username" TEXT NOT NULL,
    "lances_id_leilao" INTEGER NOT NULL,

    CONSTRAINT "lances_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "leilao" ADD CONSTRAINT "fk_leilao_users" FOREIGN KEY ("matricula_arremate") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lances" ADD CONSTRAINT "fk_lances_users" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lances" ADD CONSTRAINT "fk_lances_leilao" FOREIGN KEY ("lances_id_leilao") REFERENCES "leilao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
