import { ReactElement } from "react"

interface SidebarItemProps{
    icon: ReactElement,
    text: string
}

export function SidebarItem({icon,text} : SidebarItemProps){
    return(<>
        <div className=" flex w-70 h-10 py-2 items-center border-1 border-gray-100 text-xl bg-white rounded-md cursor-pointer transition delay-35 hover:bg-gray-100">
            <div className="pr-5 pl-10">
                {icon}
            </div>
            {text}
        </div>
    </>)
}