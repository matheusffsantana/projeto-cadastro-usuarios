import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

const sql = neon(process.env.DATABASE_URL);


const authRepository = {

    async verificaLogin(email) {

        return await sql`SELECT * FROM users WHERE email = ${email}`

    }

};

export default authRepository;