import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signup() {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null); 
    const passwordRef = useRef<HTMLInputElement>(null);

    async function userSignup() {
        const username = usernameRef.current!.value;
        const password = passwordRef.current!.value;

       const response= await axios.post(`${BACKEND_URL}/signup`, {
            username,
            password
        })
        const status= response.status;
        console.log(status);
        if(status===200){
            alert("User is Signed Up");
            navigate('/signin');
        }
        if(status===203){
            alert("User Name is Already Taken");
        }
        if(status===204){
            alert("Password must be at least 8 characters long, with uppercase, lowercase, and a special character.");
        }  
    }

    return (
        <>
            <div className="flex h-screen w-screen fixed justify-center items-center bg-blue-100">
                <div className="h-72 w-72 bg-white rounded-md">
                    <div className="py-4 flex justify-center text-purple-500 text-2xl">
                        Sign Up
                    </div>
                    <div className="pt-6 pl-1">
                        <div className="py-2">
                            <InputBox placeholder="Username" reference={usernameRef} />
                        </div>
                        <div className="pt-2">
                            <InputBox placeholder="Password" reference={passwordRef} />
                        </div>
                    </div>

                    <div className="flex justify-center pt-4">
                        <Button type="secondary" text="Submit" onClick={userSignup} />
                    </div>
                </div>
            </div>
        </>
    );
}
