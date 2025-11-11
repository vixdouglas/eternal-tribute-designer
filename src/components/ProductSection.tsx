import { Card, CardContent } from "@/components/ui/card";

interface ProductSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  reverse?: boolean;
}

const ProductSection = ({ title, description, imageSrc, imageAlt, videoSrc, reverse = false }: ProductSectionProps) => {
  return (
    <section className="py-10 sm:py-12 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
          <div className={`space-y-3 sm:space-y-4 md:space-y-6 order-2 md:order-1 ${reverse ? 'md:col-start-2 md:order-2' : ''}`}>
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gradient leading-tight">{title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
          </div>
          
          <Card className={`overflow-hidden hover-lift order-1 md:order-2 ${reverse ? 'md:col-start-1 md:row-start-1 md:order-1' : ''}`}>
            <CardContent className="p-0">
              {videoSrc ? (
                <video 
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[220px] sm:h-[280px] md:h-[400px] object-cover"
                />
              ) : (
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="w-full h-[220px] sm:h-[280px] md:h-[400px] object-cover"
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
