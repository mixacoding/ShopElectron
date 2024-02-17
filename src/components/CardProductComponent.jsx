import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function CardProductComponent({item,activView}) {
    // console.log(item);
    
  return (
    <div className={activView === 'gridView' ? "w-[300px] h-full border border-mainBlue rounded-[10px] flex flex-col text-center gap-[15px]" : "w-full mt-[40px] flex items-center justify-between bg-slate-300 rounded-xl pr- "}>
      <div className="relative">
        <img 
        src={item.thumbnail} 
        alt={item.title} 
        className={activView === 'gridView' ? 'w-full h-[150px] object-object-fit-cover rounded-[10px]' : 'w-[200px] h-[200px] object-fit-cover rounded-t-[20px]'} />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#000000] rounded-t-[10px] opacity-60 hover:opacity-0 transition-all cursor-pointer" />
      </div>
      <h2 className="text-xl font-bold">{item.title}</h2>
      <span className="text-mainBlue">${item.price}</span>
        <div >
            <Rating 
            name="half-rating-read" 
            defaultValue={item.rating} 
            precision={0.5} 
            readOnly />
        </div>
        <Link to={`/productDetails/${item.id}`} className="bg-mainOrange text-textWhite px-[10px] py-[10px] rounded-b-[10px] cursor-pointer hover:bg-mainBlue">View Detail...</Link>
    </div>
  )
}

export default CardProductComponent;
