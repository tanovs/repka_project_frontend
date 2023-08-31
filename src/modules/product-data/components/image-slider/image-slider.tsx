import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, CarouselProps } from "react-responsive-carousel";

export type ImageSliderProps = {
  imageSrc: string[];
};

export default function ImageSlider({ imageSrc }: ImageSliderProps) {
  const imageTemplates = imageSrc.map((src, index) => (
    <div key={index}>
      <img src={src} />
    </div>
  ));

  const carouselConfig = {
    infiniteLoop: true,
    showArrows: false,
    showThumbs: false,
    showStatus: false,
    dynamicHeight: true,
  };

  return (
    <div>
      <Carousel
        className="[&_.control-dots]:px-4 [&_.control-dots]:text-end  [&_.dot.selected]:bg-text-3 "
        {...carouselConfig}
      >
        {imageTemplates}
      </Carousel>
    </div>
  );
}
