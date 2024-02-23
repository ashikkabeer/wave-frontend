'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function AvatarComponent() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
