"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
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
import { FormEvent, useEffect } from "react";
import BASE_URL from "../../../BASE_URL";

export function AddRoomForm() {
  const [eventDate, setEventDate] = useState<Date | undefined>(new Date());
  interface Mentors {
    id: string;
    name: string;
  }
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
    venue: "",
  });
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      formData.append("date", eventDate?.toISOString() || "");
      console.log("formData", formData);
      const formDataCopy = { ...formData }; // Make a copy of formData

      const values = Object.fromEntries(formData.entries());

      console.log("values", JSON.stringify(values));
      const response = await fetch(BASE_URL + "/event/create", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.log(error);
    }
  }
  const handleValueChange = (name: string, value: string) => {
    if (name === "date") {
      const dateValue = new Date(value);
      setEventDate(dateValue);
      setFormData((prevState) => ({
        ...prevState,
        date: dateValue.toISOString(), // Update the date value in formData
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create Event</CardTitle>
        <CardDescription>Host an event in one-click.</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                onChange={(e) =>
                  handleValueChange(e.target.name, e.target.value)
                }
                id="name"
                name="name"
                placeholder="type the name of your event"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                name="description"
                onChange={(e) =>
                  handleValueChange(e.target.name, e.target.value)
                }
                id="description"
                placeholder="write more about your event here."
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">location</Label>
              <Input
                name="location"
                onChange={(e) =>
                  handleValueChange(e.target.name, e.target.value)
                }
                id="location"
                placeholder="where is the event happening?"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full">
                    {eventDate
                      ? format(eventDate, "dd/MM/yyyy")
                      : "Select Date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={eventDate}
                    onSelect={(date) => setEventDate(date)}
                    onDayKeyDown={(date) => {
                      setEventDate(date);
                    }}
                    disabled={(date) => date < new Date() || date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button type="submit" className="px-4">
            Create
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
