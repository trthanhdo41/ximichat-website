import React, { useState, useEffect, useRef } from 'react';

const TypeWriter = ({ 
  text, 
  speed = 50, 
  delay = 1000, 
  className = '',
  showCursor = true,
  cursorChar = '|'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);
  const typewriterRef = useRef();
  const timeoutRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    // Start typing after delay
    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, speed);

      intervalRef.current = typeInterval;
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, speed, delay]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;

    const cursorInterval = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  return (
    <span ref={typewriterRef} className={`typewriter ${className}`}>
      {displayText}
      {showCursor && (isTyping || showCursorState) && (
        <span className="typewriter-cursor">{cursorChar}</span>
      )}
    </span>
  );
};

export default TypeWriter;