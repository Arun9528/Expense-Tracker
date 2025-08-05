import { TransactionsProps } from "@/Transactions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// {
//     id:"",
//     role:"",
//     category:"",
//     price:0,
//     emoji:"",
//     date:""
// }
interface initialStateProps{
    data:TransactionsProps[],
    charDisplay:{
      title:string,
      value:string
    }
    isMenu:boolean,
    
}
const initialState:initialStateProps={
  data:[],
  charDisplay:{
   title:"",
   value:"Month"
  },
  isMenu:false
}
export const transactionSlice = createSlice({
    name:"transaction",
    initialState,
    reducers:{
         addAllTransaction:(state,action:PayloadAction<TransactionsProps[]>)=>{
            state.data = [...action.payload].sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());
         },
         UpdateChart:(state,action:PayloadAction<{title:string,value:string}>)=>{
            state.charDisplay = action.payload
         },
         seeMenu:(state,action:PayloadAction<boolean>)=>{
            state.isMenu = action.payload
         },
         deleteTransaction:(state,action:PayloadAction<string>)=>{
            state.data = state.data.filter(d => d.id !== action.payload);
         },
         addTransaction:(state,action:PayloadAction<TransactionsProps>)=>{
            state.data.unshift(action.payload)
         }
    }
});
export const {addAllTransaction,
   UpdateChart,seeMenu,deleteTransaction,addTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;