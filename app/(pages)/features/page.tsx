import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSection {
  title: string;
  heading: string;
  list: Feature[];
}

async function getFeatures(): Promise<FeaturesSection> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/pagesContent.json`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch features');
  }
  const data = await res.json();
  return data.features;
}

const FeaturesPage = async () => {
  const features = await getFeatures();

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto mb-8 space-y-4 px-4 text-center">
        <h1 className="text-xl">{features.heading}</h1>
        <p className="gray-600 text-base">{features.heading}</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.list.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="mb-4 text-4xl text-customGreen">{feature.icon}</div>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesPage;
