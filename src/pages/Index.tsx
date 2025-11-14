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

import awardPlaque from "@/assets/award-plaque.jpg";
import inaugurationPlaque from "@/assets/inauguration-plaque.jpg";
import gravePlaque from "@/assets/grave-plaque.jpg";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/WhatsApp Image 2025-11-10 at 11.02.31 (1).jpeg";
import acrylicVideo from "@/assets/fotosprincipal/WhatsApp Video 2025-11-10 at 11.13.56.mp4";
import homenagemImage from "@/assets/fotosprincipal/WhatsApp Image 2025-11-11 at 11.11.01.jpeg";
import homenagemVideo from "@/assets/WhatsApp Video 2025-11-10 at 11.13.55.mp4";
import awardImage from "@/assets/fotosprincipal/001122.png";
import awardVideo from "@/assets/WhatsApp Video 2025-11-10 at 11.01.30.mp4";
import inaugurationImage from "@/assets/fotosprincipal/WhatsApp Image 2025-11-11 at 11.18.44.jpeg";
import inaugurationVideo from "@/assets/fotos carossel/WhatsApp Video 2025-11-10 at 11.14.03.mp4";
import graveImage from "@/assets/fotosprincipal/WhatsApp Image 2025-11-10 at 10.40.06.jpeg";
import graveVideo from "@/assets/WhatsApp Video 2025-11-10 at 11.01.28.mp4";
import sobreVideo from "@/assets/WhatsApp Video 2025-11-10 at 10.56.37.mp4";
import letreiroImage from "@/assets/WhatsApp Image 2025-11-10 at 10.37.05.jpeg";
import letreiroVideo from "@/assets/WhatsApp Video 2025-11-10 at 11.13.55.mp4";
import homenagemBackgroundVideo from "@/assets/WhatsApp Video 2025-11-10 at 11.13.57.mp4";

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
import carouselImg23 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.43.00 (1).jpeg";
import carouselImg24 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 10.43.00.jpeg";
import carouselImg25 from "@/assets/fotos carossel/WhatsApp Image 2025-11-10 at 11.02.31.jpeg";

