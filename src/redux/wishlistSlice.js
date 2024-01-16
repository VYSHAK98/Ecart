import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeWishlist:(state,action)=>{
            return state.filter(i=>i.id!=action.payload)
        }
    }
})

export default wishlistSlice.reducer
export const {addToWishlist,removeWishlist}=wishlistSlice.actions