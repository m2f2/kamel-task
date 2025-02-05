import { useState } from "react";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ChatContainer } from "./components/ChatContainer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";
import { SidebarContent } from "./components/SidebarContent";

export default function Layout({ className }: { className?: string }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [sidebarSize, setSidebarSize] = useState(20);

  const toggleSidebar = () => {
    setSidebarSize(isExpanded ? 0 : 20);
    setIsExpanded(!isExpanded);
  };

  return (
    <div dir="ltr" className={`${className} min-h-screen flex relative`}>
      <SidebarProvider>
        <ResizablePanelGroup direction="horizontal" className="overflow-hidden">
          {/* Sidebar Panel */}
          <ResizablePanel
            defaultSize={sidebarSize}
            minSize={15} 
            maxSize={30}
            className={`border-r shadow-lg bg-white transition-all duration-300 overflow-y-scroll ${
              sidebarSize === 0 ? "sr-only" : "w-auto"
            }`}
          >
            {isExpanded && <SidebarContent />}
          </ResizablePanel>

          {isExpanded && <ResizableHandle withHandle />}

          {/* Main Content Area */}
          <ResizablePanel defaultSize={80} className="relative w-full flex-1">
            <div
              className="absolute top-2 left-2 z-50"
              style={{ transition: "left 0.1s ease-in-out" }}
            >
              <SidebarTrigger
                aria-label="Toggle sidebar"
                onClick={toggleSidebar}
                className="relative -left-2 bg-green-500 hover:bg-green-700 
                        rounded-full p-2 transition-colors shadow-md hover:shadow-lg"
              />
            </div>
            <ChatContainer />
          </ResizablePanel>
        </ResizablePanelGroup>
      </SidebarProvider>
    </div>
  );
}