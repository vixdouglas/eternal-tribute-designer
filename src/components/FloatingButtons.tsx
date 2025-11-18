import whatsappIcon from "@/assets/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png-1.webp";

const FloatingButtons = () => {
  const whatsappNumber = "552730735669";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para placas personalizadas.");
  
  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 md:bottom-6 md:right-6 z-50">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
        className="!h-14 !w-14 sm:!h-16 sm:!w-16 md:!h-18 md:!w-18 rounded-full bg-transparent hover:bg-transparent border-0 shadow-lg sm:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 p-0 touch-manipulation flex items-center justify-center inline-flex"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-full h-full object-cover rounded-full"
        />
      </a>
    </div>
  );
};

export default FloatingButtons;
