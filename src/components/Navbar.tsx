import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappNumber = "5527307356XX";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para placas personalizadas.");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <img src={logo} alt="Vitória Placas" className="h-8 md:h-10" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          
          {/* Desktop Button */}
          <Button 
            size="sm"
            className="gap-2 hidden md:flex"
            asChild
          >
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col py-4 space-y-4">
              <a 
                href="#produtos" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                onClick={closeMobileMenu}
              >
                Produtos
              </a>
              <a 
                href="#sobre" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                onClick={closeMobileMenu}
              >
                Sobre
              </a>
              <a 
                href="#depoimentos" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                onClick={closeMobileMenu}
              >
                Depoimentos
              </a>
              <a 
                href="#contato" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                onClick={closeMobileMenu}
              >
                Contato
              </a>
              <div className="px-4 pt-2">
                <Button 
                  size="sm"
                  className="w-full gap-2"
                  asChild
                >
                  <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
