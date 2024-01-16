import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// creating asyncThunk
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    return await axios.get('https://fakestoreapi.com/products')
})
 
//slice creation

const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        allProducts: [],
        products:[],
        error: ''
    },
    reducers:{
        search:(state,action)=>{
            state.allProducts=state.products.filter(i=>i.title.toLowerCase().includes(action.payload))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.allProducts = action.payload.data
            state.products=action.payload.data
            state.error = ""
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.allProducts = []
            state.error = action.payload
        })
    }
})

export default productSlice.reducer
export const {search}=productSlice.actions