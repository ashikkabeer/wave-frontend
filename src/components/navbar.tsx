"use client";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
const MagneticTab = ({ item }: { item: { id: number; text: string } }) => {
  const router = useRouter();
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
  // router.push();
  return (
    <>
      <Link
        // href="/home"
        href={"/" + item.text.toLowerCase()}
        className="relative h-9"
        // onMouseMove={handleMouseMove}
        onMouseLeave={onMouseOut}
      >
        <span className="relative px-4 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 -- after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
          {item.text}
        </span>{" "}
        <div
          className="absolute h-full w-full rounded-[4px] transition-opacity"
          aria-hidden="true"
          style={{
            backgroundColor: "transparent",
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
  { id: 2, text: "Room" },
  { id: 3, text: "Event" },
];

export default function NavBar() {
  const router = useRouter();
  function handleLogout() {
    // Remove the token from local storage
    localStorage.removeItem("access_token");

    router.push("/auth");
  }
  const pathname = usePathname();
  if (pathname != "/auth" && pathname != "/") {
    return (
      <div className="flex">
        <div className="flex flex-row ">
          {tabs.map((item) => (
            <MagneticTab key={item.id} item={item} />
          ))}
        </div>
        <div className="button">
          <Button variant={"link"} onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    );
  }
  return null;
}
