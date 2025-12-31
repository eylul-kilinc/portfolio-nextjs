"use client";

import { useState, useEffect } from "react";

export default function NewYearPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-01-01T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setCountdownFinished(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (countdownFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 text-white" style={{ backgroundColor: '#6E0407' }}>
        <div className="max-w-3xl w-full text-center space-y-8" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            New Year&apos;s Prayer
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white space-y-6" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            <p className="mb-4">
              To you—as always,<br />
              may this year be good to you, my love.<br />
              May your mouth forget how to speak<br />
              and remember how to find me in kisses.
            </p>
            <p className="mb-4">
              To you—as always,<br />
              may we spend next Christmas together,<br />
              still choosing each other<br />
              as if it were the first or last.
            </p>
            <p className="mb-4">
              To you—as always,<br />
              there is no word in my vocabulary<br />
              large enough for my gratitude to last year—<br />
              because it led me to you,<br />
              and I do not intend to let that go.
            </p>
            <p className="mb-4">
              To you—as always,<br />
              even the same words themselves<br />
              fail to describe how beautiful you are,<br />
              and they will fail again<br />
              in the coming year.
            </p>
            <p className="mb-4">
              To you—as always,<br />
              may the days treat you gently.<br />
              May rush never make you forget yourself.<br />
              May the nights never make you sad.
            </p>
       
            <p className="mb-4">
            
            </p>
            <p className="mb-4">
             -Umut Bideci
            </p>
            <p className="mb-4">
            
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 text-white" style={{ backgroundColor: '#6E0407' }}>
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {timeLeft.days}
            </div>
            <div className="text-sm sm:text-base md:text-lg text-white/70 uppercase tracking-wide">
              Days
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {timeLeft.hours}
            </div>
            <div className="text-sm sm:text-base md:text-lg text-white/70 uppercase tracking-wide">
              Hours
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {timeLeft.minutes}
            </div>
            <div className="text-sm sm:text-base md:text-lg text-white/70 uppercase tracking-wide">
              Minutes
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              {timeLeft.seconds}
            </div>
            <div className="text-sm sm:text-base md:text-lg text-white/70 uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

