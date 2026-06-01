import usersController from "../controller/users.controller.js";

export default async function usersRoutes(fastify){

    fastify.get("/getAllUsers", async () => {
        return usersController.get();
    })

    fastify.post("/createUser", async (req, reply) => {
        return usersController.post(req, reply);
    })

    fastify.put("/updateUser/:id", async (req, reply) => {
        return usersController.put(req, reply);
    })

    fastify.delete("/deleteUser/:id", async (req, reply) => {
        return usersController.delete(req, reply);
    })

}