const Index = () => {
  const whatsappNumber = "552730735669";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para placas personalizadas.");

  // Array com todas as imagens do carrossel
  const carouselImages = [
    carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5,
    carouselImg6, carouselImg7, carouselImg8, carouselImg9, carouselImg10,
    carouselImg11, carouselImg12, carouselImg13, carouselImg14, carouselImg15,
    carouselImg16, carouselImg17, carouselImg18, carouselImg19, carouselImg20,
    carouselImg21, carouselImg22, carouselImg23, carouselImg24, carouselImg25
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
      <section className="relative min-h-[75vh] sm:min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-0">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Placa de homenagem elegante"
            className="w-full h-full object-cover object-[center_20%] sm:object-[center_25%] md:object-[center_30%] lg:object-[center_35%] scale-100 sm:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/92 via-background/75 to-background sm:from-background/90 sm:via-background/70 sm:to-background"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 fade-in py-10 sm:py-12 md:py-16 lg:py-0">
          <img src={logo} alt="Vitória Placas" className="w-24 sm:w-28 md:w-40 lg:w-48 xl:w-72 mx-auto mb-3 sm:mb-4 md:mb-6" />
          
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-2 sm:px-4">
            Transformamos Homenagens<br />
            <span className="text-gradient">em Eternas Memórias</span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4 md:px-6 leading-relaxed">
            Placas personalizadas para homenagens, premiações, inaugurações e túmulos. 
            Cada detalhe pensado com respeito e elegância.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center pt-3 sm:pt-4 md:pt-6 px-4">
            <Button 
              size="lg" 
              className="text-xs sm:text-sm md:text-base lg:text-lg gap-2 px-5 sm:px-6 md:px-8 h-11 sm:h-12 md:h-auto w-full sm:w-auto min-w-[180px] sm:min-w-[200px] touch-manipulation"
              asChild
            >
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="text-xs sm:text-sm md:text-base lg:text-lg px-5 sm:px-6 md:px-8 h-11 sm:h-12 md:h-auto w-full sm:w-auto min-w-[180px] sm:min-w-[200px] touch-manipulation"
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
      <ProductSection
        id="produtos"
        title="Placas de Homenagem"
        description="Nossas placas em acrílico são verdadeiras obras de arte. Com gravação em metal nobre e apresentação em estojo elegante, cada homenagem é única e inesquecível. Personalize com nomes, logotipos, datas e frases que eternizam momentos especiais."
        imageSrc={homenagemImage}
        imageAlt="Placa de homenagem em estojo de acrílico"
        backgroundVideo={homenagemBackgroundVideo}
        backgroundVideoOffset="25%"
        backgroundVideoPosition="center"
        imageLeft={true}
        textCenter={true}
        imageClassName="w-auto h-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] object-contain border-2 sm:border-[3px] md:border-4 border-white shadow-2xl rounded-sm bg-background/10"
      />

      <ProductSection
        title="Placas de Premiação"
        description="Reconheça conquistas e celebre vitórias com placas de premiação de alto padrão. Em metal, acrílico ou vidro, nossos troféus corporativos e esportivos transmitem prestígio, durabilidade e elegância para seus eventos mais importantes."
        imageSrc={awardImage}
        imageAlt="Placa de premiação corporativa"
        backgroundVideo={awardVideo}
        backgroundVideoOffset="40%"
        backgroundVideoPosition="center"
        imageRight={true}
        textCenter={true}
        imageClassName="w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-contain border-2 sm:border-[3px] md:border-4 border-white shadow-2xl rounded-sm bg-background/10"
      />

      <ProductSection
        title="Placas de Inauguração"
        description="Eternize momentos marcantes da história da sua empresa ou instituição. Nossas placas de inauguração em metal e vidro com gravação personalizada transformam marcos importantes em memórias permanentes que inspiram gerações."
        imageSrc={inaugurationImage}
        imageAlt="Placa de inauguração em aço inox"
        backgroundVideo={inaugurationVideo}
        backgroundVideoOffset="35%"
        backgroundVideoPosition="left"
        imageLeft={true}
        textCenter={true}
        imageClassName="w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-contain border-2 sm:border-[3px] md:border-4 border-white shadow-2xl rounded-sm bg-background/10"
      />

      <ProductSection
        title="Placas para Túmulos"
        description="Com respeito e sensibilidade, criamos placas funerárias que honram memórias e celebram vidas. Acabamento profissional em granito ou metal, gravações elegantes e duráveis que resistem ao tempo e preservam lembranças com dignidade."
        imageSrc={graveImage}
        imageAlt="Placa memorial para túmulo"
        backgroundVideo={graveVideo}
        imageRight={true}
        textCenter={true}
        imageClassName="w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-contain border-2 sm:border-[3px] md:border-4 border-white shadow-2xl rounded-sm bg-background/10"
      />

      <ProductSection
        title="Placas de Letreiro"
        subtitle="Sinalização visual profissional para identidade e comunicação empresarial. Valorize cada detalhe da sua marca."
        description="Nossas placas de letreiro personalizadas — ideais para portas, mesas, departamentos e áreas internas — reforçam a identidade visual da sua empresa com design elegante, materiais duráveis e acabamento impecável. Transforme ambientes corporativos em espaços organizados, sofisticados e alinhados à essência da sua marca."
        imageSrc={letreiroImage}
        imageAlt="Placa de letreiro em aço inox"
        backgroundVideo={letreiroVideo}
        imageLeft={true}
        textCenter={true}
        imageClassName="w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-contain border-2 sm:border-[3px] md:border-4 border-white shadow-2xl rounded-sm bg-background/10"
      />

      {/* Gallery Section */}
      <section className="py-5 sm:py-6 md:py-8 lg:py-12 xl:py-16 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-[hsl(0,0%,25%)] to-[hsl(0,0%,20%)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 mb-3 sm:mb-4 md:mb-6 lg:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-2 sm:px-4">Galeria de Trabalhos</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-4">
              Conheça alguns dos nossos projetos e veja a qualidade que entregamos em cada placa
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
              slidesToScroll: 1,
            }}
            plugins={[autoplayPlugin]}
            className="w-full relative"
          >
            <CarouselPrevious className="left-0.5 sm:left-1 md:left-2 lg:left-4 z-20 bg-background/98 hover:bg-background/100 active:bg-background border border-primary/30 h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 touch-manipulation active:scale-90 shadow-md hover:shadow-lg transition-all" />
            <CarouselNext className="right-0.5 sm:right-1 md:right-2 lg:right-4 z-20 bg-background/98 hover:bg-background/100 active:bg-background border border-primary/30 h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 touch-manipulation active:scale-90 shadow-md hover:shadow-lg transition-all" />
            <CarouselContent className="-ml-1.5 sm:-ml-2 md:-ml-3 lg:-ml-4 touch-pan-x">
              {carouselImages.map((img, idx) => (
                <CarouselItem key={idx} className="pl-1.5 sm:pl-2 md:pl-3 lg:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex items-center justify-center py-2 sm:py-3">
                  <div className="w-full flex items-center justify-center h-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px]">
                    <img 
                      src={img} 
                      alt={`Trabalho ${idx + 1}`}
                      className="max-w-[95%] max-h-[260px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px] w-auto h-auto object-contain cursor-pointer active:scale-95 hover:scale-105 transition-transform duration-200 block touch-manipulation select-none"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-6 sm:mt-8">
            <Button variant="outline" size="lg" className="text-xs sm:text-sm md:text-base h-10 sm:h-11 md:h-auto px-4 sm:px-6 touch-manipulation" asChild>
              <a href="https://instagram.com/vitoriaplacasoficial" target="_blank" rel="noopener noreferrer">
                Ver Mais no Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden bg-[hsl(0,0%,18%)]">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Conteúdo à esquerda */}
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-6 xl:space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-left">Sobre a Vitória Placas</h2>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                Há anos transformando homenagens em memórias eternas. A <strong>Vitória Placas</strong> é 
                especialista em comunicação visual e fabricação de placas personalizadas de alta qualidade.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                Com fabricação própria e comprometimento com a excelência, atendemos todo o Espírito Santo 
                entregando produtos que combinam elegância, durabilidade e respeito. Cada placa é única, 
                pensada com carinho para eternizar seus momentos mais importantes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8">
                <Card className="hover-lift bg-background/95 backdrop-blur-md sm:bg-background/90 border border-border/50">
                  <CardContent className="p-4 sm:p-5 md:p-6 text-center space-y-2 sm:space-y-3">
                    <Heart className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mx-auto" />
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">Feito com Cuidado</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Cada detalhe pensado para eternizar memórias</p>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-background/95 backdrop-blur-md sm:bg-background/90 border border-border/50">
                  <CardContent className="p-4 sm:p-5 md:p-6 text-center space-y-2 sm:space-y-3">
                    <Award className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mx-auto" />
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">Alta Qualidade</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Materiais nobres e acabamento premium</p>
                  </CardContent>
                </Card>

                <Card className="hover-lift bg-background/95 backdrop-blur-md sm:bg-background/90 border border-border/50">
                  <CardContent className="p-4 sm:p-5 md:p-6 text-center space-y-2 sm:space-y-3">
                    <Building2 className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mx-auto" />
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">Fabricação Própria</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Produção local com entrega em todo o ES</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Vídeo à direita */}
            <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden">
              <video 
                src={sobreVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-70 sm:opacity-75 md:opacity-80 lg:opacity-85 xl:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-b from-[hsl(0,0%,18%)] to-[hsl(0,0%,25%)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 mb-3 sm:mb-4 md:mb-6 lg:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-2 sm:px-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground px-2 sm:px-4">
              A satisfação de quem confia em nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
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
      <section id="contato" className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-b from-[hsl(0,0%,25%)] to-[hsl(0,0%,20%)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 mb-3 sm:mb-4 md:mb-6 lg:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-2 sm:px-4">Solicite Seu Orçamento</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground px-2 sm:px-4">
              Preencha o formulário e entraremos em contato via WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            <ContactForm />

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <Card className="bg-background/95 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Nosso Endereço</h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                        Rua Marcelino Rangel, 67<br />
                        Morada de Santa Fé<br />
                        Cariacica/ES
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="aspect-video rounded-lg overflow-hidden border border-border w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-auto">
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
      <footer className="bg-gradient-to-b from-[hsl(0,0%,12%)] to-[hsl(0,0%,8%)] border-t border-border py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
            <div className="sm:col-span-2 md:col-span-1">
              <img src={logo} alt="Vitória Placas" className="h-12 sm:h-14 md:h-16 lg:h-20 mb-2 sm:mb-3 md:mb-4" />
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Transformando homenagens em eternas memórias desde sempre.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">Contato</h4>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                <p className="break-words">WhatsApp: (27) 3073-5669</p>
                <p className="break-words">Email: compras@vitoriaplacas.com.br</p>
                <p className="break-words">CNPJ: 56.415.178/0001-58</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">Redes Sociais</h4>
              <div className="flex gap-2 sm:gap-3 md:gap-4">
                <Button variant="outline" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" asChild>
                  <a href="https://instagram.com/vitoriaplacasoficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" asChild>
                  <a href="https://facebook.com/vitoriaplacasoficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-4 sm:pt-6 md:pt-8 border-t border-border text-center text-xs sm:text-sm md:text-base text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Vitória Placas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
