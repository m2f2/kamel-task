import { Badge } from "@/components/ui/badge";
import { fullscreenAtom } from "@/store";
import { useAtom } from "jotai";
import { Expand, MoreVertical, Shrink } from "lucide-react";



interface ChatStatusBarProps {
  onClick?: () => void;
}
export const ChatStatusBar = ({ onClick }: ChatStatusBarProps) => {
  const [isFullscreen] = useAtom(fullscreenAtom);
  

  return (
    <div  className="flex items-center justify-between mb-4 px-2">
      <div className="flex items-center gap-3">
        {/* Status Badge */}
        <Badge
          variant="secondary"
          className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors p-3 rounded-xl"
        >
          <span className="w-2 h-2 bg-blue-600 rounded-full mx-2" />
          مفتوح
        </Badge>

        {/* Fullscreen Toggle */}
        <button
          onClick={onClick}
          className="p-1 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label={isFullscreen ? "خروج من الشاشة الكاملة" : "شاشة كاملة"}
        >
          {isFullscreen ? (
            <Shrink className="h-8 w-8 text-gray-500" />
          ) : (
            <Expand className="h-8 w-8 text-gray-500" />
          )}
        </button>

        {/* Options Menu */}
        <button
          className="p-1 rounded-xl hover:bg-gray-200 transition-colors"
          aria-label="المزيد من الخيارات"
        >
          <MoreVertical className="h-8 w-8 text-gray-500" />
        </button>
      </div>
    </div>
  );
};