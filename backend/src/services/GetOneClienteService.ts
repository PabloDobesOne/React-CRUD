import { getRepository } from "typeorm";
import { Cliente } from "../entities/Clientes";


export class GetOneClienteService {
    async execute(CLI_ID: number) {
        const repo = getRepository(Cliente);

        const cliente = await repo.findOne(CLI_ID);

        if(!cliente) {
            return new Error("Cliente does not exists")
        }

        return cliente;
    }
}