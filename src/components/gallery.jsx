import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Local image imports
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";
import nine from "../assets/nine.png";
import ten from "../assets/ten.png";

// Image array
const images = [one, two, three, four, five, six, seven, eight, nine, ten];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  const goNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goPrevious = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#fffff] py-16 px-8 text-center">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-[#431aa0] mb-14 mt-5"
      >
        Our Gallery
      </motion.h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg"
            onClick={() => setSelectedIndex(index)}
          >
            <motion.img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <div className="relative flex items-center justify-center">
              {/* Previous Arrow */}
              <button
                onClick={goPrevious}
                className="absolute left-[-60px] text-white text-4xl font-bold px-3 py-1 bg-black/40 rounded-full hover:bg-black/70 transition"
              >
                ‹
              </button>

              {/* Selected Image */}
              <motion.img
                src={selectedImage}
                alt="Large preview"
                className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl border-4 border-white"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />

              {/* Next Arrow */}
              <button
                onClick={goNext}
                className="absolute right-[-60px] text-white text-4xl font-bold px-3 py-1 bg-black/40 rounded-full hover:bg-black/70 transition"
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
