import 'reflect-metadata';
import Config from './config/config';
import { createConnection } from 'typeorm';
import { Product }  from "./entities/Product";
import Routes from "./routes/routes";
import * as express from "express";
import * as bodyParser from "body-parser";

var app = express();

var port = 3100;

app.get("/allProducts", Routes.getAll);
app.get("/getProductID/:id", Routes.getProductID);

var options = new Config();

var ConnectionOptions = options.config();
var connection = createConnection(ConnectionOptions);
connection.then(async connection => { console.log('connected to the database') });
connection.catch(Error);

app.listen(port, () => console.log("Server running at http://localhost:" + port))
