import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name : 'favorite',
    initialState : {
        favoriteItems : [],
        favoritTotal : 0
    },
    reducers : {
        favoriteHandler : (state,action)=>{
            console.log(action.payload);
            let copyArray = [...state.favoriteItems];
            let findIndex = null;

            copyArray.find((item,index)=>{
                if(item.id === action.payload.id){
                    findIndex = index;
                    return;
                }
            })

            if(findIndex === null){
                copyArray.push(action.payload);
                state.favoritTotal++;
            }else{
                copyArray.splice(findIndex,1);
                state.favoritTotal--;
            }
            //copyArray.push(action.payload);
            state.favoriteItems = copyArray;

        }
    }
})


export const {favoriteHandler} = favoriteSlice.actions;
export default favoriteSlice.reducer;