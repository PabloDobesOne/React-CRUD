import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";

type CidadeRequest = {
    CIDADE_NOME: string;
    CIDADE_UF: string;
}

export class CreateCidadeService {
    async execute({ CIDADE_NOME, CIDADE_UF } : CidadeRequest): Promise<Cidade | Error> {
        const repo = getRepository(Cidade);// repository/entity = instancia de uma table

        // checando se cidade já existe
        // SELECT * FROM cidades WHERE CIDADE_NOME = "CIDADE_NOME" LIMIT 1
        if(await repo.findOne({CIDADE_NOME}) && await repo.findOne({CIDADE_UF}))  {
            return new Error("Cidade already exists");
        }

        // criando cidade
        const cidade = repo.create({
            CIDADE_NOME,
            CIDADE_UF
        });

        // salvando cidade na table
        await repo.save(cidade);

        return cidade;
    }
}