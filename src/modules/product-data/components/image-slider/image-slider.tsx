import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, CarouselProps } from "react-responsive-carousel";

export type ImageSliderProps = {
  imageSrc: string[];
  width?: string | number;
};

export default function ImageSlider({ imageSrc, width }: ImageSliderProps) {
  const imageTemplates = imageSrc.map((src, index) => (
    <div
      className="h-96"
      key={index}
      style={{ background: `url(${src}) no-repeat center` }}
    >
      {/* <img src={src} /> */}
    </div>
  ));

  const carouselConfig = {
    infiniteLoop: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    dynamicHeight: false,
    width,
  };

  return (
    <Carousel
      className=" [&_.control-dots]:px-4  [&_.control-dots]:text-end [&_.dot.selected]:bg-text-3"
      {...carouselConfig}
      width={"100%"}
    >
      {imageTemplates}
    </Carousel>
  );
}
