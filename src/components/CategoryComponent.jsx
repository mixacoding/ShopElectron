import { useEffect, useState } from "react"
import ProductsServices from "../services/productServices";
import { toast } from "react-toastify";

function CategoryComponent() {

    const [category,setCategory] = useState([]);
    const [isActive,setIsActive] = useState(false);

    
    useEffect(()=>{
        ProductsServices.getAllCategory()
        .then(res=>setCategory(res.data))
        .catch(err =>toast.warning('nisu stigli podaci'))
    },[])
    //kada se promeni dependecy pozvace se useEfekt

  return (
    <div className="bg-[#F4F4F4] py-[20px]">
        <div className="container mx-auto flex items-center flex-col lg:flex-row  h-full gap-8">
            <button 
            className="bg-mainBlue text-textWhite px-[12px] py-[6px] rounded-md cursor-pointer hover:bg-mainOrange text-[14px]" onClick={()=>{setIsActive(!isActive)}}>
            {isActive ? 'Show Category' : 'Hide Category'}
            </button>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 gap-5 place-content-center">
                {!isActive ? category.map((cat,index)=>{
                    return (
                    <li 
                        key={index} 
                        className="bg-mainBlue 
                        text-textWhite px-[16px] py-[8px] rounded-md cursor-pointer
                        hover:bg-mainOrange transition-all">
                        {cat}
                    </li>
                    )
                }): null}
            </ul>
        </div>
    </div>
  )
}

export default CategoryComponent
