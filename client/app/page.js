"use client";

import Image from "next/image";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-6 py-12 font-sans text-neutral-900 selection:bg-neutral-200">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-50"></div>
      
      <main className="z-10 flex w-full max-w-2xl flex-col items-center justify-center text-center animate-fade-in-up">
        {/* Logo */}
        <div className="mb-14 relative w-64 h-24 sm:w-80 sm:h-32">
          <Image
            src="/Logo.svg"
            alt="MIKALI SAPANI"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mb-8 text-3xl font-light tracking-tight sm:text-5xl md:text-5xl text-neutral-900">
          Elegance is a beautiful disposition
        </h1>

        {/* Description */}
        <p className="mb-12 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          For the strong, modern woman who is bold, passionate, and spirited. We are merging 
          tradition with contemporary luxury, nurturing a commitment to sustainability and empowerment. 
          The Spirit of Africa, redefined.
        </p>

        {/* Subscription Form */}
        <div className="w-full max-w-md">
          {subscribed ? (
            <div className="flex h-12 w-full items-center justify-center rounded-none border border-green-800 bg-green-50 text-xs tracking-widest text-green-900 uppercase animate-fade-in">
              Thank you for subscribing.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-12 w-full rounded-none border border-neutral-300 bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 sm:border-r-0"
              />
              <button
                type="submit"
                className="h-12 w-full sm:w-auto min-w-[140px] rounded-none border border-neutral-900 bg-neutral-900 px-6 text-xs font-medium tracking-widest text-white uppercase transition-all hover:bg-neutral-800 hover:text-white"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 w-full text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <p className="text-[10px] tracking-widest text-neutral-400 uppercase">
          © {new Date().getFullYear()} Mikali Sapani. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
