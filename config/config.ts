import { log } from 'util';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Product from '../entities/Product';
import { ConnectionOptions } from 'typeorm';


export let dbConnection : ConnectionOptions = {
    driver: {
        type: 'mysql',
        host: 'localhost',
        username: 'root',
        password: '$G_Code1!',
        database: 'products'
    }, 
    entities : [
        __dirname + '../entities/*.js'
    ],
    autoSchemaSync: true,
};
