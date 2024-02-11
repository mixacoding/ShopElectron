import axios from "axios";

class ProductsServices{
    static getAllProducts = () =>axios.get('/products');
    static getAllCategory = () =>axios.get('/products/categories');
    static getSingleProduct = (id) =>axios.get(`/products/${id}`)
}

export default ProductsServices;