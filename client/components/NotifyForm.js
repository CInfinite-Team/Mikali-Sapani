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
        className="h-12 w-full rounded-none border backdrop-blur-xs border-white/30 bg-black/20 px-4 text-sm outline-none transition-colors text-white placeholder:text-white/60 focus:border-white  sm:border-r-0 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-17 h-12 w-full cursor-pointer sm:w-auto min-w-[140px] rounded-none border rounded-r-sm! border-white/30 hover:border-white border-l-white/30 border-l-0 bg-black px-6 text-xs! font-medium tracking-widest text-black uppercase transition-all disabled:opacity-50"
      >
        <span className="text-container">
          <span className="text">{loading ? "Submitting..." : "Notify Me"}</span>
        </span>
      </button>
    </form>
  );
}
