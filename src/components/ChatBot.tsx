import { MessageCircle } from "lucide-react";

const ChatBot = () => {
  const handleChatClick = () => {
    console.log("Chat avec l'IA ouvert");
  };

  return (
    <button
      onClick={handleChatClick}
      className="chat-floating group"
      aria-label="Discuter avec notre assistant IA"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      
      {/* Notification dot */}
      <div className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-pulse"></div>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Besoin d'aide ? Discutez avec moi !
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
      </div>
    </button>
  );
};

export default ChatBot;