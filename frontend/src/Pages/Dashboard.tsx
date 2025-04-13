import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../components/icons/PlusIcon"
import { ShareIcon } from "../components/icons/ShareIcon"
import { Sidebar } from "../components/Sidebar"
import axios from "axios"
import { BACKEND_URL } from "../config"

export function Dashboard(){
  const [Shared,setShared]=useState(false);
  const [modalState,setModalState]=useState(false);
  const [contentAdded,setContentAdded]=useState(false);
  const username=localStorage.getItem("username");
  const [cardsContent,setcardsContent]=useState([]);

    async function gettingCards(){
        const response= await axios.get(`${BACKEND_URL}/content`,{
          headers:{
            token: localStorage.getItem("token")
          }
        })
        const data=response.data.Contents;
        console.log(data);
        setcardsContent(data);
    }
    function ContentAdded(){
        setContentAdded(!contentAdded);
    }

    useEffect(()=>{
          gettingCards();
      },[contentAdded]);

    async function ShareBrain(){

        const response= await axios.post(`${BACKEND_URL}/brain/share`,{
          share: true
        },{
          headers:{
              token: localStorage.getItem("token")
          }
        })

        const hash= response.data.hash;
        alert("sharing url : http://localhost:5173/brain/"+hash);
        setShared(true);
      }
      async function DisableShareButton(){
        await axios.post(`${BACKEND_URL}/brain/share`,{
          share: false
        },{
          headers:{
              token: localStorage.getItem("token")
          }
        })
        alert("Sharing of Brain Disabled");
        setShared(false);
      }

    return(<>
         <Sidebar/>
            <div className="h-screen w-screen bg-gray-600">
              <CreateContentModal open={modalState} contentAdded={ContentAdded} onClose={()=>{
                setModalState(false);
              }}/>
              <div className={`flex justify-end bg-white right-0 gap-4 px-3 py-3 `}>
              <div className={`${Shared? "flex pr-33.5 justify-center text-purple-600 text-3xl": "flex pr-75 justify-center text-purple-600 text-3xl"}`}>
                Welcome , {username}
              </div>
              {Shared&&<Button type="primary" text="Disable Share" startIcon={<ShareIcon/>} onClick={DisableShareButton}/>}
                <Button type="primary" text="Share Brain" startIcon={<ShareIcon/>} onClick={ShareBrain}/>
                <Button type="secondary" text="Add Content" startIcon={<PlusIcon/>} onClick={()=>{
                  setModalState(true)
                }}/>      
              </div>
              <div className="flex py-4 gap-15 ml-84 flex-wrap">
              {cardsContent.map(({type, link, title,_id}) => (
                <Card 
                    key={_id}
                    type={type} 
                    link={link} 
                    title={title} 
                    id={_id}
                    contentUpdated={ContentAdded}
                />
              ))}
              </div>
            </div>
    </>)
}

