import { Request, Response } from 'express';
import { UpdateClienteService } from '../services/UpdateClienteService';


export class UpdateClienteController {
    async handle(request: Request, response: Response) {
        const { CLI_ID } = request.params;
        const { CLI_NOME, CLI_NASCIDO, CIDADE_ID } = request.body;

        const service = new UpdateClienteService();

        const result = await service.execute({
            CLI_ID: Number(CLI_ID),
            CLI_NOME,
            CLI_NASCIDO: new Date(CLI_NASCIDO),
            CIDADE_ID
        });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).json(result);
    }
}