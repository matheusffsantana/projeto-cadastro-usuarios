import authRepository from "../repository/auth.repository.js";

import bcrypt, { hash } from "bcrypt";


const authController = {

    async login(req, reply) {

        const { email, password } = req.body;
        const usuario = await this.validaLogin(email);

        if (!usuario) {
            return {message: "Usuário ou senha incorreto!"}
        };

        const senhaValidada = await bcrypt.compare(password, usuario.password);

        if(!senhaValidada) {
            return 'Usuário ou senha incorreta'
        }

        return { user: usuario.name, email: usuario.email, age: usuario.age}
    },

    async validaLogin (email) {

        let consulta = await authRepository.verificaLogin(email);

        if (consulta.length > 0) {
            return consulta[0]
        }

        return null

    }


};

export default authController