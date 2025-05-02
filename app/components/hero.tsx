"use client"
import Image from 'next/image';
import { useState } from 'react';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative h-screen w-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/dog-copyspace.jpg"
          alt="Veterinary clinic background"
          layout="fill"
          objectFit="cover"
          className={`transform ${loaded ? 'scale-100' : 'scale-105'} transition-transform duration-1000`}
          onLoadingComplete={() => setLoaded(true)}
        />
        {/* Gradient Overlay */}
        
      </div>

      {/* Content */}
      <div className="relative z-0 flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black drop-shadow-lg mb-4">
           Veterinární ordinace
          </h1>
          <p className="text-lg md:text-2xl text-black mb-6">
            Vaše zdraví a pohoda zvířat je naší nejvyšší prioritou.
          </p>
          <a
            href="/Kontakt"
            className="inline-block bg-green-300 text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-green-200 transition-shadow shadow-lg hover:shadow-xl"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center z-0">
        <div className="animate-bounce p-2 bg-green-300 bg-opacity-80 rounded-full pointer-events-none">
          <span className="block w-3 h-3 bg-green-900 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
