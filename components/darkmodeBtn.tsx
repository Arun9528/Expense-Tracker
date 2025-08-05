"use client"

import { useEffect, useState } from "react"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

export default function DarkModebtn(){
    const [isDark,setIsDark] = useState<boolean>(false);
    useEffect(()=>{
        const raw = localStorage.getItem("isDark") || false;
        if(raw){
            const parsed = JSON.parse(raw);
            document.documentElement.classList.toggle("dark",parsed);
            setIsDark(parsed)
        }
    },[])
    const handleClick = ()=>{
        setIsDark(prev => {
            const next = !prev;
             localStorage.setItem("isDark",JSON.stringify(next));
             document.documentElement.classList.toggle("dark",next)
             return next
        });
       
    }
     return (
        <button type="button" className="cursor-pointer flex items-center justify-end  sm:text-lg font-medium"
        onClick={handleClick}>{isDark ? <FaMoon/> : <FaSun/>}&nbsp;{isDark ? "Dark Mode" : "Light Mode"}</button>
     )
}