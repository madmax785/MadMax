"use client";

import { useEffect, useState, useCallback, useRef } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsTouchDevice(hasTouch || isSmallScreen);
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setTrailPosition(prev => ({
        x: lerp(prev.x, position.x, 0.15),
        y: lerp(prev.y, position.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position, isTouchDevice]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('[data-clickable]') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleHoverCheck);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleHoverCheck);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isTouchDevice, handleMouseMove]);

  if (isTouchDevice) return null;

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Ana Nokta - Gradient Dot */}
      <div
        className="pointer-events-none fixed z-[10001]"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : isHovering ? 1.8 : 1})`,
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease',
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: isHovering 
              ? 'linear-gradient(135deg, #0071e3 0%, #00c6ff 100%)' 
              : 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
            boxShadow: isHovering
              ? '0 0 20px rgba(0, 113, 227, 0.8), 0 0 40px rgba(0, 113, 227, 0.4)'
              : '0 0 12px rgba(168, 85, 247, 0.6), 0 0 24px rgba(236, 72, 153, 0.3)',
            transition: 'background 0.3s ease, box-shadow 0.3s ease',
          }}
        />
      </div>

      {/* Takip Eden Halka */}
      <div
        className="pointer-events-none fixed z-[10000]"
        style={{
          left: trailPosition.x,
          top: trailPosition.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? (isHovering ? 1 : 0.7) : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          style={{
            width: isHovering ? 48 : 36,
            height: isHovering ? 48 : 36,
            borderRadius: '50%',
            border: isHovering 
              ? '2px solid rgba(0, 113, 227, 0.6)' 
              : '1.5px solid rgba(168, 85, 247, 0.4)',
            background: isHovering 
              ? 'radial-gradient(circle, rgba(0, 113, 227, 0.1) 0%, transparent 70%)'
              : 'transparent',
            transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
      </div>
    </>
  );
}
