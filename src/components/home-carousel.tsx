import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoPlay from "embla-carousel-autoplay";

const bannerImages = [
  {
    src: "/images/bannerStatic.png",
    alt: "Banner 1",
  },
  {
    src: "/images/bannerStatic2.png",
    alt: "Banner 2",
  },
  {
    src: "/images/bannerStatic3.png",
    alt: "Banner 3",
  },
];

const HomeCarousel = () => {
  return (
    <Carousel
      className="w-full mb-12"
      opts={{ loop: true }}
      plugins={[
        AutoPlay({
          delay: 3000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {bannerImages.map((image) => (
          <CarouselItem key={image.src}>
            <div className="relative mx-auto">
              <img
                src={image.src}
                alt={image.alt}
                sizes="100vw"
                className="object-contain w-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HomeCarousel;
