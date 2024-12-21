'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '../shared/SectionHeading';

const testimonials = [
  {
    content: "Working with CodeSync was a game-changer for our business. Their team delivered a custom solution that perfectly matched our needs and exceeded our expectations.",
    author: "John Smith",
    role: "CEO",
    company: "TechCorp Inc.",
    image: "/testimonials/image_fx_ (25).jpg",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    content: "The expertise and professionalism of the CodeSync team is unmatched. They transformed our digital presence and helped us achieve remarkable growth.",
    author: "Emma Davis",
    role: "Marketing Director",
    company: "Growth Dynamics",
    image: "/testimonials/image_fx_ (26).jpg",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    content: "CodeSync's attention to detail and commitment to quality is exceptional. They're not just service providers, they're true partners in our success.",
    author: "Robert Johnson",
    role: "CTO",
    company: "InnovateX",
    image: "/testimonials/image_fx_ (27).jpg",
    gradient: "from-teal-500 to-green-500"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setAutoplay(false);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from some of our satisfied clients about their experience working with us."
          centered
        />

        <div className="relative mt-16">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Previous testimonial"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Next testimonial"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Testimonials */}
          <div className="relative h-[400px] mx-12 overflow-hidden">
            <AnimatePresence initial={false} custom={current}>
              <motion.div
                key={current}
                custom={current}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full flex items-center justify-center"
              >
                <div className="w-full max-w-3xl mx-auto">
                  <div className="relative overflow-hidden rounded-2xl bg-white p-12 shadow-lg ring-1 ring-gray-200">
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[current].gradient} opacity-5`} />
                    
                    <div className="relative">
                      <svg className="absolute top-0 left-0 h-12 w-12 -translate-x-6 -translate-y-8 text-gray-200 transform rotate-12" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      
                      <div className="relative mt-6">
                        <p className="text-xl text-gray-600 leading-8">
                          "{testimonials[current].content}"
                        </p>
                      </div>

                      <div className="mt-8 flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full ring-4 ring-white">
                          <Image
                            className="h-12 w-12 object-cover"
                            src={testimonials[current].image}
                            alt={testimonials[current].author}
                            width={48}
                            height={48}
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonials[current].author}</div>
                          <div className="text-sm text-gray-600">{testimonials[current].role} at {testimonials[current].company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  index === current ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 