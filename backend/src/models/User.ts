import { Schema, model } from "mongoose";
import Product from "./Product";

const User = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    products: [{type: Schema.Types.ObjectId, ref: "Product"}]
})

export default model("User", User);