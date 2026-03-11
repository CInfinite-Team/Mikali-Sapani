"use client";

import Image from "next/image";
import NotifyForm from "../components/NotifyForm";

export default function ComingSoon() {
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
          <NotifyForm />
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
