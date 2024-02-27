import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import ProductsServices from "../services/productServices";
import { useDispatch, useSelector } from "react-redux";

//icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Rating } from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

//Redux
import { saveInCartHandler } from "../store/cartSlice";
import { favoriteHandler } from "../store/favoriteSlice";

//framer 
import { motion } from "framer-motion";

//components
// import ButtonComponent from "../components/ButtonComponent";

function ProductDetailsPage() {


  const [currentImg,setcurrentImg] =useState(0)
  const [singleProduc,setSingleProduct]= useState({});
  const [isLoading,setIsLodaing] =useState(false);

  const [favoritIcon, setFavoritIcon] = useState(null);

  const {favoriteItems} = useSelector((state)=>state.favoriteStore);

  const dispatch= useDispatch();


  const {id} = useParams();

  useEffect(()=>{
    ProductsServices.getSingleProduct(id)
    .then((res)=> {
      setSingleProduct(res.data)
      setIsLodaing(true)
      
    })
    .catch((err)=> console.log(err))
  },[]);

  //Na promenu samog favorit itema, id je uvek string
  useEffect(()=>{
    favoriteItems.find((item)=>{
      if(item.id === parseInt(id)){
        setFavoritIcon(item.id)
        return;
      }
    })
  },[favoriteItems])

  //ovde saljem proizvod u redux
  function handleProduct(){
    dispatch(saveInCartHandler(singleProduc)); 
  }

  //Ovde cuvamo podatak u favoriteSlice(redux)
  function saveToFavorite(){
    dispatch(favoriteHandler(singleProduc));
  }

  //framer animation

   const fadeInAnimationVariants = {
     initial : {
      opacity :0,
      x : -100
    },
    animate : {
      opacity : 1,
      x : 0,
      transition : {
        delay : 0.1,
        duration : 1
     }
    }
   };

   const fadefromRightSide = {
    initial : {
     opacity :0,
     x : 100
   },
   animate : {
     opacity : 1,
     x : 0,
     transition : {
       delay : 0.1,
       duration : 1
    }
   }
  }
  return (
    <>
      {isLoading && (
        <div className="container mx-auto">
            <div className="flex mt-[50px] flex-col items-center justify-center gap-[30px] lg:gap-[10px] lg:flex-row">
            {/*left side image*/}
            <motion.div  className="flex flex-col gap-[30px] justify-center items-center w-full px-[20px] lg:px-[0px] lg:w-[50%]"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            >
              <img 
                src={singleProduc.images[currentImg]} 
                alt={singleProduc.title} 
                className="border border-mainBlue rounded-[20px] h-[400px]"
              />
              <div className="flex flex-wrap gap-[10px]">
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
            </motion.div>
            {/*righ side content*/}
            <motion.div  className="lg:w-[50%] w-full px-[20px] lg:px-[0px] flex flex-col gap-3"  
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            variants={fadefromRightSide}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            >
                <h2 className="text-[30px] text-mainBlue font-bold">{singleProduc.title}</h2>
                <span className="text-[30px] text-textColor">${singleProduc.price}</span>
                <div className="flex items-center">
                  <span className="text-textColor gap-2">Reviews:</span>
                  <Rating 
                  name="half-rating-read" 
                  defaultValue={singleProduc.rating} 
                  precision={0.5} 
                  readOnly />
                </div>
                <div className="flex items-center gap-2">
                  Availability:
                  {
                    singleProduc.stock ? 
                (    <span className="flex items-center gap-2 text-[#30BD57] font-bold">
                      <FaCheck color="#30BD57" size={20} />
                      In Stock
                    </span>
                    ) : (    
                      <span className="flex items-center gap-2 text-[#FF0000] font-bold">
                    <ImCross color="#FF0000" size={20} />
                    Out of stock
                  </span>)
                  }
                </div>
                <p className="text-textColor font-bold">
                  Hurry up! only <span className="text-[18px] text-[#30BD57] font-bold">{singleProduc.stock}</span> product left in stock!
                </p>
                <hr  className="mt-[10px]"/>
                <p className="text-textColor text text-[20px]">Total price: <span className="text-mainBlue font-bold">${singleProduc.price}</span>
                </p>
                {/*ADD /Favorite section*/}
                  <div className="flex items-center gap-3">
                {/*<ButtonComponent label='Add Cart' bgColor='#EDA415' textColor='#fff' />*/}
                {/* Fixme: fix add cart button with redux(cartSlice) */}
                    <Link to={'/cardProducts'} className="px-[32px] py-[12px] rounded-full bg-mainOrange text-textWhite" onClick={()=>handleProduct()}>
                     Add Card
                    </Link>
                    <button className="px-[32px] py-[12px] rounded-full bg-slate-400 ">
                      <Link to='/favorites'>
                      {favoritIcon=== parseInt(id) ? 
                        <FaHeart size={32} color="#f90000" onClick={()=>saveToFavorite()} /> 
                        : 
                        <CiHeart size={32} color="#fff" onClick={()=>saveToFavorite()}/>}
                      </Link>
                    </button>
                  </div>
            </motion.div>
          </div>
        </div>
      )} 
    </>
  );
};

export default ProductDetailsPage;
  