import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export function Base(){
    const navigate=useNavigate();

    useEffect(()=>{
        navigate("/signup");
    },[]);
    
    return(<>
    </>)
}