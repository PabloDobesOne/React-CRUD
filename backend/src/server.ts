import "reflect-metadata";
import express from 'express';

const app = express();
app.use(express.json());


/* ROTAS */
app.get('/', (request, response) => {
    return response.send("Rodando")
})


app.listen(3000, () => console.log("Server Running on port 3000"))