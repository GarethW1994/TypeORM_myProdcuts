import "reflect-metadata";
import { createConnection } from "typeorm";
import { Product } from "./entity/Product";

createConnection({
  driver: {
    type: "mysql",
    host: "localhost",
    username: 'root',
    password: '$G_Code1!',
    database: 'products'
  },
  entities: [
    Product
  ],
  autoSchemaSync: true,
}).then(async connection => {
  var product = new Product();

  product.description = "Soy Milk 5L";
  product.price = 19.99;

  let productRepository = connection.getRepository(Product);

  await productRepository.persist(product);

  let allProducts = await productRepository.find();

  console.log(allProducts);

}).catch(error => console.log(error));
