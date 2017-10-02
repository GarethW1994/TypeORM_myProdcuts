import { log } from 'util';
import 'reflect-metadata';
import { Product } from "../entities/Product";
import { getManager } from "typeorm";
import { Request, Response, NextFunction } from "express";

class Routes {
    async getAll(req: Request, res: Response, next: NextFunction) {
        let productRepository = getManager().getRepository(Product);
        let allProducts = await productRepository.find();
         res.send(allProducts);
    }

    async saveProduct(req: Request, res: Response, next: NextFunction) {
        let productRepository = getManager().getRepository(Product);

       const newProduct = productRepository.create(req.body);

       await productRepository.save(newProduct);

       console.log('saved success!');
    }

    async getProductID(req: Request, res: Response, next: NextFunction) {
        let productRepository = getManager().getRepository(Product);

        let findID = await productRepository.findOneById({id: req.params.id});

        res.send(findID);
    }
}

export default new Routes()