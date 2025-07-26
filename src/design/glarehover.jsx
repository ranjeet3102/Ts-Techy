import React, { useRef } from 'react';
const GlareHover = ({
  width = "100%", 
  height = "100%", 
  background = "#FFFFFF",
  borderRadius = "16px", 
  borderColor = "rgba(0,0,0,0.1)", 
  children,
  glareColor = "#ffffff", 
  glareOpacity = 0.5,
  glareAngle = -30, 
  glareSize = 400, 
  transitionDuration = 400,
  playOnce = false,
  className = "",
  style = {},
}) => {
  const overlayRef = useRef(null);
  const hexToRgba = (hex, opacity) => {
    hex = hex.replace("#", "");
    if (/^[\dA-Fa-f]{6}$/.test(hex)) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return hex; 
  };

  const rgba = hexToRgba(glareColor, glareOpacity);
  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = "none"; 
    el.style.backgroundPosition = "-100% -100%, 0 0";
    el.offsetHeight; 
    el.style.transition = `${transitionDuration}ms ease`; 
    el.style.backgroundPosition = "100% 100%, 0 0"; 
  };


  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;

    if (playOnce) {
      el.style.transition = "none";
      el.style.backgroundPosition = "-100% -100%, 0 0";
    } else {
      el.style.transition = `${transitionDuration}ms ease`;
      el.style.backgroundPosition = "-100% -100%, 0 0";
    }
  };

 
  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
      hsla(0,0%,0%,0) 40%,
      ${rgba} 50%,
      hsla(0,0%,0%,0) 60%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%, 0 0", 
    pointerEvents: "none", 
    borderRadius: borderRadius, 
  };

  return (
    <div
      className={`relative grid place-items-center overflow-hidden border cursor-pointer transition-shadow duration-300 hover:shadow-2xl ${className}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style,
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;