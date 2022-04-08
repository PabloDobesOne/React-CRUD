import { Request, Response } from 'express';
import { GetOneCidadeService } from '../services/GetOneCidadeService';


export class GetOneCidadeController {
    async handle(request: Request, response: Response) {
        const {CIDADE_ID} = request.params;

        const service = new GetOneCidadeService();
        
        const cidade = await service.execute(Number(CIDADE_ID));

        if(cidade instanceof Error) {
            return response.status(400).json(cidade.message);
        }

        return response.status(200).json(cidade);
    }
}