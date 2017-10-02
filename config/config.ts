import { log } from 'util';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ConnectionOptions } from 'typeorm';
import { Product } from "../entities/Product";

export default class connectionOpt {
    config() {
        const connectionOptions: ConnectionOptions = {
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "$G_Code1!",
            database: "products",
            synchronize: true,
            entities: [Product],
        }

        return connectionOptions;
    }
}
