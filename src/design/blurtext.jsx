import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BlurText = ({
  text,
  delay = 100,
  animateBy = 'words',
  direction = 'top',
  className = '',
  onAnimationComplete,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });

  const parts = animateBy === 'letters' ? [...text] : text.split(' ');

  const directionMap = {
    top: { y: -20, opacity: 0 },
    bottom: { y: 20, opacity: 0 },
    left: { x: -20, opacity: 0 },
    right: { x: 20, opacity: 0 },
  };

  return (
    <div ref={ref} className={className}>
      {parts.map((part, index) => (
        <motion.span
          key={index}
          initial={directionMap[direction]}
          animate={inView ? { x: 0, y: 0, opacity: 1 } : directionMap[direction]}
          transition={{ delay: index * (delay / 1000), duration: 0.5 }}
          className="inline-block mr-1"
          onAnimationComplete={index === parts.length - 1 ? onAnimationComplete : undefined}
        >
          {part}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
