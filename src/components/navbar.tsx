"use client";
import { useRef, useState } from "react";
import Link from "next/link";
const MagneticTab = ({ item }: { item: { id: number; text: string } }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [hoverPosition, setHoverPosition] = useState({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;

    setHoverPosition({ x, y, opacity: 1 });
  };

  const onMouseOut = () => {
    setHoverPosition({ x: 0, y: 0, opacity: 0 });
  };

  return (
    <>
      <Link
        // href="/home"
        href={item.text.toLowerCase()}

        className="relative h-9"
        // onMouseMove={handleMouseMove}
        onMouseLeave={onMouseOut}
      >
        <span className="relative px-4 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 -- after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
          {item.text}
        </span>{" "}
        <div
          className="absolute h-full w-full rounded-[4px]transition-opacity bg-transparent"
          aria-hidden="true"
          style={{
            transform: `translate(${hoverPosition.x}px, ${hoverPosition.y}px)`,
            opacity: hoverPosition.opacity,
          }}
        />
      </Link>
    </>
  );
};

const tabs = [
  { id: 1, text: "Home" },
  { id: 2, text: "Rooms" },
  { id: 3, text: "Circle" },
];

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-row ">
        {tabs.map((item) => (
          <MagneticTab key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
