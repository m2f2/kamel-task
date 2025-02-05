import { Sidebar } from "@/components/ui/sidebar";
import { SidebarContent } from "../SidebarContent";


export function AppSidebar() {
  return (
    <Sidebar 
      className="top-16 bg-white shadow-lg border-r"
      variant="sidebar"
    >
      <div className="p-4">
        <SidebarContent />
      </div>
    </Sidebar>
  );
}
