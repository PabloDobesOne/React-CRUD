import { response } from "express";
import { getRepository } from "typeorm";
import { Cidade } from "../entities/Cidade";
import { Cliente } from "../entities/Clientes";


export class DeleteCidadeService {
    async execute(CIDADE_ID: number) {
        const repo = getRepository(Cidade);
        const repoCliente = getRepository(Cliente);


        if(!await repo.findOne(CIDADE_ID)){
            // return new Error("Cidade does not exists!");
            return response.status(404).json({message: "Cidade does not exists!"});
        }

        if(await repoCliente.findOne(CIDADE_ID)) {
            // return new Error("Cidade cannot be deleted, because there are clients linked to it");
            return response.status(400).json({message: "Cidade cannot be deleted, because there are clients linked to it"});
        }

        repo.delete(CIDADE_ID);
        return response.status(204).end();
    }
}