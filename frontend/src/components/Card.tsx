import axios from "axios";
import { BACKEND_URL } from "../config";
import { DeleteIcon } from "./icons/DeleteIcon";
import { DocumentIcon } from "./icons/DocumentIcon";
import { ShareIcon } from "./icons/ShareIcon";

interface CardProps {
  type: "twitter" | "youtube" | "document";
  title: string;
  link: string;
  id: string;
  contentUpdated: ()=>void;
}

export function Card({ type, title, link,id,contentUpdated}: CardProps) {

  async function DeletePost(){

      await axios.put(`${BACKEND_URL}/content`,{
        contentId: id
      },{
        headers:{
          token: localStorage.getItem("token")
        }
      })
      contentUpdated();
  }

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2 text-gray-500">
          <DocumentIcon />
          <div className="font-semibold text-lg text-black">{title}</div>
        </div>
        <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
          <a href={link}><ShareIcon /></a>
          <button className="cursor-pointer" onClick={DeletePost}><DeleteIcon /></button>
        </div>
      </div>

      {type === "twitter" && (
        <div className="px-4 pb-4">
          <blockquote className="twitter-tweet max-w-full">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        </div>
      )}

      {type === "youtube" && (
        <div className="px-4 pb-4">
          <iframe
            className="w-full h-64"
            src={link.replace("youtu.be/","www.youtube.com/embed/").replace("=","=-")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
