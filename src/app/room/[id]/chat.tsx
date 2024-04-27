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
const socket = io('http://localhost:3000');

interface ChatProps {
  messages: Message[];
  currentUser: string;
  sendMessage: (message: string) => void;
}
interface Message {
  id: string;
  author: string;
  content: string;
  role: string;
  createdAt: Date;
}
export default function Chat({id}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Retrieve chat history when component mounts
    socket.emit('getChatHistory');
    socket.on('chatHistory', (history) => {
      setMessages(history);
    });

    // Listen for new messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Clean up event listeners when component unmounts
      socket.off('chatHistory');
      socket.off('message');
    };
  }, []);

  const handleMessageSend = async () => {
    // socket.emit('sendMessage', {
    //   sender: 'User', 
    //   content: newMessage,
    // });

    socket.emit('sendMessage', {
      chatId: id,
      username: 'syam',
      content: newMessage,
      role: 'faculty',
      createdAt: new Date(),
    });

    // Clear input field after sending message
    setNewMessage('');
  };
  // const handleLogout = () => {
  //   socket.disconnect();
  // };
  return (
    <div>
      <div className="w-full">
        {messages.map((message) => (
          <div
            key={message.id} className={`char-message ${ 'syam' === message.author ? "justify-end" : "" }`}
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
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          // onKeyDown={handleMessageSend}
        />
        <Button className="" onClick={handleMessageSend}>Submit</Button>
      </div>
    </div>
  );
}
