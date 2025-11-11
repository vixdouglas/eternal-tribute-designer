import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import ProductSection from "@/components/ProductSection";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Award, Building2, Heart, MapPin, Instagram, Facebook } from "lucide-react";
import { useMemo } from "react";
import Autoplay from "embla-carousel-autoplay";

import heroImage from "@/assets/hero-plaque.jpg";
import awardPlaque from "@/assets/award-plaque.jpg";
import inaugurationPlaque from "@/assets/inauguration-plaque.jpg";
import gravePlaque from "@/assets/grave-plaque.jpg";
import logo from "@/assets/logo.png";
import acrylicVideo from "@/assets/fotosprincipal/WhatsApp Video 2025-11-10 at 11.13.56.mp4";
import awardImage from "@/assets/fotosprincipal/WhatsApp Image 2025-11-10 at 10.40.05.jpeg";
import inaugurationImage from "@/assets/fotosprincipal/WhatsApp Image 2025-11-10 at 10.38.24.jpeg";
import graveImage from "@/assets/fotosprincipal/WhatsApp Image 2025-11-10 at 10.40.06.jpeg";

// Imagens do carrossel
import carouselImg1 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.36.20.jpeg";
import carouselImg2 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.36.21 (1).jpeg";
import carouselImg3 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.36.21 (2).jpeg";
import carouselImg4 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.36.21 (3).jpeg";
import carouselImg5 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.36.21.jpeg";
import carouselImg6 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.37.05 (1).jpeg";
import carouselImg7 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.37.05.jpeg";
import carouselImg8 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.38.22 (1).jpeg";
import carouselImg9 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.38.22 (2).jpeg";
import carouselImg10 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.38.22.jpeg";
import carouselImg11 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.38.23 (1).jpeg";
import carouselImg12 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.38.23.jpeg";
import carouselImg13 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.40.06.jpeg";
import carouselImg14 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.42.55 (1).jpeg";
import carouselImg15 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.42.55.jpeg";
import carouselImg16 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.42.56 (1).jpeg";
import carouselImg17 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.42.56.jpeg";
import carouselImg18 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.44.07 (1).jpeg";
import carouselImg19 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.44.07 (2).jpeg";
import carouselImg20 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.44.07.jpeg";
import carouselImg21 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 11.02.59.jpeg";
import carouselImg22 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 11.03.01.jpeg";

