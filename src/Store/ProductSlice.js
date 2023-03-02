
import axios from 'axios';
const {createSlice, createAsyncThunk } = require('@reduxjs/toolkit');


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING:'loading'
    })
const ProductSlice =createSlice({
    name: 'product',
    initialState:{
        data:[],
        status: STATUSES.IDLE ,
    },
    reducers:{
  },
  extraReducers: (builder) => {
builder
.addCase(fetchProducts.pending, (state,action)=> {
    state.status = STATUSES.LOADING;
})
.addCase(fetchProducts.fulfilled, (state,action)=> {
    state.data = action.payload;
    state.status = STATUSES.IDLE;
})
.addCase(fetchProducts.rejected, (state,action)=> {
    state.status = STATUSES.ERROR;
})

  }
})
export const {setProducts,setStatus} = ProductSlice.actions;
export default ProductSlice.reducer;

//thunks

export const fetchProducts = createAsyncThunk('products/fetch', async() =>{
return await axios.get('http://fakestoreapi.com/products').then(res=>{
   return res.data;
    }) 
})