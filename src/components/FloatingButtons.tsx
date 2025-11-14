import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png-1.webp";

const FloatingButtons = () => {
  const whatsappNumber = "552730735669";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para placas personalizadas.");
  
  return (
    <div className="fixed bottom-6 right-4 sm:bottom-6 sm:right-6 md:bottom-6 md:right-6 z-50">
      <Button
        size="icon"
        className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-transparent hover:bg-transparent border-0 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 p-0 touch-manipulation"
        asChild
      >
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato via WhatsApp"
          className="flex items-center justify-center w-full h-full"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="w-full h-full object-cover rounded-full"
          />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;
