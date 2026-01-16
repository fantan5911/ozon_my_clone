import { Schema, model } from "mongoose";
import User from "./User";

const Product = new Schema({
    seller: {type: Schema.Types.ObjectId, ref: "User"},
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true}
})

export default model("Product", Product);