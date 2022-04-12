import "reflect-metadata";
import express from 'express';
import "./database"; // importando conexão com typeorm
import { routes } from "./routes";
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(3333, () => console.log("Server Running on port 3333"))