import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";


export class DeleteCidadeService {
    async execute(CIDADE_ID: number) {
        const repo = getRepository(Cidade);

        if(!await repo.findOne(CIDADE_ID) ){
            return new Error("Cidade does not exists!");
        }

        repo.delete(CIDADE_ID);
    }
}