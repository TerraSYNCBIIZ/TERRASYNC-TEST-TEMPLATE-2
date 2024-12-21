'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '../shared/SectionHeading';
import ComingSoonOverlay from '@/app/components/shared/ComingSoonOverlay';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const testimonials = [
  {
    content: "Working with McGinnis Technology Group was a game-changer for our business. Their expertise and dedication transformed our digital presence.",
    author: {
      name: "John Smith",
      role: "CEO at TechCorp Inc.",
      image: "/team/placeholder.jpg"
    }
  },
  {
    content: "The team's attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
    author: {
      name: "Sarah Johnson",
      role: "Marketing Director at InnovateCo",
      image: "/team/placeholder.jpg"
    }
  },
  {
    content: "Their commitment to excellence and customer satisfaction sets them apart. We couldn't be happier with the results.",
    author: {
      name: "Michael Chen",
      role: "Founder of StartupXYZ",
      image: "/team/placeholder.jpg"
    }
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
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it - hear from some of our satisfied clients about their experience working with us.
          </p>
        </div>

        <div className="relative">
          <ComingSoonOverlay 
            message="Client Testimonials Coming Soon" 
            subMessage="We're gathering feedback from our valued clients to share their success stories with you." 
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 pb-6">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="font-semibold leading-7 tracking-tight text-gray-900">
                      {testimonial.author.name}
                    </h3>
                    <p className="text-sm leading-6 text-gray-600">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-6 text-base leading-7 text-gray-600">
                  {testimonial.content}
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 