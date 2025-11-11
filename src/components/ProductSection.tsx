
interface ProductSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  backgroundVideo?: string;
  reverse?: boolean;
  imageClassName?: string;
  imageContainerClassName?: string;
  backgroundVideoScale?: string;
  backgroundVideoPosition?: string;
  backgroundVideoOffset?: string;
  textCenter?: boolean;
  textClassName?: string;
  imageRightAbsolute?: boolean;
}

const ProductSection = ({ id, title, subtitle, description, imageSrc, imageAlt, videoSrc, backgroundVideo, reverse = false, imageClassName, imageContainerClassName, backgroundVideoScale, backgroundVideoPosition, backgroundVideoOffset, textCenter = false, textClassName, imageRightAbsolute = false }: ProductSectionProps) => {
  return (
    <section id={id} className={`py-10 sm:py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden bg-[hsl(0,0%,18%)]`}>
      {backgroundVideo && (
        <>
          <div className="absolute inset-0 z-0 overflow-hidden">
            {backgroundVideoPosition === 'center-top' ? (
              <div className="absolute top-0 left-0 right-0 h-1/2 flex items-start justify-center overflow-hidden">
                <video 
                  src={backgroundVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center object-top opacity-40 sm:opacity-45 md:opacity-50"
                />
              </div>
            ) : (
              <video 
                src={backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover ${backgroundVideoScale || 'scale-90 sm:scale-85 md:scale-75'} opacity-40 sm:opacity-45 md:opacity-50`}
                style={
                  backgroundVideoOffset 
                    ? { 
                        objectPosition: backgroundVideoPosition === 'center' 
                          ? `center ${backgroundVideoOffset}` 
                          : `left ${backgroundVideoOffset}` 
                      } 
                    : { objectPosition: backgroundVideoPosition === 'center' ? 'center center' : 'left center' }
                }
              />
            )}
          </div>
          {/* Gradiente alinhado com o container */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="container mx-auto max-w-5xl h-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/75 sm:from-background/80 sm:via-background/50 sm:to-background/70"></div>
            </div>
          </div>
        </>
      )}

      <div className={`container mx-auto max-w-5xl relative z-10`}>
        {imageRightAbsolute ? (
          // Layout sem grid quando imagem está absoluta
          <div className={`${textCenter ? 'text-center' : ''} ${textClassName || ''} relative`}>
            {/* Imagem posicionada absolutamente à direita dentro do container */}
            {imageSrc && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className={imageClassName || "w-auto h-auto object-contain"}
                />
              </div>
            )}
            <div className={`pr-0 md:pr-[140px] lg:pr-[160px]`}>
              <div className={`space-y-2 sm:space-y-3 md:space-y-4 ${backgroundVideo ? 'bg-background/85 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg' : ''} ${textCenter ? 'max-w-3xl mx-auto' : ''}`}>
                <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient leading-tight text-center`}>{title}</h2>
                {subtitle && (
                  <p className={`text-sm sm:text-base md:text-lg font-medium text-muted-foreground/90 leading-relaxed text-center`}>{subtitle}</p>
                )}
                <p className={`text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto`}>{description}</p>
              </div>
              
              {/* Imagem para mobile quando está absoluta */}
              <div className="flex justify-center items-center mt-4 md:hidden">
                {videoSrc ? (
                  <video 
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={imageClassName || "w-auto h-auto object-contain"}
                  />
                ) : imageSrc ? (
                  <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    className={imageClassName || "w-auto h-auto object-contain"}
                  />
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          // Layout com grid normal
          <div className={`grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
            <div className={`space-y-2 sm:space-y-3 md:space-y-4 order-2 md:order-1 ${reverse ? 'md:col-start-2 md:order-2' : ''} ${backgroundVideo ? 'bg-background/85 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-lg' : ''} ${textCenter ? 'text-center mx-auto' : ''} ${textClassName || ''}`}>
              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient leading-tight ${textCenter ? 'text-center' : ''}`}>{title}</h2>
              {subtitle && (
                <p className={`text-sm sm:text-base md:text-lg font-medium text-muted-foreground/90 leading-relaxed ${textCenter ? 'text-center' : ''}`}>{subtitle}</p>
              )}
              <p className={`text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed ${textCenter ? 'text-center max-w-2xl mx-auto' : ''}`}>{description}</p>
            </div>
            
            <div className={`order-1 md:order-2 ${reverse ? 'md:col-start-1 md:row-start-1 md:order-1' : ''} ${imageContainerClassName || 'flex justify-center items-center'}`}>
              {videoSrc ? (
                <video 
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={imageClassName || "w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain"}
                />
              ) : imageSrc ? (
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className={imageClassName || "w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain block mx-auto"}
                />
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
