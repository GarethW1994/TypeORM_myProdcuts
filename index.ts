import { error } from 'util';
import { connect } from 'tls';
import 'reflect-metadata';
import * as config from './config/config';
import { createConnection } from 'typeorm';
import { Product } from './entities/Product';



var connection = createConnection(config.connectionOptions);

connection.then(async connection=> {
    connection.connect();
    console.log('connected to the database');
});

connection.catch(error);
