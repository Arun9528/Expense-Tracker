"use client"

import { useEffect, useState } from "react";

export default function useIsSmBreakPoint(){
      const [isSm,setIsSm] = useState<boolean>(false);
      useEffect(()=>{
        const a = window.matchMedia("(min-width:640px)");
        setIsSm(a.matches);
        const onChange = (e:MediaQueryListEvent)=>setIsSm(e.matches);
        a.addEventListener("change",onChange);
        return ()=> a.removeEventListener("change",onChange)
      },[]);
      return isSm
}