import { DocumentIcon } from "./icons/DocumentIcon";
import { ShareIcon } from "./icons/ShareIcon";

interface CardProps {
  type: "twitter" | "youtube" | "document";
  title: string;
  link: string;
}

export function CardShare({ type, title, link}: CardProps) {

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2 text-gray-500">
          <DocumentIcon />
          <div className="font-semibold text-lg text-black">{title}</div>
        </div>
        <div className="flex items-center space-x-2 text-gray-500 cursor-pointer">
          <a href={link}><ShareIcon /></a>
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
