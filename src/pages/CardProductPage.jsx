import { useSelector } from "react-redux"
import CartItemsComponent from "../components/CartItemsComponent";
import country from "../constants/country";


function CardProductPage() {

  const { cart, totalPrice } = useSelector((state)=>state.cartStore)

console.log(cart);

  return (
    <div className="mt-[20px] lg:mt-[50px]">
      <div className="container mx-auto flex flex-col lg:flex-row gap-5">
          {/*left side */}
          <div className="w-full lg:w-[70%]">
          {/*header of items*/}
            <div className="grid grid-cols-5 bg-[#E2F4FF] h-[60px] place-items-center mb-[20px]">
              <p className="text-[20px] text-textColor font-medium">Product</p>
              <p className="text-[20px] text-textColor font-medium">Price</p>
              <p className="text-[20px] text-textColor font-medium">Quantity</p>
              <p className="text-[20px] text-textColor font-medium">Subtotal</p>
            </div>
            {/*content of items */}
            <div className="flex flex-col gap-4 ">
              {cart.map((item,index)=>{
                return <CartItemsComponent item={item} index={index} key={index} />
              })}
            </div>
          </div>
          {/*right side */}
          <div className="w-full lg:w-[30%] border border-[#F4F4F4] flex flex-col gap-3 sticky  top-0 rounded-lg">
            {/*heading/tittle */}
            <div className="h-[60px] bg-[#E2F4FF] flex items-center justify-center w-full">
              <h2 className="text-center font-medium text-[18px] ">Card Total</h2>
            </div>
            <div className="px-[20px] flex flex-col gap-[20px]">
            <div className="flex items-center justify-between my-[15px] border-b border-textColor">
            <p className="text-[20px] font-medium text-mainBlue">Subtotal</p>
            <span className="text-[20px]">${totalPrice}</span>
           </div>

           {/*discount*/}
           <div className="">
              <p className="text-[14px] text-slate-600">Take your discount 50%</p>
              <div className="border border-slate-500 rounded-full flex items-center justify-center w-full">
                <input className="px-[8px] py-[4px] rounded-full outline-none w-full" type="text" placeholder="Insert your coupon"/>
                <button className=" px-[8px] py-[4px] rounded-full text-mainBlue mr-[5px]">Apply</button>
              </div>
           </div>
           {/*country*/}
           <div className="">
           <select className="w-full px-[8px] py-[4px] border border-slate-500 rounded-full bg-textWhite">
                 {country.map((el,index)=>{
                   return <option key={index}> {el.name}</option>
                 })}
           </select>
         </div>
         <button className="bg-mainOrange text-textWhite px-[16px] py-[8px] rounded-full">Process Payment</button>
            </div>
             {/*content*/}
             
          </div>
      </div>
    </div>
  )
}

export default CardProductPage
