import jwt from 'jsonwebtoken';
import { secret_key } from '../config';
import { ObjectId } from 'mongoose';

export const generateAccessToken = (id: any) => {
    const payload = {
        id
    }
    jwt.sign(payload, secret_key);
}