'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Chat() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>What is the best book to learn computer graphics?</CardTitle>
          <CardDescription>Computer Graphics</CardDescription>
        </CardHeader>
        <CardContent>
          <p>To learn about computer graphics</p>
        </CardContent>
        <CardFooter>
          <p>50+messages</p>
        </CardFooter>
      </Card>
    </div>
  );
}
