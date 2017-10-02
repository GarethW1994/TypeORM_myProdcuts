import { log } from 'util';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Product from '../entities/Product';
import { ConnectionOptions } from 'typeorm';


export let connectionOptions : ConnectionOptions = {
    driver: {
        type: 'mysql',
        host: 'localhost',
        username: 'root',
        password: '$G_Code1!',
        database: 'products'
    }, 
    logging: {
        logQueries: true,
        logFailedQueryError: true
    },
    autoSchemaSync: true,    
    entities : [__dirname + '../entities/*.js']
};
