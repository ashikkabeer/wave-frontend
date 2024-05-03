"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AvatarComponent from "./avatar";
import { Heart, Send, MessageCircle } from "lucide-react";
import BASE_URL from "../../BASE_URL";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Cards({ data }: { data: any }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setlikeCount] = useState(data.upvotes);

  const [comment, setComment] = useState(false);
  const [shared, setShared] = useState(false);

  const handleLike = async (id: string) => {
    setLiked(!liked);
    setlikeCount(liked ? likeCount - 1 : likeCount + 1);
    const res = await fetch(BASE_URL + `/post/${id}/like`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      mode: "cors",
      method: "POST",
      body: JSON.stringify({ post_id: data.id }),
    });
  };

  const handleComment = () => {
    setComment(!comment);
  };

  const handleShare = () => {
    setShared(!shared);
  };
  return (
    <div className="flex w-screen justify-center my-5">
      <div className="w-screen px-7 md:px-0 md:w-1/2">
        <Card className="bg-purple-100">
          <CardHeader className="">
            <div className="border-2 border-x-0 border-t-0 flex">
              {/* <AvatarComponent user={{ image: data.avatar }} /> */}
              <div className="ml-3">
                <p className="font-medium m-0">{data.title}</p>
                <p className="text-sm m-0 italic pb-2">{data.date}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border-2 italic border-x-0 border-t-0">
              <p>{data.description}</p>
              {data.image && (
                <div className="pic w-full h-full object-contain  animate-pop my-4">
                  <Image
                    className="w-full h-full object-cover"
                    src={data.image}
                    width={500}
                    height={500}
                    alt={data.title}
                  />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <div className="mx-5 w-full flex justify-center">
              <button
                onClick={() => handleLike(data.id)}
                className="relative overflow-hidden px-5 text-black dark:text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90"
              >
                <div className="flex gap-2">
                  <Heart color={`${liked ? "#ff0000" : "#000000"}`} />{" "}
                  {likeCount}
                  <p className=""></p>
                </div>
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
