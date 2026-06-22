import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/auth-store";
import { toast } from "sonner";

export function ChatBot() {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hi there! I'm PitchKit AI. How can I help you find the perfect jersey today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: "ai", content: "That's a great question! Right now, our most popular kits are the new 2026 Argentina and Brazil editions. Would you like me to take you to them?" }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 flex flex-col w-[320px] h-[400px] bg-background border border-border shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-primary font-bold text-xs">AI</span>
                <span className="font-semibold text-sm">PitchKit Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/20 p-1 rounded">
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-secondary/20">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[85%] p-3 rounded-lg text-sm ${m.role === "ai" ? "bg-white border border-border self-start rounded-tl-none" : "bg-foreground text-background self-end rounded-tr-none"}`}>
                  {m.content}
                </div>
              ))}
            </div>

            <div className="p-3 bg-background border-t border-border flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 text-sm rounded-md border border-input outline-none focus:border-primary"
              />
              <button 
                onClick={handleSend}
                className="bg-primary text-primary-foreground p-2 rounded-md hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (!isLoggedIn) {
            toast.error("Please Sign up first to talk with the AI");
            return;
          }
          setIsOpen(!isOpen);
        }}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center float-right"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
