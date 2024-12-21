'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/app/components/shared/SectionHeading';

const team = [
  {
    name: 'Wesley Pitts',
    role: 'Co-Founder & Business Development',
    bio: 'Entrepreneur and founder of Pink Apron Logistics and TerraSYNC, bringing strategic vision and business development expertise to the team.',
    image: '/team/Wesley.jpg',
    linkedin: 'https://www.linkedin.com/in/thewesleypitts/',
    twitter: '#',
  },
  {
    name: 'Cody Blankenship',
    role: 'Co-Founder & Technical Lead',
    bio: 'Successful business owner of Flock Care, bringing entrepreneurial experience and technical expertise in web development and design.',
    image: '/team/image_fx_ (19).jpg',
    linkedin: 'https://www.linkedin.com/in/-cody-blankenship/',
    twitter: '#',
  },
  {
    name: 'Luke McGinnis',
    role: 'Technology Innovation Lead',
    bio: 'First-year college student with a passion for technology and entrepreneurship, focusing on innovative solutions and emerging technologies.',
    image: '/team/image_fx_ (18).jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'William Pitts',
    role: 'Creative Director',
    bio: 'High school student with a creative vision and passion for digital innovation, bringing fresh perspectives to design and user experience.',
    image: '/team/image_fx_ (17).jpg',
    linkedin: '#',
    twitter: '#',
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Get to know the passionate experts behind McGinnis Technology Group's success. Our diverse team brings together years of experience and a shared commitment to excellence."
          />
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((person) => (
            <li key={person.name} className="group relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={600}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover object-[center_15%] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    objectPosition: person.name === 'Wesley Pitts' ? 'center 10%' : 'center 15%'
                  }}
                  priority
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-lg leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-primary font-medium">{person.role}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">{person.bio}</p>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={person.linkedin}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={person.twitter}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 