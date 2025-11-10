import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const whatsappNumber = "5527307356XX";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para placas personalizadas.");
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        className="h-16 w-16 rounded-full bg-transparent border-2 border-primary shadow-lg hover:scale-110 hover:bg-primary/10 transition-all duration-300"
        asChild
      >
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="h-8 w-8 text-primary" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;
