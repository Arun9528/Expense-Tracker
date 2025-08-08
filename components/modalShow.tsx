"use client";

import { useState } from "react";
import Modal from "./modal";

export default function ModalShow({ title }: { title: "Income" | "Expense" }) {
  const [isModal, setIsModal] = useState<boolean>(false);
  return isModal ? (
      <Modal title={title} setIsModal={setIsModal} />
  ) :  (
      <button
        type="button"
        className="text-purple-800 bg-purple-100 py-1 px-3 sm:me-5 text-[13px] sm:text-[16px] rounded-md font-semibold cursor-pointer"
        onClick={() => setIsModal(true)}
      >
        <span className="text-[14px] sm:text-[21px]">+</span> Add {title}
      </button>
  )
}
