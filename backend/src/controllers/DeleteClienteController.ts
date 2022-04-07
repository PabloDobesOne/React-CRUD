import { Request, Response } from 'express';
import { DeleteClienteService } from '../services/DeleteClienteService';

export class DeleteClienteController {
    async handle(request: Request, response: Response) {
        const {CLI_ID} = request.params;
        
        const service = new DeleteClienteService();

        const result = await service.execute(Number(CLI_ID));

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end();
    }
}