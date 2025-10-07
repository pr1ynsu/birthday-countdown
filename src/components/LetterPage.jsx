import { useEffect, useState } from "react";

function LetterPage() {
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [slidePage, setSlidePage] = useState(false);

  const paragraphs = [
    `Hey, I’ve been thinking about us lately, and honestly, I’m just really happy we met.
You seriously changed so much for me  brought light into my world when I didn’t even realize how much I needed it.`,
    `Thank you. That word feels small compared to what you’ve done.
Remember those tough times? You were always there.
Not just standing by, but actually taking care of things  taking care of me.
Your patience, your strength... I leaned on that completely, and I’ll never forget it.`,
    `You’re such a kind, strong, and genuine person.
I really wish you the best life ahead  good health, success, and endless peace and happiness.`,
    `Since it’s your special day, I wanted to share this beautiful poem by Emily Dickinson.
It reminds me of your spirit and how you always carry hope no matter what:
“Hope is the thing with feathers” - By Emily Dickinson`,
    `Hope is the thing with feathers
    That perches in the soul
    And sings the tune without the words
    And never stops at all
    And sweetest in the Gale is heard
    And sore must be the storm
    That could abash the little Bird
    That kept so many warm
    I’ve heard it in the chillest land
    And on the strangest Sea
    Yet, never, in Extremity,
    It asked a crumb—of me.`,
    `Happy Birthday :)
Hope this year brings you all the love, joy, and everything good you deserve.
You truly deserve the best.`
  ];

  // Reveal paragraphs one by one
  useEffect(() => {
    if (visibleParagraphs < paragraphs.length) {
      const timeout = setTimeout(() => {
        setVisibleParagraphs(visibleParagraphs + 1);
      }, 700); // adjust speed of reveal
      return () => clearTimeout(timeout);
    } else {
      // After full reveal, slide page down to show arrow
      setTimeout(() => setSlidePage(true), 500);
      setTimeout(() => setShowArrow(true), 1200); // arrow appears after slide
    }
  }, [visibleParagraphs]);

  const handleArrowClick = () => {
    setShowArrow(false);
    setShowOptions(true);
  };

  const goToCards = () => {
    window.location.href = "https://gift-seven-lake.vercel.app/cards";
  };

  const goToBouquet = () => {
    window.location.href = "https://gift-seven-lake.vercel.app/bouquet";
  };

  return (
    <section className="letter-page h-screen w-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 glass" />

      {/* Letter Box */}
      <div
        className={`relative z-10 max-w-4xl w-[90%] p-10 rounded-3xl letter-box transition-all duration-1000 ${
          slidePage ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="letter-content space-y-6">
          {paragraphs.slice(0, visibleParagraphs).map((para, idx) => (
            <p key={idx} className="fade-paragraph">{para}</p>
          ))}
        </div>

        {/* Floating Arrow */}
        {showArrow && !showOptions && (
          <div
            onClick={handleArrowClick}
            className="floating-arrow mt-6 cursor-pointer"
          >
            ⬇️
          </div>
        )}

        {/* Options Page */}
        {showOptions && (
          <div className="flex justify-center gap-10 mt-6 fade-in">
            <button className="option-btn" onClick={goToCards}>
              💫 Cards
            </button>
            <button className="option-btn" onClick={goToBouquet}>
              🌸 Bouquet
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default LetterPage;
