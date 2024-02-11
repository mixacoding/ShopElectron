import { useEffect } from "react";
import ProductsServices from "../services/productServices";
import { useDispatch } from "react-redux";
import { getProductHandler } from "../store/productSlice";

function HomePage() {

  const dispach = useDispatch();

  useEffect(()=>{
    ProductsServices.getAllProducts()
    .then(res=> dispach(getProductHandler(res.data.products)))
    .catch(err=>console.log(err))
  },[]);

  return (
    <div>
      HomePage
    </div>
  )
}

export default HomePage;
