"use client";
import { useRef, useState, useEffect } from "react";
import { io } from "socket.io-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SystemMessage = {
  id: 1,
  content: "Welcome to the chat!",
  author: "Creator",
  createdAt: new Date().setFullYear(2021, 10, 10),
};
const socket = io("http://localhost:3000");
interface ChatProps {
  currentUser: string; // Adjust the type according to your needs
}
export default function Chat({ currentUser }: ChatProps) {
  const dummy = useRef();
  const [inputValue, setinputValue] = useState("");
  const [messages, setMessages] = useState([SystemMessage]);

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Socket connected");
    });
    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    socket.on("createMessage", (newMessage) => {
      setMessages((previousMessages) => [...previousMessages, newMessage]);
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("createMessage");
    };
  }, []);

  const handleSendMessage = (e) => {
    if (e.key != "Enter" || inputValue.trim().length === 0) return;
    console.log(e.target.value);
    socket.emit("createMessage", {
      author: "ashik",
      content: inputValue.trim(),
    });
    setinputValue("");
  };
  const handleLogout = () => {
    socket.disconnect();
  };
  return (
    <div>
      <div className="w-full">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`char-message ${
              currentUser === message.author ? "justify-end" : ""
            }`}
          >
            <div className="w-3/4">
              <Card className="border-0 shadow-md  rounded-sm mt-2">
                <CardHeader className="my-0 py-0">
                  <span className="italic select-none font-medium text-primary">
                    {message.author}
                  </span>
                </CardHeader>
                <CardContent>
                  <div className="">
                    <span className="">{message.content}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end py-0">
                  <p className="select-none text-sm">20:10</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-0 gap-3 flex justify-center w-2/4 fixed">
        <Input className="w-full"
          type="text"
          placeholder="type message here"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          onKeyDown={handleSendMessage}
        />
        <Button className="" onClick={handleSendMessage}>Submit</Button>
      </div>
    </div>
  );
}
