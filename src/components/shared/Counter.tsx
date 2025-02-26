import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  targetNumber?: number;
  duration?: number;
  percentage?:boolean;
}

const Counter: React.FC<CounterProps> = ({ targetNumber = 1000, duration = 2000,percentage }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true }); 

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = targetNumber / (duration / 16.67);
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16.67);

    return () => clearInterval(interval);
  }, [isInView, targetNumber, duration]);

  return (
    <div ref={ref} className="text-2xl font-bold mb-2">
      {count.toLocaleString()}{percentage && '%'}
    </div>
  );
};

export default Counter;