import { Router } from "express";
import AuthController from "./Auth/AuthController";
import AuthMiddleware from "./Auth/AuthMiddleware";
import ProductController from "./Product/ProductController";

const router = Router();

router.post("users/register", AuthController.Register);
router.post("users/login", AuthController.Login);

router.get("/products", AuthMiddleware, ProductController.getProducts);
router.post("/products/create", AuthMiddleware, ProductController.addProduct);
router.delete("/products/delete", AuthMiddleware, ProductController.deleteProduct);


export default router;