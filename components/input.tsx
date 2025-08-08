
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

interface inputProps<TFormValues extends FieldValues,TName extends Path<TFormValues> = Path<TFormValues>>{
  label:TName;
  type:string;
  placeholder:string;
  register:UseFormRegister<TFormValues>
  error?:FieldError;
  validation:RegisterOptions<TFormValues, TName>
}
export default function Input<TFormValues extends FieldValues,TName extends Path<TFormValues> = Path<TFormValues>>({label,type,placeholder,register,validation,error}:inputProps<TFormValues,TName>){
  const id = String(label)
     return (
        <div className="relative">
            <label htmlFor={id} className="text-black dark:text-white capitalize">   {String(label)}</label>
            <input type={type} id={id} className="w-full py-3 outline-0 border border-gray-600 rounded-md px-2 mt-1"
             placeholder={placeholder} {...register(label,validation)} />
             {error && (
        <p className="text-red-500 text-sm  absolute top-full">
          {error.message}
        </p>
      )}
        </div>
     )
}