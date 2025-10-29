import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({
  endValue,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect(); // stop observing once triggered
        }
      },
      { threshold: 0.2 }, // smoother trigger
    );

    const element = counterRef.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    const startValue = 0;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth acceleration/deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);

      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, endValue, duration]);

  return (
    <div
      ref={counterRef}
      className={`transition-all duration-300 ease-in-out opacity-0 translate-y-2 scale-95 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : ""
      } ${className}`}
      style={{
        willChange: "opacity, transform",
      }}
    >
      {prefix}
      {currentValue.toLocaleString()}
      {suffix}
    </div>
  );
};

export default AnimatedCounter;
