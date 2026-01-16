import {Request, Response} from 'express';
import Product from '../models/Product';

class ProductController {
    async getProducts(req: Request, res: Response) {
        const products = await Product.find({});
        return res.status(200).json(products);
    }

    async addProduct(req: Request, res: Response) {
        try {
            const {
            seller,
            name,
            description,
            price
        } = req.body;

        const product = new Product({seller, name, description, price});
        await product.save();
        }
        catch (e) {
            console.log(e);
        }
    }
    async deleteProduct(req: Request, res: Response) {
        const deletedProduct = Product.findByIdAndDelete(req.body.id);
    }
}

export default new ProductController();