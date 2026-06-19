// Import the framework and instantiate it
import Fastify from 'fastify'
import cors from '@fastify/cors'


// importação das rotas de usuario

import usersRoutes from './routes/users.routes.js';
import authRoute from './routes/auth.routes.js';



const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  origin:'*',
  methods: ['GET', 'PUT', 'POST', 'DELETE']
});

await fastify.register(usersRoutes, {
  prefix: "/users"
});

await fastify.register(authRoute, {
  prefix: "/users"
})


// Declare a route
fastify.get('/', async function handler (request, reply) {
  return "Server is runnning at door 3000";
})

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}