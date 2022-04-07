import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";


export class GetOneCidadeService {
    async execute(CIDADE_ID: number) {
        const repo = getRepository(Cidade);

        const cidade = await repo.findOne(CIDADE_ID);

        if(!cidade) {
            return new Error("Cidade does not exists")
        }

        return cidade
    }
}