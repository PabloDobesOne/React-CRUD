import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";



export class GetAllCidadesService {
    async execute() {
        const repo = getRepository(Cidade);

        // pegando todas as cidades
        const cidades = repo.find({
            order: {
                CIDADE_NOME: 'ASC'
            }
        });

        return cidades
    }
}