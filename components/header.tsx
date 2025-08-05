"use client"
import { IoMdMenu } from "react-icons/io";
import DarkModebtn from "./darkmodeBtn";
import { useDispatch} from "react-redux";
import { seeMenu } from "@/store/slices/transactionSlice";

export default function Header(){
    const dispatch = useDispatch()
     return (
        <header className="grid grid-cols-2 px-6 py-3 shadow-md items-center border-b border-gray-300">
            <div className="flex items-center gap-x-5">
                <IoMdMenu onClick={()=> dispatch(seeMenu(true))} className="md:hidden flex text-3xl cursor-pointer"/>
                <h1 className=" text-2xl">Expense Tracker</h1>
            </div>
            <DarkModebtn/>
        </header>
     )
}