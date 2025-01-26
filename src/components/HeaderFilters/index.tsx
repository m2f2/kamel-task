import { Search, File, Clock3, CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotificationIcon from "./NotificationIcon";
import { useState } from "react";

const HeaderSection = ({ className }: { className?: string }) => {
  const handleSearch = () => console.log("Search action");
  const handleFile = () => console.log("File action");
  const handleClock = () => console.log("Clock action");
  const handleAdd = () => console.log("Add action");
  const [notificationCount, setNotificationCount] = useState(6);

  return (
    <header
      className={`p-5 rtl flex justify-between items-center border-b bg-background sticky top-0 ${className}`}
      dir="rtl"
    >
      <h2 className="text-xl font-bold">الطلبات</h2>

      <div className="flex gap-4">
        {[
          {
            id: "search",
            icon: <Search className="w-6 h-6" />,
            action: handleSearch,
          },
          {
            id: "file",
            icon: <File className="w-6 h-6" />,
            action: handleFile,
          },
          {
            id: "clock",
            icon: <Clock3 className="w-6 h-6" />,
            action: handleClock,
          },
          {
            id: "add",
            icon: <CirclePlus className="w-6 h-6" />,
            action: handleAdd,
          },
          {
            id: "notifications",
            icon: (
              <NotificationIcon count={notificationCount} className="w-6 h-6" />
            ),
            action: () => setNotificationCount(0),
          },
        ].map(({ id, icon, action }) => (
          <Button
            key={id}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 rounded-full hover:bg-accent"
            onClick={action}
            aria-label={id}
          >
            {icon}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default HeaderSection;
