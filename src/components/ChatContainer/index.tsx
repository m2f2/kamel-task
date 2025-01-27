import { ChatHeader } from "./chat/ChatHeader";
import { ChatStatusBar } from "./chat/ChatStatusBar";
import { ChatTitle } from "./chat/ChatTitle";
import { ChatMessagesList } from "./chat/ChatMessagesList";
import { ReplySection } from "./chat/ReplySection";
import { useRef } from "react";
import { useAtom } from "jotai";
import { fullscreenAtom } from "@/store";

export function ChatContainer() {
  const [isFullscreen, setIsFullscreen] = useAtom(fullscreenAtom);
  const containerRef = useRef<HTMLDivElement>(null);


  const handleFullscreenToggle = async () => {
    try {
      if (!isFullscreen && containerRef.current) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={`flex flex-col bg-white ${isFullscreen?" py-6":""}`}
      style={{ height: "calc(100vh - 6rem)" }}
      ref={containerRef}
    >
      {/* Header Section */}
      <ChatHeader />

      <div className="flex items-center justify-between px-4 ">
        <ChatTitle />
        <ChatStatusBar onClick={handleFullscreenToggle} />
      </div>
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gray-100 rounded-lg shadow">
        <ChatMessagesList />
      </div>

      {/* Reply Section */}
      <div className="">
        <ReplySection />
      </div>
    </div>
  );
}
