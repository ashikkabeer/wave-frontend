"use client";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getToken, onMessage, getMessaging } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import BASE_URL from "../../../../BASE_URL";
const firebaseConfig = {
  apiKey: "AIzaSyDrxHqeHGC7gKq777j24UhTh870pLRsXR8",
  authDomain: "wave-miniproject.firebaseapp.com",
  projectId: "wave-miniproject",
  storageBucket: "wave-miniproject.appspot.com",
  messagingSenderId: "490374393617",
  appId: "1:490374393617:web:38e13981d78346d7ac26b0",
  measurementId:
    "BCHgGR0weZ4iq8JHpkgFqwsc-9C047OW7ifIWFz5UAB-J173Fd9JrE-SZP0jo-dHu9lPb1Rn17Vy0BEdTEEPPb8",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const socket = io(BASE_URL);
import { Badge } from "@/components/ui/badge";

interface Message {
  userId: string;
  username: string;
  content: string;
  role: string;
  createdAt: Date;
}
export default function Chat({ id }: { id: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [currentRole, setCurrentRole] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [subscribedUser, setSubscribedUser] = useState(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const chatWindow = chatWindowRef.current;
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    // Retrieve chat history when component mounts
    const fetchCurrentUser = async () => {
      let token;
      if (typeof localStorage !== "undefined") {
        token = localStorage.getItem("access_token");
      } else {
        console.log("localStorage is not available.");
      }
      console.log("token", token);
      const username = await fetch(BASE_URL + "/user/me", {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await username.json();
      setCurrentUser(res.username);
      setCurrentRole(res.role);
      setCurrentUserId(res.userId);
    };
    // -------------------//////////////////---------------
    const getUsersTokens = async () => {
      const response = await fetch(BASE_URL + `/chat/tokens/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const tokens = await response.json();
      setSubscribedUser(tokens);
    };
    const requestPermission = () => {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Unable to get permission to notify.");
        }
      });
    };

    // getToken(messaging, {
    //   vapidKey:
    //     "BCHgGR0weZ4iq8JHpkgFqwsc-9C047OW7ifIWFz5UAB-J173Fd9JrE-SZP0jo-dHu9lPb1Rn17Vy0BEdTEEPPb8",
    // }).then(async (currentToken) => {
    //   if (currentToken) {
    //     const fcmTokens = currentToken;
    //     const response = await fetch(BASE_URL + `/chat/tokens/`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    //       },
    //       body: JSON.stringify({ fcmTokens, chatroomId: id }),
    //     });
    //     const res = await response.json();
    //     console.log("current token for client: ", currentToken);
    //   } else {
    //     console.log(
    //       "No registration token available. Request permission to generate one."
    //     );
    //     requestPermission();
    //   }
    // });
    onMessage(messaging, (payload) => {
      console.log("Message received.", payload);
    });
    const getChatHistory = async () => {
      try {
        let token;
        if (typeof localStorage !== "undefined") {
          token = localStorage.getItem("access_token");
        } else {
          console.log("localStorage is not available.");
        }
        const history = await fetch(BASE_URL + `/chat/${id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (history.ok) {
          const res = await history.json();
          setMessages(res.messages);
        } else {
          setMessages([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Listen for new messages
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    // getUsersTokens();
    getChatHistory();
    fetchCurrentUser();
    return () => {
      // Clean up event listeners when component unmounts
      socket.off("chatHistory");
      socket.off("message");
    };
  }, [currentUser, currentRole, currentUserId, id, subscribedUser]);

  const handleMessageSend = async () => {
    socket.emit("sendMessage", {
      chatId: id,
      userId: currentUserId,
      username: currentUser,
      role: currentRole,
      content: newMessage,
      createdAt: new Date().getUTCMinutes(),
    });

    setNewMessage("");
  };
  // const handleLogout = () => {
  //   socket.disconnect();
  // };
  return (
    <div className="chat-container">
      <div className="w-full chat-window" ref={chatWindowRef}>
        {messages.length === 0 ? (
          <div className="">No Messages Available</div>
        ) : (
          messages.map((message) => (
            <div
              key={message.userId}
              className={`flex ${
                message.username === currentUser ? "justify-end" : ""
              }`}
            >
              <div className="w-3/4">
                <Card className="rounded mb-4">
                  <CardHeader className="my-0 py-0">
                    <span className="italic pt-3 underline select-none font-medium text-primary">
                      {message.username}
                      {""}
                      <Badge
                        variant="outline"
                        className={`ml-5 ${
                          message.role === "faculty"
                            ? "font-bold bg-primary text-white"
                            : "invisible"
                        }`}
                      >
                        {message.role}
                      </Badge>
                    </span>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`${
                        message.role === "faculty" ? "hover:bg-gray-100" : ""
                      }`}
                    >
                      {message.content
                        .split(/(https?:\/\/[^\s]+)/g)
                        .map((text, index) => {
                          if (text.match(/(https?:\/\/[^\s]+)/g)) {
                            return (
                              <a
                                className="text-blue-500 underline"
                                href={text}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {text}
                              </a>
                            );
                          } else {
                            return text;
                          }
                        })}
                      <div className="flex justify-end">
                        {/* <p className="select-none text-sm">{message.date}</p> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex mt-10 w-full"></div>
      <div className="bottom-0 gap-3 w-screen pt-5  bg-white flex flex-row fixed">
        <Input
          className="md:w-1/2 w-3/4"
          type="text"
          placeholder="type message here"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          // onKeyDown={handleMessageSend}
        />
        <Button className="" onClick={handleMessageSend}>
          Send
        </Button>
      </div>
    </div>
  );
}
