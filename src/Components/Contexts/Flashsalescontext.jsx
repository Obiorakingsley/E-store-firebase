import { createContext, useContext, useState, useEffect } from "react";

const FlashSaleContext = createContext();

export const FlashSaleProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 21,
    minutes: 18,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.hours < 1)
          return { hours: prev.hours + 12, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <FlashSaleContext.Provider value={timeLeft}>
      {children}
    </FlashSaleContext.Provider>
  );
};

export const useFlashSale = () => useContext(FlashSaleContext);
