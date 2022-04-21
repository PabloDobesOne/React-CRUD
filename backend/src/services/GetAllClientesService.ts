import { getRepository } from "typeorm";
import { Cliente } from "../entities/Clientes";

export class GetAllClientesService {
    async execute() {
        const repo = getRepository(Cliente);

        // pegando dados de todos os clientes
        const clientes = await repo.find({
            relations: ["CIDADE"], // retornar os dados da relação com a table cidades
            order: {
                CLI_NOME: 'ASC'
            }
        });

        return clientes
    }
}