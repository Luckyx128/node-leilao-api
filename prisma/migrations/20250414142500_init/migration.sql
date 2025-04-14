/*
  Warnings:

  - You are about to drop the column `quantidade` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `categoria` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estoque` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produto_imagem` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "quantidade",
ADD COLUMN     "categoria" VARCHAR(255) NOT NULL,
ADD COLUMN     "descricao" VARCHAR(255) NOT NULL,
ADD COLUMN     "estoque" INTEGER NOT NULL,
ADD COLUMN     "produto_imagem" VARCHAR(255) NOT NULL;
