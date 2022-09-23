import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {CreateProduct,UpdateProduct,  GetProducts,GetProductById, DeleteProduct  } from './productAPI';

const initialState={
    CreateProduct:"",
    UpdateProduct:"",
    GetProducts:"",
    GetProductById:"",
    DeleteProduct:"",
    AllProducts:[]
}
export const createProduct = createAsyncThunk(
    'product/CreateProduct',
    async (values)=>{
        const response = await CreateProduct(values);
        return response
    }
)
export const updateProduct = createAsyncThunk(
    'product/UpdateProduct',
    async (data)=>{
        const response = await UpdateProduct(data);
        return response
    }
)
export const getProductById = createAsyncThunk(
    'product/GetProductById',
    async (id)=>{
        const response = await GetProductById(id);
        return response.data
    }
)
export const deleteProduct = createAsyncThunk(
    'product/DeleteProduct',
    async (id)=>{
        const response = await DeleteProduct(id);
        return response
    }
)
export const getProducts = createAsyncThunk(
    'product/GetProducts',
    async ()=>{
        const response = await GetProducts();
        return response.data
    }
)
export const productSlice= createSlice({
    name:'product',
    initialState,
    reducers :{},
    extraReducers: (builder)=>{
        builder
        //get all products
            .addCase(getProducts.pending, (state)=>{

            })
            .addCase(getProducts.fulfilled, (state, action)=>{
                console.log('payload', action.payload.data)
                state.AllProducts= action.payload.data
            })
            .addCase(getProducts.rejected, (state, action)=>{

            })
        //delete one product
            .addCase(deleteProduct.pending, (state)=>{

            })
            .addCase(deleteProduct.fulfilled, (state, action)=>{
                console.log('payload', action)
                state.AllProducts = state.AllProducts.filter(p=> p._id !==action.payload)
            })
            .addCase(deleteProduct.rejected, (state, action)=>{

            })
        //get product by ID
            .addCase(getProductById.pending, (state)=>{

            })
            .addCase(getProductById.fulfilled, (state, action)=>{
                console.log(action.payload);
                state.GetProductById= action.payload.data
            })
            .addCase(getProductById.rejected, (state, action)=>{

            })
        //update product
            .addCase(updateProduct.pending, (state, action)=>{
                state.UpdateProduct= 'loading'
            })
            .addCase(updateProduct.fulfilled, (state, action)=>{
                state.UpdateProduct='success'
            })
            .addCase(updateProduct.rejected, (state, action)=>{
                state.UpdateProduct = 'failure'
            })

    }
})
export const { } = productSlice.actions;

export const selectCreateProduct= (state)=> state.product.createProduct;
export const selectUpdateProduct= (state)=> state.product.UpdateProduct;
export const selectGetProducts= (state)=> state.product.GetProducts;
export const selectGetProductById= (state)=> state.product.GetProductById;
export const selectDeleteProduct= (state)=> state.product.DeleteProduct;
export default productSlice.reducer;
