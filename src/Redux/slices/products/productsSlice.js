import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("products/fetchProduct", 
    async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        if (!response.ok) {
            throw new Error("network response bad!")
        }
        return response.json()
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "initial",
        error: null,
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload); // Exempel på en reducer som lägger till en produkt
        },
        clearProducts: (state) => {
            state.items = []; // Exempel på en reducer som tömmer produktlistan
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending,(state) => {
                state.status = "loading"
            })
            .addCase(fetchProduct.fulfilled,(state, action) => {
                state.status = "succeded"
                state.items = action.payload
            })
            .addCase(fetchProduct.rejected,(state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer

export const { addProduct, clearProducts } = productSlice.actions;


// export const productSlice = createSlice(){
//  name: "shoppingList",
//  initialState,
//  reducers: {
//     fetchProductStart
//  }   
// }