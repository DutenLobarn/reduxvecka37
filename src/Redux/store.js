import { configureStore} from "@reduxjs/toolkit";
// import {  } from "";
import productReducer  from "./slices/products/productsSlice";


const store = configureStore({  

    reducer: {
        products: productReducer,
    }


})


export default store;