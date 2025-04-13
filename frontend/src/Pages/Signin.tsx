import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
export function Signin(){

    const navigate=useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null); 
    const passwordRef = useRef<HTMLInputElement>(null);

   async function userSignIn() {
        const username = usernameRef.current!.value;
        const password = passwordRef.current!.value;

       const response=await  axios.post(`${BACKEND_URL}/signin`, {
            username,
            password
        })
        const status=response.status;

        if(status===200){
            const data=await response.data;
            const token=data.token;
            localStorage.setItem("token",token);
            const username=data.username;
            localStorage.setItem("username",username);
            navigate("/dashboard");
        }
        if(status===201){
            alert("Wrong Password");
        }
        if(status===202){
            alert("User Doesn't Exist")
        }
        if(status===203){
            alert("Enter Valid Username and Password");
        }

    }

    return(<>
         <div className="flex h-screen w-screen fixed justify-center items-center bg-blue-100">
                    <div className="h-72 w-72 bg-white rounded-md ">
                        <div className="py-4 flex justify-center text-purple-500 text-2xl">
                            Sign In
                        </div>
                        <div className="py-6 pl-1">
                            <div className="py-2">
                                <InputBox placeholder="Username" reference={usernameRef}/>
                            </div>
                            <div className="py-2">
                              <InputBox placeholder="Password" reference={passwordRef}/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button type="secondary" text="Submit" onClick={userSignIn}/>
                        </div>
                    </div>
                </div>
    </>)
}