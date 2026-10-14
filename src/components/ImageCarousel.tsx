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

import mobileImage1 from "@/assets/images/carousel-mobile/1.png";
import mobileImage2 from "@/assets/images/carousel-mobile/2.png";
import mobileImage3 from "@/assets/images/carousel-mobile/3.png";
import mobileImage4 from "@/assets/images/carousel-mobile/4.png";
import mobileImage5 from "@/assets/images/carousel-mobile/5.png";
import mobileImage6 from "@/assets/images/carousel-mobile/6.png";
import mobileImage7 from "@/assets/images/carousel-mobile/7.png";

const imagesDesktop = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9,
];

const imagesMobile = [
  mobileImage1, mobileImage2, mobileImage3, mobileImage4,
  mobileImage5, mobileImage6, mobileImage7,
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));

  const nextImage = (imagesLength: number) =>
    setCurrentIndex((prev) => (prev + 1) % imagesLength);

  return (
    <section className="w-full bg-white">
      {/* Desktop carousel */}
      <div className="relative hidden w-full overflow-hidden md:block">
        <div className="relative min-h-screen">
          <img
            src={imagesDesktop[currentIndex % imagesDesktop.length]}
            alt={`K&G golf slide ${(currentIndex % imagesDesktop.length) + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? imagesDesktop.length - 1 : prev - 1
              )
            }
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 text-black shadow-md transition-colors hover:bg-white"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => nextImage(imagesDesktop.length)}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 text-black shadow-md transition-colors hover:bg-white"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {imagesDesktop.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                aria-current={currentIndex % imagesDesktop.length === index}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex % imagesDesktop.length === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="relative w-full overflow-hidden md:hidden">
        <div className="relative aspect-square">
          <img
            src={imagesMobile[currentIndex % imagesMobile.length]}
            alt={`K&G mobile golf slide ${(currentIndex % imagesMobile.length) + 1}`}
            className="absolute inset-0 h-full w-full object-contain"
          />

          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? imagesMobile.length - 1 : prev - 1
              )
            }
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow-md transition-colors hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => nextImage(imagesMobile.length)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow-md transition-colors hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {imagesMobile.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to mobile image ${index + 1}`}
                aria-current={currentIndex % imagesMobile.length === index}
                className={`h-2 rounded-full transition-all ${
                  currentIndex % imagesMobile.length === index
                    ? "w-6 bg-black"
                    : "w-2 bg-black/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}