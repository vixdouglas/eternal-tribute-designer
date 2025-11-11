
interface ProductSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  backgroundVideo?: string;
  reverse?: boolean;
}

const ProductSection = ({ title, description, imageSrc, imageAlt, videoSrc, backgroundVideo, reverse = false }: ProductSectionProps) => {
  return (
    <section className="py-8 sm:py-10 md:py-14 px-4 sm:px-6 relative overflow-hidden">
      {backgroundVideo && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-left scale-90 sm:scale-85 md:scale-75 opacity-40 sm:opacity-45 md:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/75 sm:from-background/80 sm:via-background/50 sm:to-background/70"></div>
        </div>
      )}
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className={`grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
          <div className={`space-y-2 sm:space-y-3 md:space-y-4 order-2 md:order-1 ${reverse ? 'md:col-start-2 md:order-2' : ''} ${backgroundVideo ? 'bg-background/85 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-lg' : ''}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient leading-tight">{title}</h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
          </div>
          
          <div className={`order-1 md:order-2 ${reverse ? 'md:col-start-1 md:row-start-1 md:order-1' : ''}`}>
            {videoSrc ? (
              <video 
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain"
              />
            ) : (
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain block mx-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
