"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./input";
import { AuthIds } from "@/Auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
export interface loginProp {
  email: string;
  password: string;
}
export default function Loginpage() {
  const [isShow,setIsShow] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    reset,setError,
    formState: { errors },
  } = useForm<loginProp>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const router = useRouter(); 
  const onSubmit: SubmitHandler<loginProp> = (data) => {
    const user = AuthIds.find((d)=> d.email === data.email);
    if(!user){
        setError("email",{type:"manual",message:"No account found with that Email"});
        return;
    }
    if(user.password !== data.password){
        setError("password",{type:"manual",message:"Incorrect password"});
        return;
    }
    localStorage.setItem("isLoggedIn", "true");
    router.replace("/dashboard");
    reset()
  };
  const handleClick = ()=>{
    setIsShow(prev => !prev)
  }
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-3.6rem)] ">
      
      <div className="size-96 rounded-lg border p-8 content-center relative">
      <button type="button" className="absolute top-2 right-2.5 size-5 rounded-full border text-sm cursor-pointer"
       onClick={handleClick}> i</button>
      {
        isShow && (
          <div className=" absolute top-0 -right-60 border rounded-lg p-4">
              <p>Email: john.doe@gmail.com</p>
              <p>Password: 11111111</p>
          </div>
        )
      }
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" >
          <Input<loginProp>
            label="email"
            type="email"
            placeholder="Please Enter Your Email Id"
            register={register}
            validation={{
              required: "Email Id is Required",
            }}
            error={errors.email}
          />
           <Input<loginProp>
            label="password"
            type="password"
            placeholder="Please Enter Your Password"
            register={register}
            validation={{
              required: "Password is Required",
              min:{value:8,message:"Password at least 8 character"}
            }}
            error={errors.password}
          />
          <div className="text-center">
            <button type="submit" className="py-2 px-8 rounded-lg cursor-pointer text-white bg-teal-500 ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
