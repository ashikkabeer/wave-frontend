"use client";
import { useState } from "react";
import Image from "next/image";
import AvatarComponent from "./avatar";
import { Heart, Send, MessageCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Cards() {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(false);
  const [shared, setShared] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = () => {
    setComment(!comment);
  };

  const handleShare = () => {
    setShared(!shared);
  };
  return (
    <div className="flex w-screen justify-center">
      <div className="w-screen px-7 md:px-0 md:w-1/2">
        <Card>
          <CardHeader>
            <div className="border-2 border-x-0 border-t-0 flex">
              <AvatarComponent />
              <div className="ml-3">
                <p className="font-medium m-0">Ashik Kabeer</p>
                <p className="text-sm m-0 pb-2">
                  Computer Science & Engineering
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-x-0 border-t-0">
              <p>
                Lost in the enchanting charm of Mountains! 🏞️ From the
                mesmerizing landscapes to the rich tapestry of local cultures,
                every moment felt like a dream. Each corner unveiled a new
                story, a new adventure. Gratitude fills my heart for this
                unforgettable experience. Highly recommend adding this gem to
                your travel bucket list! #TravelAdventures #DiscoverTheWorld
              </p>
              <div className="pic w-full h-full object-contain  animate-pop my-4">
                <Image
                  className="w-full h-full object-cover"
                  src="/card-image.png"
                  width={500}
                  height={500}
                  alt="the pic"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="mx-10 w-full flex justify-between">
              <button
                onClick={handleLike}
                className="relative overflow-hidden px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90"
              >
                <Heart color={`${liked ? "#ff0000" : "#000000"}`} />
              </button>
              <button className="relative overflow-hidden px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90">
                <MessageCircle color="#000000" />
              </button>
              <button className="relative overflow-hidden px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90">
                <Send color="#000000" />
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
