import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "@/assets/images/carousel/1.png";
import image2 from "@/assets/images/carousel/2.png";
import image3 from "@/assets/images/carousel/3.png";
import image4 from "@/assets/images/carousel/4.png";
import image5 from "@/assets/images/carousel/5.png";
import image6 from "@/assets/images/carousel/6.png";
import image7 from "@/assets/images/carousel/7.png";
import image8 from "@/assets/images/carousel/8.png";
import image9 from "@/assets/images/carousel/9.png";

const images = [
  { src: image1, alt: "K&G golf slide 1" },
  { src: image2, alt: "K&G golf slide 2" },
  { src: image3, alt: "K&G golf slide 3" },
  { src: image4, alt: "K&G golf slide 4" },
  { src: image5, alt: "K&G golf slide 5" },
  { src: image6, alt: "K&G golf slide 6" },
  { src: image7, alt: "K&G golf slide 7" },
  { src: image8, alt: "K&G golf slide 8" },
  { src: image9, alt: "K&G golf slide 9" },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-full bg-white">
      <div className="relative w-full overflow-hidden">
        <div className="relative min-h-[400px] md:min-h-screen">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="absolute inset-0 h-full w-full object-contain md:object-cover"
          />

          {/* Previous button */}
          <button
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2
              rounded-full bg-white/80 p-3 text-black shadow-md
              hover:bg-white"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2
              rounded-full bg-white/80 p-3 text-black shadow-md
              hover:bg-white"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination dots */}
          <div className="absolute bottom-5 left-1/2 z-10 flex
            -translate-x-1/2 gap-2">
            {images.map((image, index) => (
              <button
                key={image.alt}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                aria-current={currentIndex === index}
                className={`h-2.5 rounded-full ${
                  currentIndex === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}