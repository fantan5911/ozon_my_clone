import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { secret_key } from "../config";

export default function(req: Request, res: Response, next: NextFunction) {
    if (req.method == "OPTIONS") {
        next();
        return;
    }

    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({message: "Пользователь не авторизован"});
        }
        const decodedData = jwt.verify(token, secret_key);

        (req as any).user = decodedData;
        next();
    }
    catch (e) {
        return res.status(401).json({message: "Пользователь не авторизован"});
    }
}