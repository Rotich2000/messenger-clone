"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
    id: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

const MessageInput = ({id, placeholder, type, required, register, errors}: Props) => {
  return (
    <div className="relative w-full">
        <input 
        id={id}
        type={type} 
        autoComplete={id}
        {...register(id, {required})}
        placeholder={placeholder}
        className="text-white font-light py-3 px-4 bg-gray-900 w-full rounded-full focus:outline-none"
        />
    </div>
  )
}

export default MessageInput