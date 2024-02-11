import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductsServices from "../services/productServices";


//icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function ProductDetailsPage() {
  const [currentImg,setcurrentImg] =useState(0)
  const [singleProduc,setSingleProduct]= useState({});
  const [isLoading,setIsLodaing] =useState(false)
  const {id} = useParams();

  useEffect(()=>{
    ProductsServices.getSingleProduct(id)
    .then((res)=> {
      setSingleProduct(res.data)
      setIsLodaing(true)
      console.log(res.data);
    })
    .catch((err)=> console.log(err))
  },[])

  return (
    <>
      {isLoading && (
        <>
            <div className="flex mt-[50px]">
            {/*left side image*/}
            <div className="flex flex-col gap-[30px] justify-center items-center lg:w-[50%]">
              <img 
                src={singleProduc.images[currentImg]} 
                alt={singleProduc.title} 
                className="border border-mainBlue rouded-[20px] w-[500px] h-[500px]"
              />
              <div className="flex  gap-[10px]">
                {singleProduc.images.map((el,i)=>{
                  return (
                    <img 
                      src={el} 
                      alt={el.title} 
                      key={i} 
                      className={`${currentImg === i ? 'border-mainOrange' : 'border-mainBlue'} w-[100px] h-[100px] p-[5px] object-fit-cover rounded-[20px] border cursor-pointer `}  
                      onClick={()=>setcurrentImg(i)}
                    />)
                })}
              </div>
            </div>
            {/*righ side content*/}
            <div className="lg:w-[50%]">
                <h2>{singleProduc.title}</h2>
                <span>${singleProduc.price}</span>
                <p>
                  <span>Reviews:</span>
                  {singleProduc.rating}
                </p>
                <p>
                  Availability:
                  {
                    singleProduc.stock ? 
                (    <span>
                      <FaCheck />
                      Available
                    </span>
                    ) : (    
                      <span>
                    <ImCross />
                    Out of stock
                  </span>)
                  }
                </p>
                <p>
                  Hurry up! only {singleProduc.stock} product left in stock!
                </p>
                <hr  className="mt-[10px]"/>
                <p>Total price: <span>${singleProduc.price}</span></p>
            </div>
          </div>
        </>
      )} 
    </>
  );
};

export default ProductDetailsPage;
