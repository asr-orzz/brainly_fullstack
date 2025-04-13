import { useEffect, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useParams } from "react-router-dom"
import { CardShare } from "../components/CardShare"

export function ShareBrainDashBoard(){
  const[errorOccured,SeterrorOccured]=useState(false);
  const username=localStorage.getItem("username");
  const [cardsContent,setcardsContent]=useState([]);
  const hash=useParams().hash;

    async function gettingCards(){
        console.log(errorOccured);
        const response= await axios.get(`${BACKEND_URL}/brain/${hash}`,{
          headers:{
            token: localStorage.getItem("token")
          }
        })
        const status=response.status;
        if(status===203){
            SeterrorOccured(true);
        }
        else{
            const data=response.data.content;
            setcardsContent(data);

        }
        console.log(errorOccured);
    }

      useEffect(()=>{
          gettingCards();
      },[errorOccured]);

   

    return(<>
        {errorOccured? <div className="flex h-screen w-screen justify-center items-center text-6xl">
            404 Bad Request
        </div>: <div>
        <Sidebar/>
                    <div className="h-screen w-screen bg-gray-600">
                    <div className={`flex justify-center bg-white right-0 gap-4 px-3 py-3 `}>
                            <div className="flex pl-0 justify-center text-purple-600 text-3xl">
                                    {username}'s Brain
                            </div>  
                    </div>
                    <div className="flex py-4 gap-15 ml-84 flex-wrap">
                    {cardsContent.map(({type, link, title,_id}) => (
                        <CardShare
                                type={type}
                                link={link}
                                title={title}
                                key={_id}
                        />
                    ))}
                    </div>
                        </div>
            </div>}
       
       
    </>)
}
