import React from 'react';

export const metadata = {
  title: 'Random Dad Joke',
};

const fetchDadJoke = async (): Promise<string> => {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch a dad joke');
  }

  const data = await res.json();
  return data.joke;
};

const JokesPage = async () => {
  const joke = await fetchDadJoke();

  return (
    <section className="flex w-full items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg rounded-lg bg-white p-4 text-center shadow-md md:p-8">
        <h1 className="mb-4 text-lg font-bold md:text-2xl">Random Dad Joke</h1>
        <p className="mb-6 text-base text-gray-700 md:text-lg">{joke}</p>
        <a
          href="/jokes"
          className="inline-block rounded bg-customGreen px-4 py-2 text-white hover:bg-green-700"
        >
          Get Another Joke
        </a>
      </div>
    </section>
  );
};

export default JokesPage;
