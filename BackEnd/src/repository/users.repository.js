import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

const sql = neon(process.env.DATABASE_URL);

const usersRepository = {

    async get(){
        return await sql`SELECT * FROM users`;
    },

    async post(name, age, email, password) {
        const result = await sql`
        INSERT INTO users (name, age, email, password)
        VALUES (${name}, ${age}, ${email}, ${password})
        `;
    },

    async put(id, name, age, email, password) {
        const result = await sql`
        UPDATE users
        SET name = ${name}, age = ${age}, email = ${email}, password = ${password}
        WHERE id = ${id}
        `;
    },

    async delete(id) {
        const result = await sql`
        DELETE FROM users
        WHERE id = ${id}
        `
    }

}

export default usersRepository;