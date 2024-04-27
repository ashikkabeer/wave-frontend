"use client";
import Link from "next/link";
import Chat from "./chat";
import { CreateRoomButton } from "./createButton";
import { useEffect, useState } from "react";
export default function Room() {
  interface ChatProps {
    _id: string;
    title: string;
    description: string;
    mentor: string;
    author: string;
    batch: number;
    department: string;
    subject: string;
  }
  const [chatrooms, setChatrooms] = useState<ChatProps[]>([]);
  console.log(typeof chatrooms);

  useEffect(() => {
    const batch = 2021;
    const department = "cse";
    const fetchChatrooms = async () => {
      try {
        console.log("fetching");
        console.log(localStorage.getItem("access_token"));
        const response = await fetch(`http://localhost:3000/chat/get`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch chatrooms");
        }
        const data = await response.json();
        setChatrooms(data.chat);
        console.log(data);
      } catch (error) {
        console.error("Error fetching chatrooms:", error);
      }
    };
    fetchChatrooms();
  }, []);
  return (
    <main className="w-screen flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="md:w-2/4 w-screen px-4 md:px-0 flex justify-center flex-col gap-3">
          <div className="w-full flex justify-end">
            <CreateRoomButton />
          </div>
          {/* <Link className="" href={`room/${params}`}> */}
          {chatrooms.map((chatroom) => (
            <Link className="" href={`room/${chatroom._id}`} key={chatroom._id}>
              <Chat {...chatroom} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
