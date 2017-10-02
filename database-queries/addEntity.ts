import { Product } from "../entities/Product";
import connection from '../config/config';
import { getManager } from 'typeorm';


class getAllProducts {
  getAll() {
    let product = new Product();

    let productRepository = getManager().getRepository(Product);

    let allProducts = productRepository.find();

    console.log(allProducts);
  }  
}

export default getAllProducts;