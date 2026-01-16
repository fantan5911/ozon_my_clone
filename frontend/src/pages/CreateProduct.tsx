import type { FC } from "react";
import { useProduct } from "../store/ProductStore";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../Services/Product.service";

const CreateProduct: FC = () => {
    const {
        seller,
        name,
        description,
        price
    } = useProduct();

    const product = {seller: seller, name: name, description: description, price: price};

    const ProductQuery = useMutation({
        mutationKey: ['add product'],
        mutationFn: () => createProduct(product),
        onSuccess: () => console.log("успешно"),
        onError: () => console.log("ошибка")
    })


    return (
        <div className="flex items-center justify-center w-full">
            <div>
                <input type="text"
                 placeholder="Введите название"
                 className=
                 "w-full p-3 text-gray-700 border-0 border-gray-300 rounded-lg shadow-md focus:ring-2 focus:border-black focus:outline-none resize-none mt-20 mb-5"/>
                <textarea
  className="w-full p-3 text-gray-700 border-0 border-gray-300 rounded-lg shadow-md
         focus:ring-2 focus:black focus:border-black focus:outline-none
         transition duration-120 resize-none min-w-lg min-h-50 mb-5"
  placeholder="Введите описание"
></textarea>
                <input type="text" placeholder="Введите цену" className="
                w-full p-3 text-gray-700 border-0 border-gray-300 rounded-lg shadow-md
                 focus:ring-2 focus:border-black focus:outline-none resize-none
                "/>
                <button onClick={() => ProductQuery.mutate()}
                 className="border-2 border-solid border-transparent rounded-md mt-6
                  text-white bg-black p-2 justify-items-end cursor-pointer
                  hover:border-black hover:bg-white
                  hover:text-black transition-colors duration-200">Опубликовать</button>
            </div>
        </div>
    );
};

export default CreateProduct;