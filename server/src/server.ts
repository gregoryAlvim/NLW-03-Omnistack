import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection'; 

import routes from "./routes";
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

// Rotas = Conjunto
// Recurso = Usuário

// Métodos HTTP = Get, Post, Put, Delete
// Parâmetros:
// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users?search=diego

// Get = Buscando uma informação (Lista, Item)
// Post = Criando uma informação
// Put = Editando uma informação
// Delete = Deletando uma informação