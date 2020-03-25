const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end;
 * POST: Criar uma infirmação no back-end;
 * PUT: Alterar uma infotmação do back-end;
 * DELETE: Deletar uma informação no back-end;
 */
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros uitilizados para indentificar recursos
 * Request Budy: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySql, SQlite, PostgreSQL, Oracle, Micrisoft SQL Server
  * NoSQl: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('user').select('*').where()
   */



