'use client';

import { motion } from 'framer-motion';

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM PST' },
  { day: 'Sunday', hours: 'Closed' },
];

const contactInfo = [
  {
    label: 'General Inquiries',
    value: 'info@mcginnistechnologygroup.com',
    type: 'email',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '865-696-5987',
    type: 'phone',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Support',
    value: 'support@mcginnistechnologygroup.com',
    type: 'email',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
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

export default function OfficeInfo() {
  return (
    <section className="bg-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-24 sm:py-32 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Office Information
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Our team is here to help you with any questions or concerns you may have.
            Feel free to reach out through any of the channels below.
          </p>

          <motion.dl variants={containerVariants} className="mt-10 space-y-8">
            {/* Office Hours */}
            <motion.div variants={itemVariants}>
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                Office Hours
              </dt>
              <dd className="mt-4 space-y-4">
                {officeHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-gray-600">{schedule.day}</span>
                    <span className="text-sm font-medium text-gray-900">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </dd>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                Contact Information
              </dt>
              <dd className="mt-4 space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <div className="text-primary">{info.icon}</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{info.label}</p>
                      <a
                        href={info.type === 'email' ? `mailto:${info.value}` : `tel:${info.value}`}
                        className="text-sm text-gray-600 hover:text-primary"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </dd>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <dt className="text-lg font-semibold leading-7 text-gray-900">
                Follow Us
              </dt>
              <dd className="mt-4">
                <div className="flex gap-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </dd>
            </motion.div>
          </motion.dl>
        </motion.div>
      </motion.div>
    </section>
  );
} 