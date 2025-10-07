import { useEffect, useState } from "react";

export default function Countdown({ seconds = 60, onFinish }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onFinish?.();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onFinish]);

  return (
    <div className="overflow-hidden h-[100px] flex justify-center items-center">
      <div
        key={timeLeft}
        className="text-7xl md:text-9xl font-extrabold text-gray-800 transition-all duration-500 ease-in-out animate-slide"
      >
        {timeLeft}
      </div>
    </div>
  );
}
