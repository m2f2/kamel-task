import { messagesAtom } from '@/store';
import { useAtom } from 'jotai';
import { ChatMessage } from '../chat/ChatMessage';

export const ChatMessagesList = () => {
  const [messages] = useAtom(messagesAtom);
  
  return (
    <div className="space-y-4 mb-6 max-h-[60vh] px-6 ">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </div>
  );
};