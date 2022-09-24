import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {createCategory,updateCategory,  getAllCategories , getCategoryById, deleteCategory  } from './categoryAPI';

const initialState={
    allCategories:[],
    createCategory:"",
    updateCategory:"",
    getAllCategories:"",
    getCategoryById:"",
    deleteCategory:""
}
export const CreateCategory = createAsyncThunk(
    'categories/createCategory',
    async (values)=>{
        const response = await createCategory(values);
        return response
    }
)
export const UpdateCategory = createAsyncThunk(
    'categories/updateCategory',
    async (data)=>{
        const response = await updateCategory(data);
        return response.data
    }
)
export const GetCategoryById = createAsyncThunk(
    'categories/getCategoryById',
    async (id)=>{
        const response = await getCategoryById(id);
        return response.data
    }
)
export const DeleteCategory = createAsyncThunk(
    'categories/deleteCategory',
    async (id)=>{
        const response = await deleteCategory(id);
        return response
    }
)
export const GetCategories = createAsyncThunk(
    'categories/getAllCategories',
    async ()=>{
        const response = await getAllCategories();
        return response.data
    }
)
export const categorySlice = createSlice({
    name:'categories',
    initialState,
    reducers :{

    },
    extraReducers: (builder)=>{
        builder
        //add new category
            .addCase(CreateCategory.pending, (state)=>{
                state.createCategory='loading'
            })
            .addCase(CreateCategory.fulfilled, (state, action)=>{
               state.createCategory='success'
               console.log(action.payload)
            })
            .addCase(CreateCategory.rejected, (state) => {
                state.createCategory='failed'
            })

        //get all categories
            .addCase(GetCategories.pending, (state)=>{
                state.getAllCategories='loading'
            })
            .addCase(GetCategories.fulfilled, (state, action)=>{
                state.getAllCategories= 'success'
                console.log('payload', action.payload)
                state.allCategories= action.payload
            })
            .addCase(GetCategories.rejected, (state)=>{
                state.getAllCategories='failed'

            })
        //delete one category
            .addCase(DeleteCategory.pending, (state)=>{

            })
            .addCase(DeleteCategory.fulfilled, (state, action)=>{
                console.log('payload', action)
                state.allCategories = state.allCategories.filter(p=> p._id !== action.payload)
            })
            .addCase(DeleteCategory.rejected, (state, action)=>{

            })
        //get category by ID
            .addCase(GetCategoryById.pending, (state)=>{

            })
            .addCase(GetCategoryById.fulfilled, (state, action)=>{
                console.log(action.payload);
                state.getCategoryById= action.payload.data
            })
            .addCase(GetCategoryById.rejected, (state, action)=>{

            })
        //update category
            .addCase(UpdateCategory.pending, (state)=>{
                state.updateCategory= 'loading'
            })
            .addCase(UpdateCategory.fulfilled, (state, action)=>{

            console.log("update category payload",action.payload)
                state.updateCategory='success'
                    
              
                })
            .addCase(UpdateCategory.rejected, (state, action)=>{
                state.updateCategory = 'failure'
            })

    }
})

export const { } = categorySlice.actions;
export const selectCategorie = (state) => state.categories.allCategories ;
export default categorySlice.reducer;
