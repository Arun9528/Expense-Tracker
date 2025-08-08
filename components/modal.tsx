"use client";
import { IoMdClose } from "react-icons/io";
import Input from "./input";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { SubmitHandler, useForm } from "react-hook-form";
import { TransactionsProps } from "@/Transactions";
import { useDispatch } from "react-redux";
import { addTransaction } from "@/store/slices/transactionSlice";

type ModalProps = {
  title: "Income" | "Expense";
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};
type FormValues = Omit<TransactionsProps, "id" | "role">;
export default function Modal({ title, setIsModal }: ModalProps) {
  const [isEmoji, setIsEmoji] = useState<boolean>(false);
  const [emoji, setEmoji] = useState<string>("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      emoji: "",
      date: "",
      category: "",
      price: undefined,
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<FormValues> = async(data) => {
      const role: TransactionsProps["role"] = title === "Income" ? "income" : "expense";
    const getdata = { ...data,id:crypto.randomUUID(),role,price:Number(data.price)}
      dispatch(addTransaction(getdata))
      reset();
      setEmoji("");
      setIsModal(false)
  };
  const handleEmoji = (emojiData: EmojiClickData) => {
    setEmoji(emojiData.emoji);
    setValue("emoji",emojiData.emoji,{shouldValidate:true})
    setIsEmoji(false);
  };
  return (
    <div className="fixed inset-0 h-screen bg-black/50 z-10 flex justify-center items-center" onClick={()=> setIsModal(false)}>
      <div className=" w-md sm:w-3xl h-9/12 bg-white dark:bg-gray-800 rounded-lg p-3" onClick={(e)=> e.stopPropagation()}>
        <div className="flex justify-between items-center pb-2.5 ">
          <h2 className="text-2xl font-semibold">Add {title}</h2>
          <IoMdClose
            className="text-2xl cursor-pointer hover:text-red-500"
            onClick={() => setIsModal(false)}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-3">
          <div className="flex py-3 relative">
            <div
              className="flex items-center gap-x-5 cursor-pointer"
              onClick={() => setIsEmoji((prev) => !prev)}
            >
             <input  type="hidden" {...register("emoji",{required:"Emoji is Required"})} value={emoji} />
              {emoji ? (
                <p className="text-4xl">{emoji}</p>
              ) : (
                <button
                  type="button"
                  className="size-14 cursor-pointer rounded-full bg-white flex justify-center items-center"
                >
                  <GrGallery className="text-purple-600 text-2xl" />
                </button>
              )}
              <p>Pick Icon</p>
            </div>
            {isEmoji && (
              <div className="fixed z-20 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  ">
                <EmojiPicker
                  skinTonesDisabled
                  onEmojiClick={(data) => handleEmoji(data)}
                  lazyLoadEmojis
                />
                <button
                  type="button"
                  className=" cursor-pointer absolute -top-3 -right-3 rounded-full
                               dark:text-black text-lg bg-white size-6 flex items-center justify-center"
                  onClick={() => setIsEmoji(false)}
                >
                  x
                </button>
              </div>
            )}
            {errors.emoji?.message && (
              <p className="text-red-500 text-sm  absolute top-full">
                {errors.emoji.message}
              </p>
            )}
          </div>

          <Input<FormValues,"category">
            label="category"
            type="text"
            placeholder="Rent,Groceries,etc"
            register={register}
            validation={{
              required: "Category Name is Required",
            }}
            error={errors.category}
          />
           <Input<FormValues, "price">
            label="price"
            type="number"
            placeholder="Please Enter Write"
            register={register}
            validation={{ required: "Price is required " }}
            error={errors.price}
          />
           <Input<FormValues, "date">
            label="date"
            type="date"
            placeholder="date"
            register={register}
            validation={{ required: "date is Required" }}
            error={errors.date}
          />
          <button
            type="submit"
            className="bg-purple-800 px-3 py-2 rounded-md float-end cursor-pointer mt-4 text-white"
          >
            Add {title}
          </button>
        </form>
      </div>
    </div>
  );
}
