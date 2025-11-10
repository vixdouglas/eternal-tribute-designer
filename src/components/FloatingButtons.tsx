import { MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const whatsappNumber = "5527307356XX";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para placas personalizadas.");
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-primary shadow-lg hover:scale-110 transition-transform duration-300"
        asChild
      >
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
      
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 shadow-lg hover:scale-110 transition-transform duration-300"
        asChild
      >
        <a
          href="https://instagram.com/vitoriaplacasoficial"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visite nosso Instagram"
        >
          <Instagram className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;
