import {Ref} from "react";

interface InputBoxProps {
  placeholder: string;
  reference?: Ref<HTMLInputElement>
}

export function InputBox({ placeholder, reference }: InputBoxProps) {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-98/100 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder}
        ref={reference}
      />
    </div>
  );
}
