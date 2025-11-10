import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatingButtons from "@/components/FloatingButtons";
import ProductSection from "@/components/ProductSection";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Award, Building2, Heart, MapPin } from "lucide-react";

import heroImage from "@/assets/hero-plaque.jpg";
import acrylicMemorial from "@/assets/acrylic-memorial.jpg";
import awardPlaque from "@/assets/award-plaque.jpg";
import inaugurationPlaque from "@/assets/inauguration-plaque.jpg";
import gravePlaque from "@/assets/grave-plaque.jpg";

const Index = () => {
  const whatsappNumber = "5527307356XX";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para placas personalizadas.");

  return (
    <main className="min-h-screen">
      <FloatingButtons />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Placa de homenagem elegante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transformamos Homenagens<br />
            <span className="text-gradient">em Eternas Memórias</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Placas personalizadas para homenagens, premiações, inaugurações e túmulos. 
            Cada detalhe pensado com respeito e elegância.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg gap-2 px-8"
              asChild
            >
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8"
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
          imageSrc={acrylicMemorial}
          imageAlt="Placa de homenagem em estojo de acrílico"
        />

        <ProductSection
          title="Placas de Premiação"
          description="Reconheça conquistas e celebre vitórias com placas de premiação de alto padrão. Em metal, acrílico ou vidro, nossos troféus corporativos e esportivos transmitem prestígio, durabilidade e elegância para seus eventos mais importantes."
          imageSrc={awardPlaque}
          imageAlt="Placa de premiação corporativa"
          reverse
        />

        <ProductSection
          title="Placas de Inauguração"
          description="Eternize momentos marcantes da história da sua empresa ou instituição. Nossas placas de inauguração em metal e vidro com gravação personalizada transformam marcos importantes em memórias permanentes que inspiram gerações."
          imageSrc={inaugurationPlaque}
          imageAlt="Placa de inauguração em aço inox"
        />

        <ProductSection
          title="Placas para Túmulos"
          description="Com respeito e sensibilidade, criamos placas funerárias que honram memórias e celebram vidas. Acabamento profissional em granito ou metal, gravações elegantes e duráveis que resistem ao tempo e preservam lembranças com dignidade."
          imageSrc={gravePlaque}
          imageAlt="Placa memorial para túmulo"
          reverse
        />
      </div>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Galeria de Trabalhos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos nossos projetos e veja a qualidade que entregamos em cada placa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[acrylicMemorial, awardPlaque, inaugurationPlaque, gravePlaque, heroImage, acrylicMemorial].map((img, idx) => (
              <Card key={idx} className="overflow-hidden hover-lift cursor-pointer">
                <CardContent className="p-0">
                  <img 
                    src={img} 
                    alt={`Trabalho ${idx + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Sobre a Vitória Placas</h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Há anos transformando homenagens em memórias eternas. A <strong>Vitória Placas</strong> é 
            especialista em comunicação visual e fabricação de placas personalizadas de alta qualidade.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Com fabricação própria e comprometimento com a excelência, atendemos todo o Espírito Santo 
            entregando produtos que combinam elegância, durabilidade e respeito. Cada placa é única, 
            pensada com carinho para eternizar seus momentos mais importantes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center space-y-3">
                <Heart className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Feito com Cuidado</h3>
                <p className="text-muted-foreground">Cada detalhe pensado para eternizar memórias</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center space-y-3">
                <Award className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Alta Qualidade</h3>
                <p className="text-muted-foreground">Materiais nobres e acabamento premium</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center space-y-3">
                <Building2 className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Fabricação Própria</h3>
                <p className="text-muted-foreground">Produção local com entrega em todo o ES</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">O Que Dizem Nossos Clientes</h2>
            <p className="text-lg text-muted-foreground">
              A satisfação de quem confia em nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Solicite Seu Orçamento</h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário e entraremos em contato via WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ContactForm />

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Nosso Endereço</h3>
                      <p className="text-muted-foreground">
                        Rua Marcelino Rangel, 67<br />
                        Morada de Santa Fé<br />
                        Cariacica/ES
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="aspect-video rounded-lg overflow-hidden border border-border">
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
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Vitória Placas</h3>
              <p className="text-muted-foreground">
                Transformando homenagens em eternas memórias desde sempre.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>WhatsApp: (27) 3073-56XX</p>
                <p>Email: compras@vitoriaplacas.com.br</p>
                <p>CNPJ: 56.415.178/0001-58</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://instagram.com/vitoriaplacasoficial" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">Instagram</span>
                    📷
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://facebook.com/vitoriaplacasoficial" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">Facebook</span>
                    📘
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Vitória Placas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
