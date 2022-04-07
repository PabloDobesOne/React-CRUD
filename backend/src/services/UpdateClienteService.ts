import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";
import { Cliente } from "../entities/Clientes";

type ClienteUpdateRequest= {
    CLI_ID: number;
    CLI_NOME: string;
    CLI_NASCIDO: Date;
    CIDADE_ID: number;
}

export class UpdateClienteService {
    async execute({ CLI_ID, CLI_NOME, CLI_NASCIDO, CIDADE_ID }: ClienteUpdateRequest) {
        const repo = getRepository(Cliente);
        const repoCidade = getRepository(Cidade);

        const cliente = await repo.findOne(CLI_ID);
        const cidade = await repoCidade.findOne(CIDADE_ID);

        // checando se cliente existe
        if(!cliente) {
            return new Error("Cliente does not exists")
        }

        // checando se nova cidade existe
        if(!cidade) {
            return new Error("Cidade does not exists")
        }

        // alterando dados do cliente
        cliente.CLI_ID = CLI_ID ? CLI_ID : cliente.CLI_ID;
        cliente.CLI_NOME = CLI_NOME ? CLI_NOME : cliente.CLI_NOME;
        cliente.CLI_NASCIDO = CLI_NASCIDO ? CLI_NASCIDO : cliente.CLI_NASCIDO;
        cliente.CIDADE_ID = CIDADE_ID ? CIDADE_ID : cliente.CIDADE_ID;

        // salvando dados do cliente
        await repo.save(cliente);

        return cliente;

    }
}