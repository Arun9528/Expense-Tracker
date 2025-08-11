"use client"
import { RootState } from "@/store";
import { seeMenu } from "@/store/slices/transactionSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GiPayMoney } from "react-icons/gi";
import { IoIosLogOut, IoMdClose } from "react-icons/io";
import { LuWalletMinimal } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
export default function Sibebar(){
const path = usePathname();
const router = useRouter();
const isMenu = useSelector((state:RootState)=> state.transactions.isMenu);
const dispatch = useDispatch();
const pathName  = path.split("/")[1]
const LinkStyle = " dark:hover:border-purple-700 styleLink hover:text-white cursor-pointer rounded-md flex items-center py-2 justify-center gap-x-3 "
const handleClose = ()=>{
   dispatch(seeMenu(false))
}
const handlelogout = ()=>{
  localStorage.removeItem("isLoggedIn");
  router.replace("/");
}
    return (
      <nav className={` sm:w-4/12 md:w-3/12 xl:w-2/12 border-r border-gray-300 px-3 gap-y-5 min-h-screen md:min-h-[calc(100vh-3.6rem)] ${isMenu ? "fixed top-0 bg-white dark:bg-gray-900 w-6/12 z-20 space-y-5" : "md:flex md:flex-col hidden"}`} >
        {isMenu && <IoMdClose className="absolute right-3 top-2 text-2xl hover:text-red-500 cursor-pointer" onClick={handleClose}/>}
            <div className="justify-items-center mt-7">
                <div className="overflow-hidden size-28 rounded-full mb-2">
                    <Image src={"/img/profile1.png"} alt="profile1" height={300} width={300} priority/>
                </div>
                <p className="font-semibold text-2xl">John Doe</p>
            </div>
           <Link href={"/dashboard"} className={`${LinkStyle} ${pathName === "dashboard" ? "bg-purple-700 text-white" : 
            "hover:bg-purple-700 dark:border"}`} onClick={handleClose} >
               <MdOutlineDashboard className="text-2xl"/>   
               <span className="text-lg">Dashboard</span> 
             </Link>
            <Link href={"/income"} className={`${LinkStyle} ${pathName === "income" ? "bg-purple-700 text-white border-0" : 
            "hover:bg-purple-700 dark:border"}`} onClick={handleClose} >
               <LuWalletMinimal className="text-2xl"/>  
               <span className="text-lg">Income</span> 
             </Link>
           <Link href={"/expense"} className={`${LinkStyle} ${pathName === "expense" ? "bg-purple-700 text-white" : 
            "hover:bg-purple-700 dark:border"}`} onClick={handleClose} >
               <GiPayMoney className="text-2xl"/>  
               <span className="text-lg">Expense</span> 
             </Link>
            <button type="button" className={`${LinkStyle} w-full hover:bg-purple-700 dark:border`} onClick={handlelogout}>
              <IoIosLogOut className="text-2xl"/>  
              <span className="text-lg">Logout</span> 
            </button>

        </nav>
     )
}