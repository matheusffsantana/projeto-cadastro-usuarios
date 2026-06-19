import authController from "../controller/auth.controller.js";



export default async function authRoute(fastify) {
    fastify.post('/login', async (req, reply) => {

        return authController.login(req, reply);

    })
    
}