"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function useRequireAuth(){
    const router = useRouter();
    useEffect(()=>{
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if(!isLoggedIn){
            router.replace('/');
        }
    },[router])
}