import { Router } from 'express';
import { CreateCidadeController } from './controllers/CreateCidadeController';


const routes = Router();

/* ===== ROTAS ===== */
routes.post('/cidades', new CreateCidadeController().handle);

export { routes }

