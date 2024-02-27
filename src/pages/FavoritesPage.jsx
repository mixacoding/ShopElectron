import { useSelector } from "react-redux";
import CardProductComponent from "../components/CardProductComponent";

//framer 
import { motion } from "framer-motion";

function FavoritesPage() {
    const { favoriteItems } =useSelector((state)=>state.favoriteStore);

    const fadeInAnimationVariants = {
      initial : {
       opacity :0,
       y : -100
     },
     animate : {
       opacity : 1,
       y : 0,
       transition : {
         delay : 0.1,
         duration : 1
      }
     }
    };
 
    
  return (
    <div className="mt-[50px] ">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
         className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-[30px] ">
            {favoriteItems.map((item,index)=>{
                return <CardProductComponent
                key={item.id} 
                item={item}
                activView={'gridView'}
               />
            })}
        </motion.div>
    </div>
  )
}

export default FavoritesPage
