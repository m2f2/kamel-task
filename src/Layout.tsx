import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ChatContainer } from "./components/ChatContainer";

export default function Layout({ className }: { className?: string }) {
  return (
    <div dir="ltr" className={`${className}`}>
      <SidebarProvider>
        <AppSidebar/>
        <main className="relative w-full">
          <SidebarTrigger className="absolute top-2 -left-3 text-white  z-50 bg-green-500 hover:bg-green-700 rounded-full" /> 
          {/* Content */}
          <div className="w-full" dir="rtl">
            <ChatContainer  />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
