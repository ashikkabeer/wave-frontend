import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// {
//     "title": "Is FLAT easy?",
//     "description":"No i don't think so",
//     "mentor": "Salitha",
//     "author": "Ashik Kabeer",
//     "semester": 6,
//     "department": "CSE",
//     "subject": "FLAT"
// }
export function CreatePostForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upload Post</CardTitle>
        <CardDescription>Upload post in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input id="name" placeholder="enter a title for your post" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Description</Label>
              <Input
                id="name"
                placeholder="enter your description for your post."
              />
            </div>
            <Label htmlFor="name">Select image to upload</Label>
            <Input type="file"/>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" className="w-full">Upload</Button>
      </CardFooter>
    </Card>
  );
}
