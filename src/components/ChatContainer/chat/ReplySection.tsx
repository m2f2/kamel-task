import { useAtom } from "jotai";
import { messagesAtom, newMessageAtom } from "@/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Paperclip, Smile, Send, X } from "lucide-react";
import { EditorToolbar } from "./EditorToolbar";

export const ReplySection = () => {
  const [messages, setMessages] = useAtom(messagesAtom);
  const [newMessage, setNewMessage] = useAtom(newMessageAtom);

  const handleSendMessage = () => {

    const newMsg = {
      id: crypto.randomUUID(),
      sender: "سالم محمد",
      time: new Date().toLocaleTimeString("ar-EG", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: new Date().toLocaleDateString("ar-EG"),
      message: newMessage,
      isCurrentUser: true,
      avatarSrc: "/avatars/ahmed.jpeg",
      isRead: false,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className=" pt-4 bg-white shadow-sm mx-10">
      <div className="mb-4">
        <p className="text-lg font-bold text-black mb-2">
          رد الي : الشركة المتحدة للطاقة الشمسية
        </p>
      </div>

      <div className="border border-gray-300 rounded-xl">
        <div className="flex items-center justify-between">
          <EditorToolbar />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex-1 flex items-center gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="اكتب رسالتك..."
              className="flex-1 min-w-[300px] text-right placeholder:text-right outline-none border-0"
              aria-label="رسالة جديدة"
            />
          </div>

          <div className="flex items-center gap-2 justify-between p-3">
            <div className="flex  gap-2 ">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 transition-colors rounded-full"
                aria-label="إضافة إيموجي"
              >
                <Smile className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 transition-colors rounded-full"
                aria-label="إرفاق ملف"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex  gap-2 ">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setNewMessage("")}
                className="hover:bg-gray-50 transition-colors gap-2 rounded-xl"
                aria-label="إلغاء الرسالة"
              >
                <X className="h-4 w-4" />
                إلغاء
              </Button>
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-700 rounded-xl  transition-colors text-white gap-2"
                onClick={handleSendMessage}
                aria-label="إرسال الرسالة"
              >
                <Send className="h-4 w-4" />
                إرسال
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
