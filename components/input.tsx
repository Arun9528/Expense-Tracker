
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

interface inputProps<TFormValues extends FieldValues>{
  label:Path<TFormValues>;
  type:string;
  placeholder:string;
  register:UseFormRegister<TFormValues>
  error?:FieldError;
  validation:RegisterOptions<TFormValues, Path<TFormValues>>
}
export default function Input<TFormValues extends FieldValues>({label,type,placeholder,register,validation,error}:inputProps<TFormValues>){
     return (
        <div className="relative">
            <label htmlFor={label} className="text-black dark:text-white capitalize">{label}</label>
            <input type={type} id={label} className="w-full py-3 outline-0 border border-gray-600 rounded-md px-2 mt-1"
             placeholder={placeholder} {...register(label,validation)} />
             {error && (
        <p className="text-red-500 text-sm  absolute top-full">
          {error.message}
        </p>
      )}
        </div>
     )
}