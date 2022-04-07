import { getRepository } from "typeorm"
import { Cliente } from "../entities/Clientes"

export class DeleteClienteService {
    async execute(CLI_ID: number) {
        const repo = getRepository(Cliente);

        if(!await repo.findOne(CLI_ID)) {
            return new Error("Cliente does not exists")
        }

        repo.delete(CLI_ID);
    }
}