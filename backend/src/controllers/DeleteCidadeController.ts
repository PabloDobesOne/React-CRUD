import { Request, Response } from "express";
import { DeleteCidadeService } from "../services/DeleteCidadeService";

export class DeleteCidadeController {
    async handle(request: Request, response: Response) {
        const {CIDADE_ID} = request.params;

        const service = new DeleteCidadeService();

        const result = await service.execute(Number(CIDADE_ID));

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}