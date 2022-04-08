import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";
import { Cliente } from "../entities/Clientes";


export class DeleteCidadeController {
    async handle(request: Request, response: Response) {
        const CIDADE_ID = Number(request.params.CIDADE_ID);

        const repo = getRepository(Cidade);
        const repoCliente = getRepository(Cliente);

        const haveCidade =  await repo.findOne(CIDADE_ID);
        const haveCliente = await repoCliente.findOne({"CIDADE_ID": CIDADE_ID});

        if(!haveCidade) {
            return response.status(404).json("Cidade does not exists!");
        }

        if(haveCliente) {
            return response.status(400).json("Cidade cannot be deleted, because there are clients linked to it");
        }

        repo.delete(CIDADE_ID);
        return response.status(204).end();
    }
}