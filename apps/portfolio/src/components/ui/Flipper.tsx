'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FlipperProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  onFlip?: () => unknown;
  flipped?: boolean;
  flippable?: boolean;
  hidden?: boolean;
}

const Flipper: React.FC<FlipperProps> = ({
  onFlip,
  flippable = true,
  hidden = false,
  flipped: flippedProp,
  frontContent,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hide, setHide] = useState(hidden);

  useEffect(() => {
    if (flippedProp !== undefined) {
      setIsFlipped(flippedProp);
    }
  }, [flippedProp]);

  useEffect(() => {
    setHide(hidden);
  }, [hidden]);

  const flip = () => {
    if (flippable) setIsFlipped((f) => !f);
    if (onFlip) onFlip();
  };

  const flipTo = (flipped: boolean) => {
    setIsFlipped(flipped);
  };

  return (
    <div
      className={cn(
        { invisible: hidden },
        `flip-container relative w-full h-full z-10 bg-background`,
      )}
      onClick={flip}
    >
      <div className={cn('flipper', { flip: isFlipped })}>
        <div className="front">{frontContent}</div>
        <div className="back">{backContent}</div>
      </div>
    </div>
  );
};

export default Flipper;
