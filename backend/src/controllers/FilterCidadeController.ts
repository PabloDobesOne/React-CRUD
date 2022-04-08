import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Cidade } from '../entities/Cidade';


export class FilterCidadeController {
    async handle(request: Request, response: Response) {
        const {CIDADE_NOME, CIDADE_UF} = request.body;
        const repo = getRepository(Cidade);

        // console.log(CIDADE_UF);

        let cidades: Cidade[];

        if(CIDADE_NOME) {
            cidades = await repo.find({ where: {"CIDADE_NOME": CIDADE_NOME} });
            if(!cidades) {
                return response.status(404).json("Cidade does not exists");
            }
        }

        if(CIDADE_UF) {
            cidades = await repo.find({ where: {"CIDADE_UF": CIDADE_NOME} });
            if(!cidades) {
                return response.status(404).json("Cidade does not exists");
            }
        }


        return response.status(200).json(cidades);
    }
}