-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "role_id" INTEGER,
    "username" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "leilao" (
    "id" SERIAL NOT NULL,
    "lance_inicial" INTEGER NOT NULL,
    "data_inicial" VARCHAR(255) NOT NULL,
    "matricula_arremate" INTEGER NOT NULL,
    "ultimo_lance" INTEGER NOT NULL,
    "data_final" VARCHAR(255) NOT NULL,
    "leilao_status" INTEGER NOT NULL,
    "produtosId" INTEGER NOT NULL,

    CONSTRAINT "leilao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "valor" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "produto_status" INTEGER NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_user_role" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "leilao" ADD CONSTRAINT "fk_leilao_status" FOREIGN KEY ("leilao_status") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leilao" ADD CONSTRAINT "leilao_produtosId_fkey" FOREIGN KEY ("produtosId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "fk_produto_status" FOREIGN KEY ("produto_status") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
