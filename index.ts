import "reflect-metadata";
import * as config from "./config/config";
import { createConnection } from 'typeorm';
import { Product } from './entities/Product';



createConnection(config.dbConnection).then(async connection => {
    console.log('connected to db');
    let product = new Product();
    
    let productRepository = connection.getRepository(Product);

    let allProducts = await productRepository.find();

    console.log(allProducts);
}).catch(error =>{
    console.log(error);
});
