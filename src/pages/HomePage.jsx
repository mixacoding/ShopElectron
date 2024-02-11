import { useEffect } from "react";
import ProductsServices from "../services/productServices";
import { useDispatch, useSelector } from "react-redux";
import { getProductHandler } from "../store/productSlice";
import CardProductComponent from "../components/CardProductComponent";

//icons
import { FaList } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";

function HomePage() {

  const dispach = useDispatch();
  const {allProducts} = useSelector((state)=>state.productStore)

  useEffect(()=>{
    ProductsServices.getAllProducts()
    .then(res=> dispach(getProductHandler(res.data.products)))
    .catch(err=>console.log(err))
  },[]);

  return (
    <div className="container  mx-auto">
      <div className="flex items-center justify-end gap-5 mt-[20px] cursor-pointer">
        <FaList size={30}/>
        <IoGridOutline size={30}/>
      </div>
      {/* Our products/card */}
      <div className="flex flex-wrap gap-8 items-center justify-center mt-[40px]">
        {allProducts.map((item,index)=>{
          return <CardProductComponent key={item.id} item={item}/> 
        })}
      </div>
    </div>
  )
}

export default HomePage;
