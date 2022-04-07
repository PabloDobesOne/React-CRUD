import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";

type CidadeUpdateRequest = {
    CIDADE_ID: number;
    CIDADE_NOME: string;
    CIDADE_UF: string;
}

export class UpdateCidadeService {
    async execute({ CIDADE_ID, CIDADE_NOME, CIDADE_UF}: CidadeUpdateRequest) {
        const repo = getRepository(Cidade);

        const cidade = await repo.findOne(CIDADE_ID);

        if(!cidade) {
            return new Error("Cidade does not exists")
        }

        cidade.CIDADE_NOME = CIDADE_NOME ? CIDADE_NOME : cidade.CIDADE_NOME;
        cidade.CIDADE_UF = CIDADE_UF ? CIDADE_UF : cidade.CIDADE_UF;

        await repo.save(cidade);

        return cidade;
    }
}