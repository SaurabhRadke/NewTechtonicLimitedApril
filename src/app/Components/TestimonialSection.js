"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    content: "Thanks to Techtonic Lab's expert training and strong industry connections, I got placed at InfoKrafts in no time!",
    rating: 5,
    name: "Pranal Rewatkar",
    company: "InfoKrafts",
    package: "",
    image: "/api/placeholder/40/40"
  },
  {
    id: 2,
    content: "Techtonic Lab helped me get my dream job, I had a MBA background!",
    rating: 5,
    name: "Ravi Sharma",
    company: "Infosys",
    package: "₹6.5 LPA",
    image: "/api/placeholder/40/40"
  },
  {
    id: 3,
    content: "From zero to SAP-certified with real project exposure.",
    rating: 5,
    name: "Anjali Rane",
    company: "Capgemini",
    package: "₹5.2 LPA",
    image: "/api/placeholder/40/40"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    // Auto-advance the carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 px-4 py-16">
        <h1 className='uppercase font-medium mb-3 text-white'>Testimonials</h1>
        <div className='w-[90%] text-[2rem] md:text-[5rem] md:w-[60%] font-semibold text-center leading-[3rem] md:leading-[5rem] mb-[10vh] text-white'>Real Stories. Real Impact. Zero Hype.</div>
      <div className="max-w-2xl w-full mx-auto">
        {/* Rating Display */}
        <div className="flex flex-col items-center mb-8">
          <div className="text-2xl font-bold text-white mb-1">{currentTestimonial.rating.toFixed(1)}</div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className="w-5 h-5 text-yellow-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-xs text-gray-400 mt-1">Student Success Stories</div>
        </div>
        
        {/* Testimonial Content */}
        <div className="relative h-64 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <div className="bg-emerald-500/30 bg-opacity-10 border border-emerald-700 border-opacity-20 rounded-lg p-8 text-center relative overflow-hidden">
                <h1 className='text-[1.4rem] font-semibold mb-3 text-emerald-400'>
                  {`Placed at ${currentTestimonial.company} ${currentTestimonial.package ? `• ${currentTestimonial.package}` : ''}`}
                </h1>
                <p className="text-white text-lg mb-4">&quot;{currentTestimonial.content}&quot;</p>
                <div className="text-emerald-300 text-sm font-medium">— {currentTestimonial.name}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mt-10">
          {/* Profile Images Row */}
          <div className="flex rounded-full items-center justify-center mb-4">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              return (
                <div 
                  key={testimonial.id} 
                  className={`relative mx-1  w-10 h-10 rounded-full grid place-items-center  bg-zinc-100 ${index === currentIndex ? 'z-10' : 'opacity-60 scale-75'}`}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.75,
                      opacity: isActive ? 1 : 0.6,
                      y: isActive ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                   <FaUserTie className=' text-[1.4rem] text-zinc-950'/>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full"
                      />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
          
          {/* Current User Name */}
          <motion.div
            key={`name-${currentTestimonial.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white font-medium"
          >
            {currentTestimonial.name}
          </motion.div>
        </div>
        
        {/* Indicator Dots */}
        <div className="flex justify-center mt-3">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-emerald-400' : 'bg-gray-600'}`}
              animate={{
                scale: currentIndex === index ? 1.2 : 1,
                backgroundColor: currentIndex === index ? '#34D399' : '#4B5563'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;