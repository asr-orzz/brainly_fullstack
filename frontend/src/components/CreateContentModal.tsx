import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { CloseIcon } from "./icons/CloseIcon";
import { InputBox } from "./InputBox";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface ContentModalProps{
    open: boolean,
    onClose: ()=>void,
    contentAdded: ()=>void
}

export function CreateContentModal({ open,onClose,contentAdded}: ContentModalProps) {

    const [type,setType]=useState("");
    useEffect(()=>{
        setType("");
    },[open]);

    const titleRef=useRef<HTMLInputElement>(null); 
    const linkRef=useRef<HTMLInputElement>(null); 

   async function Submit(){
        const title=titleRef?.current!.value;
        const link =linkRef?.current!.value;

        const response= await axios.post(`${BACKEND_URL}/content`,{
            title: title,
            link: link,
            type: type
        },{
            headers:{
                token: localStorage.getItem("token")
            }
        });
        const status=response.status;
        if(status===200){
            onClose();
            contentAdded();
        }
        if(status===201){
            alert("Enter Valid Inputs");
        }
        if(status===202){
            alert("Signin Again");
        }
    }

    return (
        <>
            {open && (
                <>
                    <div className="w-screen h-screen bg-slate-500 top-0 left-0 opacity-40 fixed" onClick={onClose}>
                    </div>
                        <div className="flex justify-center items-center h-screen w-screen fixed">
                            <div className="bg-white p-4 shadow-lg rounded-md">
                                <div className="flex justify-end cursor-pointer" onClick={onClose}>
                                    <CloseIcon/>
                                </div>
                                <div className="py-1">
                                    <InputBox placeholder="Title" reference={titleRef}/>
                                </div>
                                <div className="py-1">
                                    <InputBox placeholder="Link" reference={linkRef}/>
                                </div>
                                <div className="flex justify-center gap-3 py-2">
                                    <button className={`rounded-md border-2 border-gray-200 p-2 cursor-pointer ${type==="youtube"?"bg-blue-100":""}`} onClick={()=>{setType("youtube")}}>Youtube</button>
                                    <button className={`rounded-md border-2 border-gray-200 p-2 cursor-pointer ${type==="twitter"?"bg-blue-100":""}`} onClick={()=>{setType("twitter")}}>Twitter</button>
                                </div>
                                <div className="flex justify-center cursor-pointer"> 
                                    <Button type="secondary" text="Submit" onClick={Submit}/>
                                </div>
                            </div>
                    </div>
                </>
            )}
        </>
    );
}

