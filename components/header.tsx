"use client"
import { IoMdMenu } from "react-icons/io";
import DarkModebtn from "./darkmodeBtn";
import { useDispatch} from "react-redux";
import { seeMenu } from "@/store/slices/transactionSlice";
import { usePathname } from "next/navigation";

export default function Header(){
    const dispatch = useDispatch();
    const pathsName = usePathname();
     return (
        <header className="grid grid-cols-2 px-2 sm:px-6 py-3 shadow-md items-center border-b border-gray-300">
            <div className="flex items-center gap-x-2 sm:gap-x-4">
                {pathsName !== "/" && <IoMdMenu onClick={()=> dispatch(seeMenu(true))} className="md:hidden flex text-[20px] sm:text-2xl cursor-pointer"/> }
                <h1 className="text-[18px] sm:text-2xl font-semibold">Expense Tracker</h1>
            </div>
            <DarkModebtn/>
        </header>
     )
}