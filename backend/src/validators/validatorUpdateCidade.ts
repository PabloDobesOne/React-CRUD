import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from 'express';

export function updateCidadeValidationsRules() {
    return [
        body('CIDADE_NOME').isString().isLength({min: 4, max: 50}).not().isNumeric(),
        body('CIDADE_UF').isString().isLength({min: 2, max: 2}).not().isNumeric()
    ]
}

export function validatorUpdateCidade(request: Request, response: Response, next: NextFunction) {
    const errors = validationResult(request);
    if(!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()})
    }

    return next();
}