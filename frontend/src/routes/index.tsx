import {
    Routes,
    Route
} from 'react-router-dom';
import { Cidades } from '../pages/Cidades';
import { Clientes } from '../pages/Clientes';
import { Home } from '../pages/Home';



export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cidades" element={<Cidades />} />
            <Route path="/clientes" element={<Clientes />} />
        </Routes>
    )
}
