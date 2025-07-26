"use client";
import { useState } from "react";
import Say from "jaxcore-say";

Say.setWorkers({
  espeak: "webworkers/espeak-en-worker.js",
  sam: "webworkers/sam-worker.js",
});

const VoiceBox = new Say({
  profile: "Sam",
  language: "en",
});

export default function Home() {
  const [fortuneLog, setFortuneLog] = useState<string[]>([]);

  const handleRecieveFortune = () => {
    const fortunes = [
      "The future belongs to those who believe in the beauty of their dreams.",
      "The only limit to our realization of tomorrow is our doubts of today.",
      "The best way to predict the future is to invent it.",
      "The future is not something to fear, it is something to create.",
      "The future is not something to be predicted, it is something to be created.",
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    VoiceBox.say(randomFortune).then(function () {
      console.log("done");
    });

    setFortuneLog([...fortuneLog, randomFortune]);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-64 h-64 mb-12">
        {/* Crystal Ball */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full shadow-2xl shadow-purple-500/50 animate-pulse-slow">
          <div className="absolute inset-4 bg-black/20 rounded-full backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-white/80 rounded-full animate-ping"></div>
            </div>
          </div>
          {/* Shine effect */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/30 rounded-full blur-md"></div>
        </div>
        {/* Stand */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-amber-800/80 rounded-full"></div>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-amber-900/60 rounded-full"></div>
      </div>

      <h2 className="text-2xl font-medium mb-6 text-center">
        What would you like to know about your future?
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors animate-pulse-slow"
          onClick={handleRecieveFortune}
        >
          Recieve a Fortune (1 Cent)
        </button>
      </div>

      {fortuneLog.length > 0 && (
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl max-w-md w-full">
          {fortuneLog.map((fortune, index) => (
            <p key={index} className="text-center text-purple-100 italic">
              &quot;{fortune}&quot;
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
