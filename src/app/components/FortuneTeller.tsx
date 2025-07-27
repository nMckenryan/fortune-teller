"use client";
import VoiceBoxSays from "./Voicebox";
import { useState } from "react";
import styles from "./FortuneTeller.module.css";

const FortuneTeller = () => {
  const [isTalking, setIsTalking] = useState(false);
  const [fortune, setFortune] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const fortunes: string[] = [
    "They are coming",
    "I feel Sick, I feel Sick, I feel Sick, I feel Sick",
    "You have a shrewd knack for spotting insincerity.",
    "Help Me",
    "You will assume a new form",
    "An inch of time is an inch of gold.",
    "Because you demand more from yourself, others respect you deeply.",
    "Happy life is just in front of you.",
    "It’s not the amount of time you devote, but what you devote to the time that counts.",
    "You are loved.",
    "It's there. It's Always been there.",
    "Flesh Twists and Bones Crack",
    "I have no mouth and I must scream",
    "You will die eventually. So make the most of it.",
    "Don't take the left path",
    "A new adventure awaits you",
    "Good things are coming your way",
    "An old friend will reappear",
    "A surprise is heading your direction",
    "A man will arrive at your residence in the dead of night. You will not see him coming.",
    "God is here",
    "A change is coming your way",
    "Expect a surprise in your life",
    "A new opportunity is arising",
    "A good time is ahead",
    "Watch your back",
    "Oh No, Oh No, Oh No, OH NO NO NO",
    "Something is happening soon",
    "A new journey is beginning",
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
  ];

  //3 words = 1 second for each word.
  const convertWordsToSeconds = (words: string) => {
    const wordSplit: string[] = words.split(" ");
    const seconds = Math.ceil(wordSplit.length / 3);
    return seconds * 1000;
  };

  const playSound = () => {
    setTimeout(() => {
      const audio = new Audio("/sounds/door.mp3");
      audio.play();
    }, 3500);
  };

  const getRandomFortune = () => {
    setIsThinking(true);
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selected = fortunes[randomIndex];
    setTimeout(() => {
      setFortune(selected);
      setIsThinking(false);
      VoiceBoxSays(selected);
      setIsTalking(true);
      if (selected === "They are coming") {
        playSound();
      }
      setTimeout(() => {
        setIsTalking(false);
      }, convertWordsToSeconds(selected));
    }, 1000);
  };

  return (
    <div>
      <div className={styles.fortuneTeller}>
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
                <div className={styles.iris} style={{ width: "13px" }}></div>
              </div>
            </div>
            <div className={styles.mouth}></div>
          </div>
          <div className={styles.headscarf}></div>
          <div className={styles.gem}></div>
          <div className={styles.backscarf}></div>
          <div className={styles.shawl}></div>
        </div>

        <div
          className={`${styles.crystalBall} ${isTalking ? styles.glowing : ""}`}
        >
          {fortune && (
            <div
              className={`${styles.fortuneText} ${
                isThinking ? styles.hidden : ""
              }`}
              style={{ fontFamily: "'Night Wicked', sans-serif" }}
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

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className={`px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors 
            ${isThinking ? "animate-pulse-slow" : ""}`}
            onClick={getRandomFortune}
            disabled={isThinking || isTalking}
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
