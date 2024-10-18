import { fastify } from 'fastify'
import { Database } from './database-users.js';

const server = fastify();
const database = new Database;

server.post('/moto', async (request, reply) => {
  const body = request.body;
  await database.createMoto(body);
  return 201;
});

server.listen({
  port: 3333,
})
