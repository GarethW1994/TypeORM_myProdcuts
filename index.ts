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
    __dirname + "/entity/*.js"
  ],
  autoSchemaSync: true,
}).then(async connection => {
  var product = new Product();

  // product.description = "Soy Milk 5L";
  // product.price = 19.99;

  let productRepository = connection.getRepository(Product);

  let updateProduct = await productRepository.findOneById({ id: 1 });

  updateProduct.description = "Soy Milk 2L";

  await productRepository.persist(updateProduct);

  console.log(updateProduct)

}).catch(error => console.log(error));
