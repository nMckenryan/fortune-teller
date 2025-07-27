"use client";
import VoiceBoxSays from "./Voicebox";
import { useState } from "react";
import styles from "./FortuneTeller.module.css";

const FortuneTeller = () => {
  const [isTalking, setIsTalking] = useState(false);
  const [fortune, setFortune] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const fortunes: string[] = [
    "I feel Sick",
    "KI KO HO",
    "You will die",
    "A new adventure awaits you",
    "Good things are coming your way",
    "A surprise is heading your direction",
    "A change is coming your way",
    "Expect a surprise in your life",
    "A new opportunity is arising",
    "A good time is ahead",
    "Good news is coming your way",
    "Something exciting is happening soon",
    "A new journey is beginning",
  ];

  //3 words = 1 second for each word.
  const convertWordsToSeconds = (words: string) => {
    const wordSplit: string[] = words.split(" ");
    const seconds = Math.ceil(wordSplit.length / 3);
    return seconds * 1000;
  };

  const getRandomFortune = () => {
    setIsThinking(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const selected = fortunes[randomIndex];
      setFortune(selected);
      setIsThinking(false);
      VoiceBoxSays(selected);
      setIsTalking(true);
      setTimeout(() => setIsTalking(false), convertWordsToSeconds(selected));
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

        <div
          className={`${styles.character} ${isThinking ? styles.thinking : ""}`}
        >
          <div className={`${styles.face} ${isTalking ? styles.talking : ""}`}>
            <div className={styles.thirdEye}>
              <div className={styles.thirdEyeIris}></div>
            </div>
            <div className={styles.eyes}>
              <div className={styles.eye}>
                <div className={styles.iris}></div>
              </div>
              <div className={styles.eye}>
                <div className={styles.iris}></div>
              </div>
            </div>
            <div className={styles.mouth}></div>
          </div>
          <div className={styles.headscarf}></div>
          <div className={styles.gem}></div>
          <div className={styles.backscarf}></div>
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
