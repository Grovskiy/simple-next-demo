'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/app/components/ui/Button';

interface HeroSection {
  title: string;
  heading: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

async function getHeroContent(): Promise<HeroSection> {
  const res = await fetch('/data/pagesContent.json');
  if (!res.ok) {
    throw new Error('Failed to load content');
  }
  const data = await res.json();
  return data.home;
}

const HomePage: React.FC = () => {
  const [content, setContent] = React.useState<HeroSection | null>(null);

  React.useEffect(() => {
    getHeroContent()
      .then(data => setContent(data))
      .catch(err => console.error(err));
  }, []);

  if (!content)
    return <div className="w-full bg-gray-50 py-4 text-center">Loading...</div>;

  return (
    <section className="w-full bg-gray-50 pb-10 pt-2 md:py-16">
      <div className="container mx-auto flex flex-col-reverse px-4 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="mb-2 text-xs uppercase text-gray-600 md:mt-6 md:text-sm">
            {content.title}
          </h1>
          <h2 className="font-customFont mb-4 text-xl font-bold text-gray-900 md:text-3xl">
            {content.heading}
          </h2>
          <p className="mb-6 text-base text-gray-600 md:mb-12 md:text-lg">
            {content.description}
          </p>
          <Button onClick={() => alert('Button clicked!')}>
            {content.buttonText}
          </Button>
        </div>
        <div className="m-4 md:w-1/2">
          <Image
            className="mx-auto h-auto w-full max-w-xs overflow-hidden rounded-full md:max-w-96"
            src={content.imageSrc}
            alt={content.imageAlt}
            width={1024}
            height={1024}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
