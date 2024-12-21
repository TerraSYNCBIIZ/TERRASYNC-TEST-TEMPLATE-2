'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { formStyles } from '../components/styles';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useWindowSize } from 'react-use';
import BackgroundPattern from '../components/BackgroundPattern';

// Dynamically import react-confetti to avoid SSR issues
const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

// Fun tech jokes array
const techJokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🪲",
  "Your website is about to level up faster than a programmer's coffee consumption! ☕",
  "We'll build your site so fast, even Google will need to catch its breath! 🏃‍♂️",
  "Your competition will be asking 'What's their CSS secret?' (Spoiler: It's talent!) 💅",
  "Time to transform your web presence from 404 to 200 OK! 🚀",
  "Your website is about to get more updates than a developer's software stack! 📚",
  "We promise to make your website more responsive than a developer during code review! 👩‍💻",
  "Get ready for a website that loads faster than a developer's excuse for missing documentation! 📝"
];

export default function ConsultationSuccess() {
  const { width, height } = useWindowSize();
  const [isConfettiActive, setIsConfettiActive] = useState(true);
  const [joke, setJoke] = useState('');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Randomly select a joke
    const randomJoke = techJokes[Math.floor(Math.random() * techJokes.length)];
    setJoke(randomJoke);

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setIsConfettiActive(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <BackgroundPattern />
      
      {isConfettiActive && (
        <Confetti
          width={width}
          height={height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.div 
            className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
          >
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Woohoo! Consultation Request Submitted! 🎉
            </h2>
            
            <p className="mt-4 text-lg text-gray-600">
              Thank you for your interest in working with us. We'll review your request 
              and contact you within 1-2 business days to schedule your consultation.
            </p>

            <motion.div
              className="mt-6 p-4 bg-blue-50 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg font-medium text-blue-900">
                {joke}
              </p>
            </motion.div>

            <div className="mt-8 space-y-4">
              <Link
                href="/"
                className={`${formStyles.button.base} ${formStyles.button.primary} w-full sm:w-auto`}
              >
                Return to Homepage
              </Link>
              
              <div className="mt-4 text-sm text-gray-500">
                <p>Meanwhile, feel free to check out our</p>
                <div className="mt-2 flex justify-center gap-4">
                  <Link href="/blog" className="text-primary hover:text-primary-dark">
                    Blog
                  </Link>
                  <span>•</span>
                  <Link href="/portfolio" className="text-primary hover:text-primary-dark">
                    Portfolio
                  </Link>
                  <span>•</span>
                  <Link href="/services" className="text-primary hover:text-primary-dark">
                    Services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 