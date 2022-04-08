import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from 'express';

export function updateClienteValidatorRules() {
    return [
        body('CLI_NOME').isString().isLength({min:3, max: 50}),
        body('CLI_NASCIDO').isDate(),
        body('CIDADE_ID').isNumeric().isInt()
    ]
}

export function validatorUpdateCliente(request: Request, response: Response, next: NextFunction) {
    const error = validationResult(request);
    if(!error.isEmpty()) {
        return response.status(400).json({error: error.array()})
    }

    return next();
}