import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const clients = [
  "ABC Constructions",
  "XYZ Architects",
  "HomeStyle Interiors",
  "Urban Spaces Pvt Ltd",
  "Dream Homes Builders",
];

const ClientCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-20 bg-gray-100 p-4 rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={clients[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold text-gray-800"
        >
          {clients[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ClientCarousel;
