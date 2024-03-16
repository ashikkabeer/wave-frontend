'use client'

import { ShuffleIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

type EmojiProps = {
  position: Position;
  onComplete: () => void;
  children?: string;
};

const EMOJI_OPTIONS = ["🌈", "🌸", "🌍", "🥶", "🥵", "🦋"];
const MIN_DISTANCE_THRESHOLD = 40;

const EmojiContainer = ({ position, onComplete, children }: EmojiProps) => {
  const divControls = useAnimationControls();
  const { x, y } = position;
  const xDelta = Math.floor(Math.random() * 100) - 50;

  const variants = {
    end: {
      x: x + xDelta,
      y: y + 100,
      opacity: 0,
      scale: 0,
      rotate: 0,
      transition: {
        duration: 2.5,
      },
    },
  };

  useEffect(() => {
    if (!position) return;

    divControls.start("end").then(() => onComplete());
  }, []);

  return (
    <motion.div
      className="absolute"
      initial={{
        scale: 1,
        opacity: 1,
        x: position?.x,
        y: position?.y,
        rotate: "12deg",
      }}
      variants={variants}
      animate={divControls}
    >
      <span className="inline-block text-5xl">{children}</span>
    </motion.div>
  );
};

export default function CursorTrail () {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = React.useState(0);
  const [emojis, setEmojis] = useState<
    Array<{ id: string; position: Position }>
  >([]);
  const [emoji, setEmoji] = useState<string>("✨");
  const [isHoverTextVisible, setIsHoverTextVisible] = useState(true);

  const handleHover = () => {
    setIsHoverTextVisible(false);
  };

  const removeEmoji = (id: string) => {
    setEmojis((prevEmojis) => prevEmojis.filter((emoji) => emoji.id !== id));
  };

  const randomEmoji = () => {
    const otherEmojis = EMOJI_OPTIONS.filter((e) => e !== emoji);
    const randomIndex = Math.floor(Math.random() * otherEmojis.length);
    setEmoji(otherEmojis[randomIndex]);
  };

  const draw = (e: { clientX: number; clientY: number }) => {
    if (!containerRef.current) return;

    const div = containerRef.current;
    const rect = div.getBoundingClientRect();
    const position = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    const newEmoji = {
      id: `${index}-${position.x}-${position.y}`,
      position,
    };

    const lastPosition = emojis[index - 1]?.position;
    if (!lastPosition) {
      setIndex(1);
      setEmojis([newEmoji]);
      return;
    }

    const distance = Math.sqrt(
      Math.pow(position.x - lastPosition.x, 2) +
        Math.pow(position.y - lastPosition.y, 2)
    );

    if (distance < MIN_DISTANCE_THRESHOLD) return;

    setIndex((prev) => prev + 1);
    setEmojis((prevEmojis) => [...prevEmojis, newEmoji]);
  };

  const mouseMove = (e: { clientX: number; clientY: number }) => {
    if (!containerRef.current) return;

    draw(e);
  };

  return (
    <div
      className="relative h-[400px] w-full overflow-hidden"
      onMouseMove={mouseMove}
      onMouseOver={handleHover}
      ref={containerRef}
    >
      <div className="absolute left-4 top-3 z-10 cursor-pointer">
        <button
          className="bg-mauve inline-block h-4 w-4 rounded-sm text-sm active:scale-95"
          onClick={randomEmoji}
        >
          <ShuffleIcon className="h-4 w-4 text-mauve-light-12 transition active:scale-95 dark:text-mauve-dark-12" />
        </button>
      </div>
      {isHoverTextVisible && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="paragraph animate-pulse">Hover me</span>
        </div>
      )}
      <AnimatePresence>
        {emojis?.map(({ position, id }, _) => {
          return (
            <EmojiContainer
              key={id}
              position={position}
              onComplete={() => removeEmoji(id)}
            >
              {emoji}
            </EmojiContainer>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
