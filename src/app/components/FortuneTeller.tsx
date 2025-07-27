"use client";
import VoiceBoxSays from "./Voicebox";
import { useState } from "react";
import styles from "./FortuneTeller.module.css";

const FortuneTeller = () => {
  const [isTalking, setIsTalking] = useState(false);
  const [fortune, setFortune] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const fortunes: string[] = [
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The best way to predict the future is to invent it.",
    "The future is not something to fear, it is something to create.",
    "The future is not something to be predicted, it is something to be created.",
  ];

  const getRandomFortune = () => {
    setIsThinking(true);
    setIsTalking(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const selected = fortunes[randomIndex];
      setFortune(selected);
      setIsThinking(false);
      setIsTalking(true);
      VoiceBoxSays(selected);
      setIsTalking(false);
    }, 1000);
  };

  return (
    <div>
      <div className={styles.fortuneTeller}>
        <div
          className={`${styles.crystalBall} ${isTalking ? styles.glowing : ""}`}
        >
          {fortune && (
            <div
              className={`${styles.fortuneText} ${
                isThinking ? styles.hidden : ""
              }`}
            >
              {fortune}
            </div>
          )}
          {isThinking && (
            <div className={styles.thinking}>
              <span>🔮</span>
            </div>
          )}
        </div>

        <div className={styles.character}>
          <div className={`${styles.face} ${isTalking ? styles.talking : ""}`}>
            <div className={styles.eyes}>
              <div className={styles.eye}></div>
              <div className={styles.eye}></div>
            </div>
            <div className={styles.mouth}></div>
          </div>
          <div className={styles.headscarf}></div>
          <div className={styles.shawl}></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className={`px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors 
            ${isThinking ? "animate-pulse-slow" : ""}`}
            onClick={getRandomFortune}
          >
            {isThinking
              ? "Gazing into the future..."
              : "Recieve a Fortune (1 Cent)"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FortuneTeller;
