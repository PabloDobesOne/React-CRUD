import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";
import { Cliente } from "../entities/Clientes";

type ClienteRequest = {
    CLI_NOME: string;
    CLI_NASCIDO: string;
    CIDADE_ID: number;
}

export class CreateClienteService {
    async execute({ CLI_NOME, CLI_NASCIDO, CIDADE_ID }: ClienteRequest): Promise<Cliente | Error> {
        const repo = getRepository(Cliente);
        const repoCidade = getRepository(Cidade);

        // checando se cidade existe
        if(!await repoCidade.findOne(CIDADE_ID)) {
            return new Error("Cidade does not exists");
        }

        // criando cliente
        const cliente = repo.create({
            CLI_NOME,
            CLI_NASCIDO,
            CIDADE_ID
        })

        await repo.save(cliente)

        return cliente;
    }
}