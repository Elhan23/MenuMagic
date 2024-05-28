import { configureStore } from "@reduxjs/toolkit";
import FormSlice from '../slice/FormSlice/FormSlice'

export const  store = configureStore({
   reducer: {
       registration: FormSlice
   }
})