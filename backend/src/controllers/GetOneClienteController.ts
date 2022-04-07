import { Request, Response } from 'express';
import { GetOneClienteService } from '../services/GetOneClienteService';


export class GetOneClienteController {
    async handle(request: Request, response: Response) {
        const {CLI_ID} = request.params;

        const service = new GetOneClienteService();

        const cliente = await service.execute(Number(CLI_ID));

        if(cliente instanceof Error) {
            return response.status(400).json(cliente.message)
        }

        return response.json(cliente);
    }
}