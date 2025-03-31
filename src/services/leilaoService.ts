import LeilaoModel from "../models/leilaoModel";

const leilaoService = {
    listLeiloes: async () => {
        return LeilaoModel.listLeiloes();
    },
    consultLeilao: async (id:number) => {
        return LeilaoModel.consultLeilao(id)
    }
};

export default leilaoService;