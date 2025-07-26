import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const TextType = ({
  text = [],
  typingSpeed = 100,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = '|',
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0 }); // Triggers when it just enters viewport

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);


  useEffect(() => {
    if (inView) {
      setCurrentText('');
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [inView]);

  useEffect(() => {
    let timeout;

    if (inView && isTyping) {
      const fullText = text[currentIndex];
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else if (inView && !isTyping && currentText.length === text[currentIndex]?.length) {
      timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex((prev) => (prev + 1) % text.length);
        setIsTyping(true);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [inView, currentText, isTyping, currentIndex, text, typingSpeed, pauseDuration]);

  return (
    <h2
  ref={ref}
  className="text-4xl md:text-8xl lg:text-[50px] pb-6 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-300">
  {currentText}
  {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
</h2>
  );
};

export default TextType;
