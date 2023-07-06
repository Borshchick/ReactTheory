import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./FormReducer";


const store = configureStore({
    reducer: formReducer
})

export default store