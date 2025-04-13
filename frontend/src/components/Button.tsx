import { ReactElement } from "react";

interface ButtonProps{
    type : "primary" | "secondary",
    startIcon?: ReactElement,
    text: string,
    onClick?: ()=>void
}

const defaultStyles="font-thin px-4 py-2 rounded-md flex items-center"
const typeStyles={
    "primary": "bg-purple-400 text-purple-500",
    "secondary": "bg-purple-600 text-white"
}

export function Button({type,startIcon,text,onClick} : ButtonProps){
    return (
        <> 
            <button className={`${defaultStyles} ${typeStyles[type]} cursor-pointer`} onClick={onClick}>
               {startIcon&& <div className="pr-2">{startIcon}</div>}
                {text}
            </button>
        </>
    )
}