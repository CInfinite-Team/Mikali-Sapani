"use client";

import { useState } from "react";
import { submitEmailToSheet } from "../utils/googleSheet";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      const success = await submitEmailToSheet(email);
      setLoading(false);
      
      if (success) {
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 5000);
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  if (subscribed) {
    return (
      <div className="flex h-12 w-full items-center justify-center rounded-none border border-green-800 bg-green-50 text-xs tracking-widest text-green-900 uppercase animate-fade-in">
        Thank you for subscribing.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-0 animate-fade-in">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        disabled={loading}
        className="h-12 w-full rounded-none border border-neutral-300 bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 sm:border-r-0 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={loading}
        className="h-12 w-full sm:w-auto min-w-[140px] rounded-none border border-neutral-900 bg-neutral-900 px-6 text-xs font-medium tracking-widest text-white uppercase transition-all hover:bg-neutral-800 hover:text-white disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Notify Me"}
      </button>
    </form>
  );
}
