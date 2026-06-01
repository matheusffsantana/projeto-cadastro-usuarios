import usersRepository from "../repository/users.repository.js";

import bcrypt, { hash } from "bcrypt";



const usersController = {

    async get(){
        return usersRepository.get();
    },

    async post(req, reply){
        const { name, age, email, password } = req.body;

        let saltRounds = 10;
        let hash = await bcrypt.hash(password, saltRounds);
        await usersRepository.post(name, age, email, hash);
        return `Usuário ${name} foi adicionado com sucesso`
    },

    async put(req, reply){
        const { id } = req.params;
        const { name, age, email, password } = req.body;
        let saltRounds = 10;
        let hash = await bcrypt.hash(password, saltRounds);
        await usersRepository.put(id, name, age, email, hash);
        return `Usuário ${name} foi alterado com sucesso`
    },

    async delete(req, reply){
        const {id} = req.params;
        await usersRepository.delete(id);
        return `Usuário ${id} foi deletado com sucesso`
    }


}

export default usersController;