"use client";
import { useState, useEffect } from "react";
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

// const socket = io("http://localhost:3000");
const socket = io(BASE_URL);

// interface ChatProps {
//   messages: Message[];
//   currentUser: string;
//   sendMessage: (message: string) => void;
// }
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

  useEffect(() => {
    // Retrieve chat history when component mounts
    const fetchCurrentUser = async () => {
      let token;
      if (typeof localStorage !== "undefined") {
        token = localStorage.getItem("access_token");
      } else {
        console.log("localStorage is not available.");
      }
      const username = await fetch(BASE_URL + "/user/me", {
        method: "GET",
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
      //get all the tokens mapped to this chatroom
      const response = await fetch(BASE_URL + `/chat/${id}`, {
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

    getToken(messaging, {
      vapidKey:
        "BCHgGR0weZ4iq8JHpkgFqwsc-9C047OW7ifIWFz5UAB-J173Fd9JrE-SZP0jo-dHu9lPb1Rn17Vy0BEdTEEPPb8",
    }).then(async (currentToken) => {
      if (currentToken) {
        const fcmTokens = currentToken;
        const response = await fetch(BASE_URL + `/chat/tokens`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({ fcmTokens, chatroomId: id }),
        });
        const res = await response.json();
        console.log("current token for client: ", currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        requestPermission();
      }
    });
    onMessage(messaging, (payload) => {
      console.log("Message received.", payload);
    });
    const getChatHistory = async () => {
      const history = await fetch(BASE_URL + `/chat/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const res = await history.json();
      setMessages(res.messages);
    };

    // Listen for new messages
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    getUsersTokens();
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
      createdAt: new Date(),
    });
    //send notification logic
    const message = {
      topic: id,
      notification: {
        body: currentUser + "has sent a message",
        title: "New Message from Wave",
      },
      //get the tokens from the backend
      tokens: ["token1", "token2"],
    };

    setNewMessage("");
  };
  // const handleLogout = () => {
  //   socket.disconnect();
  // };
  return (
    <div>
      <div className="w-full">
        {messages.map((message) => (
          <div
            key={message.userId}
            className={`flex ${
              message.username === currentUser ? "justify-end bg-red" : ""
            }`}
          >
            <div className="w-3/4">
              <Card className="rounded mb-4">
                <CardHeader className="my-0 py-0">
                  <span className="italic pt-3 underline select-none font-medium text-primary">
                    {message.username}
                  </span>
                </CardHeader>
                <CardContent>
                  <div className="">
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
                      <p className="select-none text-sm">20:30s</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom-0 gap-3 flex justify-center w-2/4 fixed">
        <Input
          className="w-full"
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
