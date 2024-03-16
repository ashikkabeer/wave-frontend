'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function AvatarComponent(user: any) {
  return (
    <Avatar>
      <AvatarImage src={user.image} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
