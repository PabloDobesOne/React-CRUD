import { Request, Response } from 'express';
import { CreateCidadeService } from "../services/CreateCidadeService";


export class CreateCidadeController {
    async handle(request: Request, response: Response) {
        const { CIDADE_NOME, CIDADE_UF } = request.body;

        const service = new CreateCidadeService();

        const result = await service.execute({CIDADE_NOME, CIDADE_UF});

        // checando se houve erro na requisição de inserção
        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}