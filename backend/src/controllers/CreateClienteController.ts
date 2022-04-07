import { Request, Response } from "express";
import { CreateClienteService } from "../services/CreateClienteService";


export class CreateClienteController {
    async handle(request: Request, response: Response) {
        const {CLI_NOME, CLI_NASCIDO, CIDADE_ID} = request.body;

        const service = new CreateClienteService();

        const result = await service.execute({
            CLI_NOME,
            CLI_NASCIDO: new Date(CLI_NASCIDO),
            CIDADE_ID: Number(CIDADE_ID)
        });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).json(result)
    }
}

