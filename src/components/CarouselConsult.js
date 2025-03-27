import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.livspace-cdn.com/w:768/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/hire-designer/clutter-free-spaces-1666700842-euS7j/desktop-1666700850-UOxnH/bathroom-desktop-1666700867-s7epK.jpg",
  "https://images.livspace-cdn.com/w:768/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/hire-designer/clutter-free-spaces-1666700842-euS7j/desktop-1666700850-UOxnH/pooja-room-desktop-1666700878-MM4HT.jpg",
  "https://images.livspace-cdn.com/w:768/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/hire-designer/clutter-free-spaces-1666700842-euS7j/desktop-1666700850-UOxnH/balcony-desktop-1666700864-6B9xt.jpg"
];

export default function CarouselConsult() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div className="relative h-64 w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="carousel"
            className="absolute w-full h-full object-cover rounded-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow btnRight"
        onClick={nextSlide}>
        <ChevronRight />
      </button>
    </div>
  );
}
