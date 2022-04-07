import { Request, Response } from 'express';
import { GetAllCidadesService } from '../services/GetAllCidadesService';
import { GetAllClientesService } from '../services/GetAllClientesService';

export class GetAllClientesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllClientesService();

        const clientes = await service.execute();

        return response.json(clientes)
    }
}