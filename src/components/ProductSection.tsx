
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
  imageTopRight?: boolean;
  imageBottomRight?: boolean;
  imageLeft?: boolean;
  imageRight?: boolean;
}

const ProductSection = ({ id, title, subtitle, description, imageSrc, imageAlt, videoSrc, backgroundVideo, reverse = false, imageClassName, imageContainerClassName, backgroundVideoScale, backgroundVideoPosition, backgroundVideoOffset, textCenter = false, textClassName, imageRightAbsolute = false, imageTopRight = false, imageBottomRight = false, imageLeft = false, imageRight = false }: ProductSectionProps) => {
  return (
    <section id={id} className={`min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px] py-6 sm:py-8 md:py-14 lg:py-16 px-3 sm:px-4 md:px-6 relative overflow-x-hidden bg-[hsl(0,0%,18%)]`}>
      {backgroundVideo && (
        <>
          <div className="absolute inset-0 z-0 overflow-hidden" style={{ left: '50%', transform: 'translateX(-50%)', width: '100vw' }}>
            {backgroundVideoPosition === 'center-top' ? (
              <div className="absolute top-0 left-0 right-0 h-1/2 flex items-start justify-center overflow-hidden w-full">
                <video 
                  src={backgroundVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center object-top opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-65"
                />
              </div>
            ) : (
              <video 
                src={backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-65 ${imageLeft || imageRight ? 'scale-75' : ''}`}
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
        </>
      )}

      <div className={`container mx-auto max-w-5xl relative z-10`}>
        {imageRight ? (
          // Layout com imagem totalmente à direita, texto no início
          <div className={`${textClassName || ''} relative`}>
            {/* Imagem posicionada totalmente à direita */}
            {imageSrc && (
              <div className="absolute right-0 sm:right-0 md:right-0 top-4 sm:top-6 md:top-8 z-20 hidden md:flex items-center justify-center">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className={imageClassName || "w-auto h-auto object-contain"}
                />
              </div>
            )}
            {/* Texto mais para o início da seção com película */}
            <div className={`pt-2 sm:pt-3 md:pt-6 lg:pt-8 pr-0 md:pr-[380px] lg:pr-[450px] xl:pr-[520px]`}>
              <div className={`space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 bg-background/50 backdrop-blur-sm p-2.5 sm:p-3 md:p-5 lg:p-6 rounded-lg ${textCenter ? 'max-w-3xl mx-auto' : ''}`}>
                <h2 className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gradient leading-tight text-center px-1`}>{title}</h2>
                {subtitle && (
                  <p className={`text-xs sm:text-sm md:text-lg font-medium text-muted-foreground/90 leading-relaxed text-center px-1`}>{subtitle}</p>
                )}
                <p className={`text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto px-1`}>{description}</p>
              </div>
            </div>
            
            {/* Imagem para mobile quando está à direita */}
            <div className="flex justify-center items-center mt-3 sm:mt-4 md:hidden">
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
        ) : imageLeft ? (
          // Layout com imagem totalmente à esquerda, texto no início
          <div className={`${textClassName || ''} relative`}>
            {/* Imagem posicionada totalmente à esquerda */}
            {imageSrc && (
              <div className="absolute left-0 sm:left-0 md:left-0 top-4 sm:top-6 md:top-8 z-20 hidden md:flex items-center justify-center">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className={imageClassName || "w-auto h-auto object-contain"}
                />
              </div>
            )}
            {/* Texto mais para o início da seção com película */}
            <div className={`pt-2 sm:pt-3 md:pt-6 lg:pt-8 pl-0 md:pl-[280px] lg:pl-[320px] xl:pl-[360px]`}>
              <div className={`space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 bg-background/50 backdrop-blur-sm p-2.5 sm:p-3 md:p-5 lg:p-6 rounded-lg ${textCenter ? 'max-w-3xl mx-auto' : ''}`}>
                <h2 className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gradient leading-tight text-center px-1`}>{title}</h2>
                {subtitle && (
                  <p className={`text-xs sm:text-sm md:text-lg font-medium text-muted-foreground/90 leading-relaxed text-center px-1`}>{subtitle}</p>
                )}
                <p className={`text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto px-1`}>{description}</p>
              </div>
            </div>
            
            {/* Imagem para mobile quando está à esquerda */}
            <div className="flex justify-center items-center mt-3 sm:mt-4 md:hidden">
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
        ) : imageBottomRight ? (
          // Layout com imagem na parte inferior direita, centralizada verticalmente
          <div className={`${textClassName || ''} relative min-h-full`}>
            {/* Imagem posicionada na parte inferior direita, centralizada verticalmente no vídeo */}
            {imageSrc && (
              <div className="absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className={imageClassName || "w-auto h-auto object-contain"}
                />
              </div>
            )}
            {/* Texto acima da imagem com película */}
            <div className={`pt-2 sm:pt-4 md:pt-6 lg:pt-8`}>
              <div className={`space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 bg-background/50 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg ${textCenter ? 'max-w-3xl mx-auto' : ''}`}>
                <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient leading-tight text-center`}>{title}</h2>
                {subtitle && (
                  <p className={`text-sm sm:text-base md:text-lg font-medium text-muted-foreground/90 leading-relaxed text-center`}>{subtitle}</p>
                )}
                <p className={`text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto`}>{description}</p>
              </div>
            </div>
            
            {/* Imagem para mobile quando está embaixo */}
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
        ) : imageTopRight ? (
          // Layout com imagem no canto superior direito e texto abaixo
          <div className={`${textClassName || ''} relative`}>
            {/* Imagem posicionada totalmente no canto direito */}
            {imageSrc && (
              <div className="absolute right-0 sm:right-0 md:right-0 top-4 sm:top-6 md:top-8 z-20 hidden md:flex items-center justify-center">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className={imageClassName || "w-auto h-auto object-contain"}
                />
              </div>
            )}
            {/* Texto abaixo da imagem com película */}
            <div className={`pt-16 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-40`}>
              <div className={`space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 bg-background/50 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg ${textCenter ? 'max-w-3xl mx-auto' : ''}`}>
                <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient leading-tight text-center`}>{title}</h2>
                {subtitle && (
                  <p className={`text-sm sm:text-base md:text-lg font-medium text-muted-foreground/90 leading-relaxed text-center`}>{subtitle}</p>
                )}
                <p className={`text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto`}>{description}</p>
              </div>
            </div>
            
            {/* Imagem para mobile quando está no topo */}
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
        ) : imageRightAbsolute ? (
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
              <div className={`space-y-2 sm:space-y-3 md:space-y-4 ${textCenter ? 'max-w-3xl mx-auto' : ''}`}>
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
          <div className={`grid md:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
            <div className={`space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 order-2 md:order-1 ${reverse ? 'md:col-start-2 md:order-2' : ''} ${textCenter ? 'text-center mx-auto' : ''} ${textClassName || ''}`}>
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
