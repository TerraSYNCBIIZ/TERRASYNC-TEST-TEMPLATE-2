'use client';

import { motion } from 'framer-motion';

const locations = [
  {
    id: 1,
    city: 'Knoxville',
    address: '121 E Jackson St',
    state: 'TN',
    zip: '37915',
    country: 'United States',
    coordinates: {
      lat: 35.9692,
      lng: -83.9207,
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function LocationMap() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Map background */}
      <div className="absolute inset-0 h-[50vh] w-full px-6 lg:px-8 pt-8">
        <div className="h-full w-full overflow-hidden rounded-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-83.92289492427287!3d35.96920847227047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c17f65d9e1c49%3A0x7b0eb0e7e2a3b507!2s121%20E%20Jackson%20Ave%2C%20Knoxville%2C%20TN%2037915!5e1!3m2!1sen!2sus!4v1709673144243!5m2!1sen!2sus&disableDefaultUI=1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8">
          {locations.map((location) => (
            <motion.div
              key={location.id}
              variants={itemVariants}
              className="rounded-3xl bg-white/90 p-8 shadow-lg backdrop-blur-sm ring-1 ring-gray-200 hover:ring-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">{location.city}</h3>
              <address className="mt-4 space-y-2 not-italic text-base text-gray-600">
                <p>{location.address}</p>
                <p>
                  {location.state && `${location.state}, `}
                  {location.zip}
                </p>
                <p>{location.country}</p>
              </address>
              <div className="mt-6 flex items-center gap-x-4">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${location.address}, ${location.city}, ${location.state} ${location.zip}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Get directions
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 