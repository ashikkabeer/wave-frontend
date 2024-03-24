import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// {
//     "title": "Is FLAT easy?",
//     "description":"No i don't think so",
//     "mentor": "Salitha",
//     "author": "Ashik Kabeer", 
//     "semester": 6,
//     "department": "CSE",
//     "subject": "FLAT"
// }
export function AddRoomForm() {
  return (
    <Card className= "w-full">
      <CardHeader>
        <CardTitle>Create Room</CardTitle>
        <CardDescription>Create your room in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input id="name" placeholder="What is nanomaterials?" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Description</Label>
              <Input id="name" placeholder="Hey all. Join and lets learn about nanomaterials." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mentor">Mentor</Label>
              <Select>
                <SelectTrigger id="mentor">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="salitha">Salitha M K</SelectItem>
                  <SelectItem value="Usha">Usha</SelectItem>
                  <SelectItem value="Harsha">Harsha</SelectItem>
                  <SelectItem value="Deepa">Deepa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Course">Course</Label>
              <Select>
                <SelectTrigger id="Course">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="AAD">AAD</SelectItem>
                  <SelectItem value="CGIP">CGIP</SelectItem>
                  <SelectItem value="CD">CD</SelectItem>
                  <SelectItem value="Python">Python</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="px-4">Create</Button>
      </CardFooter>
    </Card>
  )
}
