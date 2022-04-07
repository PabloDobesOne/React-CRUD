import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";
import { Cliente } from "../entities/Clientes";
import { DeleteCidadeService } from "../services/DeleteCidadeService";

export class DeleteCidadeController {
    async handle(request: Request, response: Response) {
        const {CIDADE_ID} = request.params;

        const repo = getRepository(Cidade);
        const repoCliente = getRepository(Cliente);

        if(!await repo.findOne(Number(CIDADE_ID))){
            return response.status(404).json({message: "Cidade does not exists!"});
        }

        if(await repoCliente.findOne(Number(CIDADE_ID))) {
            return response.status(400).json({message: "Cidade cannot be deleted, because there are clients linked to it"});
        }

        repo.delete(Number(CIDADE_ID));
        return response.status(204).end();
    }
}