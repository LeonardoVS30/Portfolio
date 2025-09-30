import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
  inView?: boolean;
  inViewOnce?: boolean;
  inViewMargin?: string;
  className?: string;
  onComplete?: () => void;
}

export function TypingText({
  text,
  delay = 0,
  speed = 100,
  inView = false,
  inViewOnce = true,
  inViewMargin = '0px',
  className = '',
  onComplete
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(!inView);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Intersection Observer para detectar cuando el elemento está en vista
  useEffect(() => {
    if (!inView) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (inViewOnce && hasAnimated) {
            observer.disconnect();
          }
        }
      },
      {
        rootMargin: inViewMargin,
      }
    );

    const element = document.getElementById('typing-text-container');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [inView, inViewMargin, inViewOnce, hasAnimated]);

  // Efecto de typing
  useEffect(() => {
    if (!isVisible || (inViewOnce && hasAnimated)) {
      return;
    }

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setHasAnimated(true);
        onComplete?.();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay, speed, isVisible, inViewOnce, hasAnimated, onComplete]);

  // Reset cuando cambia el texto
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setHasAnimated(false);
  }, [text]);

  return (
    <span
      id="typing-text-container"
      className={className}
    >
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}
