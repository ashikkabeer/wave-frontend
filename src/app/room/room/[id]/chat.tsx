"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef, useState,useEffect } from "react";
import {io} from "socket.io-client"

const SystemMessage = {
  id:1,
  body:"Welcome to wave",
  author:"Bot",
  createdAt: new Date().setFullYear(2021, 10, 10)
}
const socket = io('http://localhost:3000');
// const socket = io('http://localhost:3000', { autoConnect: false });
interface ChatProps {
  currentUser: string; // Adjust the type according to your needs
}
export default function Chat({ currentUser }: ChatProps) {
  const dummy = useRef();
  const [inputValue, setinputValue] = useState("");
  const [messages, setMessages] = useState([SystemMessage]);

  useEffect(()=> {
    socket.connect();

    socket.on("connect",() => {
      console.log("Socket connected");
    })
    socket.on("disconnect",() => {
      console.log("Socket disconnected");
    })

    socket.on("createMessage",(newMessage) => {
      setMessages((previousMessages) => [...previousMessages,newMessage])
    })
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("createMessage");
    }
  },[]);

  const handleSendMessage = (e) => {
    if(e.key != "Enter" || inputValue.trim().length ===0 )return;
console.log(e.target.value)
    socket.emit("createMessage", {author:"ashik",content:inputValue.trim()});
    setinputValue("");
  };
  const handleLogout = () => {
    socket.disconnect();
  }

  // const sendMessage = async (e: any) => {
  //   e.preventDefault();

  //   setinputValue("");
  //   // dummy.current.scrollIntoView({ behavior: 'smooth' });
  // };
  return (
    <div>
      <div className="chat">
      {messages.map((message, idx) => (
        <div
        key={idx}
        className={`char-message ${
          currentUser === message.author ? "outgoing" : ""
        }`}
        >
        <div className="chat-message-wrapper">
          <span className="chat-message-author">{message.author}</span>
          <div className="chat-message-bubble">
            <span className="chat-message-body">{message.body}</span>
          </div>
        </div>
        </div>
      ))}
    </div>
    <div className="chat-composer">
      <input
      type="text"
      placeholder="enter to send a message"
      value={inputValue}
      onChange={(e) => setinputValue(e.target.value)}
      onKeyDown={handleSendMessage}
      />
    </div>
    </div>
  );
}