const Index = () => {
  const whatsappNumber = "552730735669";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para placas personalizadas.");

  // Array com todas as imagens do carrossel
  const carouselImages = [
    carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5,
    carouselImg6, carouselImg7, carouselImg8, carouselImg9, carouselImg10,
    carouselImg11, carouselImg12, carouselImg13, carouselImg14, carouselImg15,
    carouselImg16, carouselImg17, carouselImg18, carouselImg19, carouselImg20,
    carouselImg21, carouselImg22
  ];

  // Plugin de autoplay para o carrossel (velocidade aumentada - 2 segundos)
  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: false }),
    []
  );

  return (
    <main className="min-h-screen">
      <Navbar />
      <FloatingButtons />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Placa de homenagem elegante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4 md:space-y-6 fade-in py-16 md:py-0">
          <img src={logo} alt="Vitória Placas" className="w-28 sm:w-32 md:w-48 lg:w-72 mx-auto mb-4 md:mb-6" />
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2 sm:px-4">
            Transformamos Homenagens<br />
            <span className="text-gradient">em Eternas Memórias</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-6">
            Placas personalizadas para homenagens, premiações, inaugurações e túmulos. 
            Cada detalhe pensado com respeito e elegância.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 md:pt-4 px-4">
            <Button 
              size="lg" 
              className="text-sm sm:text-base md:text-lg gap-2 px-6 md:px-8 h-12 sm:h-auto w-full sm:w-auto min-w-[200px]"
              asChild
            >
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="text-sm sm:text-base md:text-lg px-6 md:px-8 h-12 sm:h-auto w-full sm:w-auto min-w-[200px]"
              asChild
            >
              <a href="#produtos">
                Conhecer Produtos
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Sections */}
      <div id="produtos" className="bg-gradient-to-b from-background to-card">
        <ProductSection
          title="Homenagens em Estojo de Acrílico"
          description="Nossas placas em acrílico são verdadeiras obras de arte. Com gravação em metal nobre e apresentação em estojo elegante, cada homenagem é única e inesquecível. Personalize com nomes, logotipos, datas e frases que eternizam momentos especiais."
          videoSrc={acrylicVideo}
        />

        <ProductSection
          title="Placas de Premiação"
          description="Reconheça conquistas e celebre vitórias com placas de premiação de alto padrão. Em metal, acrílico ou vidro, nossos troféus corporativos e esportivos transmitem prestígio, durabilidade e elegância para seus eventos mais importantes."
          imageSrc={awardImage}
          imageAlt="Placa de premiação corporativa"
          reverse
        />

        <ProductSection
          title="Placas de Inauguração"
          description="Eternize momentos marcantes da história da sua empresa ou instituição. Nossas placas de inauguração em metal e vidro com gravação personalizada transformam marcos importantes em memórias permanentes que inspiram gerações."
          imageSrc={inaugurationImage}
          imageAlt="Placa de inauguração em aço inox"
        />

        <ProductSection
          title="Placas para Túmulos"
          description="Com respeito e sensibilidade, criamos placas funerárias que honram memórias e celebram vidas. Acabamento profissional em granito ou metal, gravações elegantes e duráveis que resistem ao tempo e preservam lembranças com dignidade."
          imageSrc={graveImage}
          imageAlt="Placa memorial para túmulo"
          reverse
        />
      </div>

      {/* Gallery Section */}
      <section className="py-10 sm:py-12 md:py-20 px-4 sm:px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold px-2">Galeria de Trabalhos</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Conheça alguns dos nossos projetos e veja a qualidade que entregamos em cada placa
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            plugins={[autoplayPlugin]}
            className="w-full relative"
          >
            <CarouselPrevious className="left-1 sm:left-2 md:left-4 z-10 bg-background/90 hover:bg-background h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="right-1 sm:right-2 md:right-4 z-10 bg-background/90 hover:bg-background h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselImages.map((img, idx) => (
                <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="overflow-hidden hover-lift cursor-pointer border-0 shadow-lg">
                    <CardContent className="p-0">
                      <img 
                        src={img} 
                        alt={`Trabalho ${idx + 1}`}
                        className="w-full h-40 sm:h-48 md:h-64 lg:h-72 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="https://instagram.com/vitoriaplacasoficial" target="_blank" rel="noopener noreferrer">
                Ver Mais no Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-10 sm:py-12 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold px-4">Sobre a Vitória Placas</h2>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-4">
            Há anos transformando homenagens em memórias eternas. A <strong>Vitória Placas</strong> é 
            especialista em comunicação visual e fabricação de placas personalizadas de alta qualidade.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-4">
            Com fabricação própria e comprometimento com a excelência, atendemos todo o Espírito Santo 
            entregando produtos que combinam elegância, durabilidade e respeito. Cada placa é única, 
            pensada com carinho para eternizar seus momentos mais importantes.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
            <Card className="hover-lift">
              <CardContent className="p-4 md:p-6 text-center space-y-2 md:space-y-3">
                <Heart className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto" />
                <h3 className="text-lg md:text-xl font-semibold">Feito com Cuidado</h3>
                <p className="text-sm md:text-base text-muted-foreground">Cada detalhe pensado para eternizar memórias</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-4 md:p-6 text-center space-y-2 md:space-y-3">
                <Award className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto" />
                <h3 className="text-lg md:text-xl font-semibold">Alta Qualidade</h3>
                <p className="text-sm md:text-base text-muted-foreground">Materiais nobres e acabamento premium</p>
              </CardContent>
            </Card>

            <Card className="hover-lift sm:col-span-2 md:col-span-1">
              <CardContent className="p-4 md:p-6 text-center space-y-2 md:space-y-3">
                <Building2 className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto" />
                <h3 className="text-lg md:text-xl font-semibold">Fabricação Própria</h3>
                <p className="text-sm md:text-base text-muted-foreground">Produção local com entrega em todo o ES</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-10 sm:py-12 md:py-20 px-4 sm:px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold px-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
              A satisfação de quem confia em nosso trabalho
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <TestimonialCard
              name="Maria Silva"
              role="Diretora de RH"
              content="A placa de homenagem ficou impecável! O acabamento em acrílico superou nossas expectativas. Toda a equipe se emocionou com o resultado. Recomendo muito!"
              rating={5}
            />
            
            <TestimonialCard
              name="João Santos"
              role="Empresário"
              content="Excelente trabalho na placa de inauguração da nossa nova sede. Material de primeira qualidade e gravação perfeita. Atendimento atencioso do início ao fim."
              rating={5}
            />
            
            <TestimonialCard
              name="Ana Paula Costa"
              role="Coordenadora de Eventos"
              content="Já fizemos várias placas de premiação para nossos eventos. A Vitória Placas sempre entrega no prazo e com qualidade excepcional. Parceria de confiança!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-10 sm:py-12 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold px-4">Solicite Seu Orçamento</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
              Preencha o formulário e entraremos em contato via WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <ContactForm />

            <div className="space-y-6 md:space-y-8">
              <Card>
                <CardContent className="p-4 md:p-6 space-y-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-2">Nosso Endereço</h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Rua Marcelino Rangel, 67<br />
                        Morada de Santa Fé<br />
                        Cariacica/ES
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="aspect-video rounded-lg overflow-hidden border border-border w-full h-[250px] md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.9!2d-40.4!3d-20.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzAwLjAiUyA0MMKwMjQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Vitória Placas"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={logo} alt="Vitória Placas" className="h-16 md:h-20 mb-3 md:mb-4" />
              <p className="text-sm md:text-base text-muted-foreground">
                Transformando homenagens em eternas memórias desde sempre.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Contato</h4>
              <div className="space-y-2 text-sm md:text-base text-muted-foreground">
                <p>WhatsApp: (27) 3073-5669</p>
                <p className="break-words">Email: compras@vitoriaplacas.com.br</p>
                <p>CNPJ: 56.415.178/0001-58</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Redes Sociais</h4>
              <div className="flex gap-3 md:gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://instagram.com/vitoriaplacasoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://facebook.com/vitoriaplacasoficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-8 border-t border-border text-center text-sm md:text-base text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Vitória Placas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
