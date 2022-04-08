import { Router } from 'express';
import { CreateCidadeController } from './controllers/CreateCidadeController';
import { CreateClienteController } from './controllers/CreateClienteController';
import { DeleteCidadeController } from './controllers/DeleteCidadeController';
import { DeleteClienteController } from './controllers/DeleteClienteController';
import { GetAllCidadesController } from './controllers/GetAllCidadesController';
import { GetAllClientesController } from './controllers/GetAllClientesController';
import { GetOneCidadeController } from './controllers/GetOneCidadeController';
import { GetOneClienteController } from './controllers/GetOneClienteController';
import { UpdateCidadeController } from './controllers/UpdateCidadeController';
import { UpdateClienteController } from './controllers/UpdateClienteController';
import { createCidadeValidationsRules, validatorCreateCidade } from './validators/validatorCreateCidade';
import { createClienteValidatorRules, validatorCreateCliente } from './validators/validatorCreateCliente';
import { updateCidadeValidationsRules, validatorUpdateCidade } from './validators/validatorUpdateCidade';
import { updateClienteValidatorRules, validatorUpdateCliente } from './validators/validatorUpdateCliente';


const routes = Router();

/* ===== ROTAS ===== */

routes.post('/cidades',
    createCidadeValidationsRules(),
    validatorCreateCidade,
    new CreateCidadeController().handle
);
routes.get('/cidades', new GetAllCidadesController().handle);
routes.get('/cidades/:CIDADE_ID', new GetOneCidadeController().handle);
routes.delete('/cidades/:CIDADE_ID', new DeleteCidadeController().handle);
routes.put('/cidades/:CIDADE_ID', 
    updateCidadeValidationsRules(),
    validatorUpdateCidade,
    new UpdateCidadeController().handle
);


routes.post('/clientes', 
    createClienteValidatorRules(),
    validatorCreateCliente,
    new CreateClienteController().handle
);
routes.get('/clientes', new GetAllClientesController().handle);
routes.get('/clientes/:CLI_ID', new GetOneClienteController().handle);
routes.delete('/clientes/:CLI_ID', new DeleteClienteController().handle);
routes.put('/clientes/:CLI_ID', 
    updateClienteValidatorRules(),
    validatorUpdateCliente,
    new UpdateClienteController().handle
);

export { routes }

