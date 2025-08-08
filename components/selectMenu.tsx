"use client"
import { UpdateChart } from "@/store/slices/transactionSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SelectMenu({title}:{title:"Income" | "Expense" | "alltransaction" | "income" | "expense"}){
    const [selected, setSelected] = useState<"1Week" | "2Week" | "Month" | "3Month" | "6Month">("Month");
    const dispatch = useDispatch();
    const selectSelectMenu = `selectMenu-${title}`;
    const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setSelected(e.target.value as typeof selected)
        dispatch(UpdateChart({title:title.toLowerCase(),value:e.target.value}));
        localStorage.setItem(selectSelectMenu,JSON.stringify({title:title.toLowerCase(),value:e.target.value}))
    }
    useEffect(()=>{
        const stored = localStorage.getItem(selectSelectMenu) || "";
        if(stored){
            const parsed = JSON.parse(stored);
            if(parsed.title === "income"){
                dispatch(UpdateChart(parsed)); 
            }else if(parsed.title === "expense"){
                 dispatch(UpdateChart(parsed));
            }else if(parsed.title === "alltransaction"){
                 dispatch(UpdateChart(parsed)); 
            }      
            setSelected(parsed.value as typeof selected) 
        }else{
             dispatch(UpdateChart({title:title.toLowerCase(),value:"Month"}));
        }
    },[])
     return (
         <select className="py-0.5 sm:py-1.5 w-20 sm:w-24 border rounded-md dark:bg-gray-900 divWidth" onChange={handleChange} value={selected} >
                <option value="all">All</option>
                <option value="1Week">1 Week</option>
                <option value="2Week">2 Week</option>
                <option value="Month">Month</option>
                <option value="3Month">3 Month</option>
                <option value="6Month">6 Month</option>
        </select>
     )

}