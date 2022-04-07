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


const routes = Router();

/* ===== ROTAS ===== */

routes.post('/cidades', new CreateCidadeController().handle);
routes.get('/cidades', new GetAllCidadesController().handle);
routes.get('/cidades/:CIDADE_ID', new GetOneCidadeController().handle);
routes.delete('/cidades/:CIDADE_ID', new DeleteCidadeController().handle);
routes.put('/cidades/:CIDADE_ID', new UpdateCidadeController().handle);


routes.post('/clientes', new CreateClienteController().handle);
routes.get('/clientes', new GetAllClientesController().handle);
routes.get('/clientes/:CLI_ID', new GetOneClienteController().handle);
routes.delete('/clientes/:CLI_ID', new DeleteClienteController().handle);
routes.put('/clientes/:CLI_ID', new UpdateClienteController().handle);

export { routes }

