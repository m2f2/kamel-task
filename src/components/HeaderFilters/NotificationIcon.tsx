import { Bell } from 'lucide-react';

interface NotificationIconProps {
  count: number;
  className?: string;
}

const NotificationIcon = ({ count, className }: NotificationIconProps) => {
  return (
    <div className="relative">
      <Bell className={className} />
      {count > 0 && (
        <span className="absolute -top-3 left-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </div>
  );
};

export default NotificationIcon;