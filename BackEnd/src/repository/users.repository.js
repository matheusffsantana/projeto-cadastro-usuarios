import { neon } from "@neondatabase/serverless"

const sql = neon("postgresql://neondb_owner:npg_zVRh9iG1yPlQ@ep-red-sound-apf79smw-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

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