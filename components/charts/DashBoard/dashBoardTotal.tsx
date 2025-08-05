"use client"
import { RootState } from "@/store";
import { GiPayMoney } from "react-icons/gi";
import { IoMdCard } from "react-icons/io";
import { LuWalletMinimal } from "react-icons/lu";
import { useSelector } from "react-redux";
export default function DashBoardTotal(){
const getData = useSelector((state:RootState)=> state.transactions.data);
const getExpense = getData.filter(d => d.role === "expense");
const getIncome = getData.filter(d => d.role === "income")
const getIncomeTotal = getIncome.reduce((acc,curr)=> acc + curr.price, 0);
const getExpenseTotal = getExpense.reduce((acc,curr)=> acc + curr.price,0);
const getTotal = getIncomeTotal - getExpenseTotal;
     return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-6 lg:gap-y-0 responsiveGrid">
        <div className="flex  items-center gap-x-8 styleLink rounded-lg p-4">
          <div className="size-16 rounded-full bg-purple-700 justify-items-center content-center">
            <IoMdCard className="text-3xl text-white" />
          </div>
          <div>
            <p className="text-gray-500">Total Balance</p>
            <p className="text-2xl font-semibold">${(Number(getTotal.toFixed(2))).toLocaleString("en-In")}</p>
          </div>
        </div>
        <div className="flex  items-center gap-x-8 styleLink rounded-lg p-4">
          <div className="size-16 rounded-full bg-orange-400 justify-items-center content-center">
            <LuWalletMinimal className="text-3xl text-white" />
          </div>
          <div>
            <p className="text-gray-500">Total Income</p>
            <p className="text-2xl font-semibold">${(Number(getIncomeTotal.toFixed(2))).toLocaleString("en-In")}</p>
          </div>
        </div>
        <div className="flex  items-center gap-x-8 styleLink rounded-lg p-4">
          <div className="size-16 rounded-full bg-red-600 justify-items-center content-center">
            <GiPayMoney className="text-3xl text-white" />
          </div>
          <div>
            <p className="text-gray-500">Total Expense</p>
            <p className="text-2xl font-semibold">${(Number(getExpenseTotal.toFixed(2))).toLocaleString("en-In")}</p>
          </div>
        </div>
      </div>
     )
}