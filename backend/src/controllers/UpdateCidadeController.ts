import { Request, Response } from "express";
import { UpdateCidadeService } from "../services/UpdateCidadeService";


export class UpdateCidadeController {
    async handle(request: Request, response: Response) {
        const { CIDADE_ID } = request.params;
        const { CIDADE_NOME, CIDADE_UF } = request.body;

        const service = new UpdateCidadeService();

        const result  = await service.execute({
            CIDADE_ID: Number(CIDADE_ID),
            CIDADE_NOME,
            CIDADE_UF
        })
           

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).json(result);
    }
}