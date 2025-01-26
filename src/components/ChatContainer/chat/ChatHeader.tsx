import { activeOrdersAtom } from '@/store';
import { useAtom } from 'jotai';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

export const ChatHeader = () => {
  const [activeOrders, setActiveOrders] = useAtom(activeOrdersAtom);

  const handleRemoveOrder = (order: number) => {
    setActiveOrders(activeOrders.filter(o => o !== order));
  };

  return (
    <header className="flex flex-wrap items-center justify-between gap-4  py-1 border-b-2 ">
      <div className="flex items-center gap-3 flex-1">
        <div className="flex flex-wrap gap-2">
          {activeOrders.map(num => (
            <Badge 
              key={num} 
              variant="secondary" 
              className="rounded-xl gap-1.5 active:bg-gray-100 transition-colors px-6 py-2"
            >
              <X 
                className="h-3.5 w-3.5 cursor-pointer hover:text-red-600 transition-colors"
                onClick={() => handleRemoveOrder(num)} 
              />
              <span>رقم الطلب : {num.toString().padStart(2, '0')}</span>
            </Badge>
          ))}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-xl bg-gray-100 transition-colors"
        >
          <Plus className="h-4 w-4" /> 
        </Button>
      </div>
    </header>
  );
};