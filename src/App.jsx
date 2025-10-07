import { useRef, useState } from "react";
import Countdown from "./components/Countdown";
import LetterPage from "./components/LetterPage";
import "./App.css";

function App() {
  const secondPageRef = useRef(null);
  const [finished, setFinished] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleFinish = () => {
    setFinished(true);
    setTimeout(() => {
      secondPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  };

  const handleRevealClick = () => {
    setShowLetter(true);
    window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      {/* First Page */}
      <section
        className={`first-page-bg h-screen w-screen relative flex flex-col items-center justify-center text-center transition-all duration-700 ${
          finished ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="absolute inset-0 glass" />
        <div className="relative z-10 flex flex-col items-center space-y-6">
          <div className="emoji select-none">🤗✨</div>
          <Countdown seconds={60} onFinish={handleFinish} />
          <div className="text-lg md:text-xl text-gray-700 font-medium">
            minute left
          </div>
        </div>
      </section>

      {/* Second Page */}
      <section
        ref={secondPageRef}
        className="second-page-bg h-screen w-screen flex flex-col items-center justify-center relative"
      >
        <div className="absolute inset-0 glass" />
        <div className="relative z-10 flex flex-col items-center space-y-6 second-page-content">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 drop-shadow-sm">
            🎉 Happiest birthday Tia ! 🎉
          </h1>

          {/* 🎁 Reveal Button */}
          <button
            onClick={handleRevealClick}
            className="reveal-btn text-lg md:text-2xl font-medium"
          >
            Reveal 💌
          </button>
        </div>
      </section>

      {/* Letter Page */}
      {showLetter && <LetterPage />}
    </div>
  );
}

export default App;
