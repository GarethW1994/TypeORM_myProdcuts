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
}).then(connection => {
  console.log(connection);
}).catch(error => console.log(error));
