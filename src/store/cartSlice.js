import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cart : [],
        totalProduct : 0,
        totalPrice: 0,
    },
    reducers : {
            saveInCartHandler:(state,action)=>{
                // console.log(action.payload);
                let copyArray = [...state.cart];
                //Proveravam indexnu poziciju u arrayu
                let findIndex = null;

                copyArray.find((item,index)=>{
                    if(item.id === action.payload.id){
                        findIndex = index;
                        return;
                    }
                })
                //proveravam i dodajem u korpu
                if(findIndex === null){
                    copyArray.push({...action.payload, count:1, cartTotal:action.payload.price});
                    state.totalPrice += action.payload.price;
                    state.totalProduct++;
                }else{
                    copyArray[findIndex].count++;
                }
                //setujem korpu
                state.cart = copyArray;
            },
            setPriceHandler: (state,action)=>{
              
                const {increment,index} = action.payload;
                let copyArray =[...state.cart];
                copyArray[index].cartTotal += copyArray[index].price * increment;
                //total price
                state.totalPrice = subTotal(copyArray);

                if(copyArray[index].count === 1 && increment === -1){
                    copyArray.splice(index,1);
                    state.totalProduct--;
                }else{
                    copyArray[index].count += increment;
                }
                state.cart = copyArray;
            },
            removeProductHandler:(state,action)=>{
                console.log(action.payload);
                let {index} = action.payload;
                let copyArray =[...state.cart];

                copyArray.splice(index,1);
                state.totalProduct--;
                state.totalPrice = subTotal(copyArray);
                state.cart = copyArray;
            }
    }
})

/**
 * Calculate the subtotal of the items in the array cart.
 *
 * @param {array} arrayCart - The array of items in the shopping cart
 * @return {number} The subtotal of the items in the shopping cart
 */

function subTotal(arrayCart){

    return arrayCart.reduce((acc,current)=>{
        return acc+current.cartTotal;
    },0)

}

export const { saveInCartHandler, setPriceHandler , removeProductHandler} = cartSlice.actions;
export default cartSlice.reducer;
