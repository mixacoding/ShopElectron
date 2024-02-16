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
                console.log(action.payload);
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
            }
    }
})


export const { saveInCartHandler} = cartSlice.actions;
export default cartSlice.reducer;
