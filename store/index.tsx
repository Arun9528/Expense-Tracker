import { configureStore } from "@reduxjs/toolkit"
import  transactionReducer from "./slices/transactionSlice";

export const makeStore = ()=>{
    return configureStore({
        reducer:{
            transactions:transactionReducer
        }
    })
}
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];