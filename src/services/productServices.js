import axios from "axios";

class ProductsServices{
    static getAllProducts = ()=>axios.get('/products');
    static getAllCategory = ()=>axios.get('/products/categories');
   
}


export default ProductsServices;