import { Request, Response, NextFunction } from 'express';
import {body, validationResult} from 'express-validator';


export function createCidadeValidationsRules() {
    return [
        body('CIDADE_NOME').isString().isLength({min: 4, max: 50}),
        body('CIDADE_UF').isString().isLength({min: 2, max: 2})
    ]
}



export function validatorCreateCidade(request: Request, response: Response, next: NextFunction) {
    const errors = validationResult(request);
    if(!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()})
    }

    return next();
}