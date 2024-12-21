'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

const features = [
  {
    name: 'Rapid Delivery',
    description: 'We deliver complete projects in days, not months. Our streamlined process and expert team ensure quick turnaround without compromising quality.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-400',
    metrics: ['Fast Delivery', 'Full Projects', 'No Compromises'],
  },
  {
    name: 'Dedicated Support',
    description: 'Our team is always here for you. Get 24/7 support and rapid response times to keep your project moving forward.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-400',
    metrics: ['24/7 Support', '1hr Response', 'Expert Team'],
  },
  {
    name: 'Quality Focus',
    description: 'Our efficient approach ensures high-quality results through rigorous testing and attention to detail.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-400',
    metrics: ['Code Reviews', 'Testing', 'Best Practices'],
  },
  {
    name: 'Agile Process',
    description: 'Our streamlined development process ensures quick iterations and constant progress, keeping you in the loop every step of the way.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: 'from-orange-500 to-amber-400',
    metrics: ['Daily Updates', 'Quick Iterations', 'Full Transparency'],
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

const metricVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base font-semibold leading-7 text-primary">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Speed meets excellence in web development
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unlike others in the industry, we deliver complete projects in days, not months. 
              Our streamlined process and expert team ensure rapid delivery without compromising quality.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:ring-primary/50 transition-all duration-300 h-full transform hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <motion.div 
                        className="text-primary"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                    
                    <dt className="mt-6 text-xl font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    
                    <dd className="mt-4 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>

                    <motion.div
                      variants={containerVariants}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {feature.metrics.map((metric, index) => (
                        <motion.span
                          key={metric}
                          variants={metricVariants}
                          className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
                        >
                          {metric}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
} 