import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../Services/Product.service";
import { useEffect, type FC } from "react";
import { useProduct } from "../store/ProductStore";

const Products: FC = () => {

    const ProductsQuery = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        select: data => data.data,
    })

    const {products, setProducts} = useProduct(state => ({
        products: state.products,
        setProducts: state.setProducts
    }));

    useEffect(() => {
        
    }, [ProductsQuery.isSuccess])


    useEffect(() => {
        if (ProductsQuery?.data) {
            setProducts(ProductsQuery.data)
        }
    }, [ProductsQuery?.data, setProducts])
    
    return (
        <div>
            {products.map(product => 
                <div>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                </div>
            )}
        </div>
    );
};

export default Products;