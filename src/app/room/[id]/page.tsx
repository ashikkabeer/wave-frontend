"use client";
import jwt from "jsonwebtoken";
import Image from "next/image";
import Chat from "./chat";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Room() {
  const pathname = usePathname();
  const id = pathname.replace(/^\/room\//, "");
  return (
    <div className="w-screen flex justify-center my">
      <div className=" w-full px-10 md:w-1/2 h-screen">
        <div className="h-full gap-2 flex flex-col my-10">
          <Chat id={id}/>
          <div className="fixed flex w-full justify-center gap-2 bottom-0"></div>
        </div>
      </div>
    </div>
  );
}
