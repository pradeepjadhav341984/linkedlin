 import mysql from "mysql2/promise";
class Database {

    private connection: mysql.Connection | null = null;


    async connect() {

        try {

            this.connection = await mysql.createConnection({

                host: process.env.DB_HOST || "localhost",

                user: process.env.DB_USER || "root",

                password: process.env.DB_PASSWORD || "root",

                database: process.env.DB_NAME || "testdb",

                port: Number(process.env.DB_PORT) || 3306

            });


            console.log("MySQL Database Connected Successfully");


        } catch(error) {

            console.error("Database Connection Failed:", error);

            throw error;

        }

    }



    async executeQuery(query:string, params:any[] = []) {


        if(!this.connection) {

            throw new Error("Database not connected");

        }


        const [result] = await this.connection.execute(
            query,
            params
        );


        return result;

    }



    async closeConnection() {


        if(this.connection) {

            await this.connection.end();

            console.log("Database Connection Closed");

        }

    }

}


export default new Database();