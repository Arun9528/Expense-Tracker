'use client'
import { RootState } from "@/store";
import { addAllTransaction, deleteTransaction } from "@/store/slices/transactionSlice";
import { Transactions } from "@/Transactions";
import DateFormat from "@/utils/dateFormat";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaTrashAlt } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import * as XLSX from 'xlsx';
import SelectMenu from "./selectMenu";
import useThreshold from "@/hook/useThreshold";
interface TransactionsDataProps {
  title: "income" | "expense" | "Recent Transactions" | "alltransaction";
  OnlyFiveTransation: boolean;
  isIncomePage?:boolean;
}
type RowType = {
  Category: string
  Role:     string
  Amount:   number
  Date:     string
  Emoji:    string
}
export default function TransactionsData({
  title,
  OnlyFiveTransation,isIncomePage
}: TransactionsDataProps) {
  const [isfirstTime,setisfirstTime] = useState<boolean>(true)
  const dataName = (title === "income" || title ===  "expense") && title;
  const getDatas = useSelector((state:RootState)=> state.transactions.data);
  const allData = (title === "Recent Transactions" || title ===  "alltransaction") ? getDatas : 
  getDatas.filter(d => d.role === dataName);
  const {Threshold} = useThreshold();
  const filtered = allData.filter((d) => new Date(d.date) >= Threshold);
  const getData = OnlyFiveTransation ? allData.slice(0,5) : filtered;
  const dispatch = useDispatch();
  useEffect(()=>{
    const stored = localStorage.getItem("allTransaction") || "";
    if(stored){
      const raw = JSON.parse(stored);
      dispatch(addAllTransaction(raw));
    }else{
       dispatch(addAllTransaction(Transactions));
    }
 
  },[dispatch])
  const handleDelelte = (id:string)=>{
    dispatch(deleteTransaction(id));
  }
  useEffect(()=>{
    if(isfirstTime){
      setisfirstTime(false);
      return
    }
    const b = new Set([...getDatas,...allData])
    const converArray = Array.from(b);
    localStorage.setItem("allTransaction",JSON.stringify(converArray))
  },[allData])
  const pathName = title === "Recent Transactions" ? "alltransaction" : title
  const handleDownload = ()=>{
    const sheetData:RowType[] = allData.map(tx => ({
      Category: tx.category,
      Role: tx.role,
      Amount: tx.price,
      Date: DateFormat(tx.date),
      Emoji: tx.emoji
    }));
    const ws = XLSX.utils.json_to_sheet(sheetData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Transactions');

    const headers = Object.keys(sheetData[0]) as (keyof RowType)[];
    const colWidths = headers.map(key=> {
      const maxCell = Math.max(key.length,...sheetData.map(row => String(row[key]).length))
      return {wch:maxCell + 2}
    });
    ws["!cols"] = colWidths;
    XLSX.writeFile(wb, `${title}-transactions.xlsx`);

  }
  return (
    <div className={`styleLink rounded-lg p-3 ${!isIncomePage && "h-[30rem]"}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold capitalize">
        {isIncomePage ? title === "income" ? "Income Source" : "All Expenses" : title}</h3>
     
           
          {OnlyFiveTransation ? (
          <Link href={`/${pathName}`} className="flex items-center border border-gray-300 bg-gray-100 cursor-pointer rounded-md 
          px-4 py-1 hover:text-purple-700 font-semibold dark:text-black text-[14px] " >See All &nbsp; <FaArrowRight /></Link>
        ) : (
        <div className="flex items-center gap-x-3">
          <SelectMenu title={pathName}/>
          <button type="button" className="text-[14px] sm:text-lg px-3 py-1 rounded-md bg-gray-400 dark:bg-teal-400 text-white cursor-pointer" 
        onClick={handleDownload}>
          Download</button>
        </div>
          )
          }
         
      </div>
      <div className={`${isIncomePage && "grid-cols-1 md:grid-cols-2 gap-8"} grid gap-y-4 mt-4`}>
        {getData?.map((d) => (
          <div
            key={d.id}
            className="flex justify-between items-center styleLink px-2 py-3 rounded-lg hover:bg-gray-100
             dark:hover:bg-gray-800 group "
          >
            <div className="flex items-center gap-x-3 sm:gap-x-5">
              <div className="bg-gray-200 size-11 rounded-full  cursor-default">
                <p className="text-[25px] text-center">{d.emoji}</p>
              </div>
              <div>
                <p className="text-[12px] sm:text-[14px] font-semibold ">{d.category}</p>
                <p className="text-[10px] sm:text-[12px] font-medium text-gray-500">
                  {DateFormat(d.date)}
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-x-4">
              {
                (isIncomePage && title !== "alltransaction") && <FaTrashAlt onClick={()=> handleDelelte(d.id)} className="hover:text-red-500 text-gray-400 cursor-pointer hidden group-hover:inline"/>
              }
            <div
              className={`${
                d.role === "income" ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"
              } flex items-center gap-x-2  rounded-lg  px-2`}
            >
              <p className="flex items-center gap-x-2 p-1 cursor-default text-[12px] sm:text-[14px] font-semibold">
                {d.role === "income" ? "+" : "-"} $
                {d?.price.toLocaleString("en-In")}
                {d.role === "income" ? (
                  <FaArrowTrendUp />
                ) : (
                  <FaArrowTrendDown />
                )}
              </p>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
