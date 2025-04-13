import { BrainIcon } from "./icons/BrainIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return(<>
        <div className="h-screen w-72 border-2 bg-white fixed border-gray-100 ">
            <div className="flex pl-12 pt-4 text-4xl text-purple-600 items-center">
                <div className="pr-4">
                    <BrainIcon/>
                </div>
                Brainly
            </div>  
            <div className="flex py-8 pl-0.5 flex-wrap">  
                <SidebarItem icon={<YoutubeIcon/>} text="Youtube"/>
                <SidebarItem icon={<TwitterIcon/>} text="Twitter"/>
            </div>
        </div>
    </>)
}