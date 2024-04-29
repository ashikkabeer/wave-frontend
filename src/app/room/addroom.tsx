"use client";

import * as React from "react";
import { useState } from "react";
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
import { FormEvent } from "react";
import BASE_URL from "../../../BASE_URL";

export function AddRoomForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mentor: "",
    subject: "",
  });

  const handleValueChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      console.log(event.defaultPrevented);

      const formData = new FormData(event.currentTarget);
      console.log("formData", formData);

      const values = Object.fromEntries(formData.entries());

      console.log("values", JSON.stringify(values));
      const response = await fetch(BASE_URL+"/chat/create", {
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
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create Room</CardTitle>
        <CardDescription>Create your room in one-click.</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                onChange={(e) =>
                  handleValueChange(e.target.name, e.target.value)
                }
                id="title"
                name="title"
                placeholder="What is resolution?"
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
                placeholder="I'm learning about resolution."
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mentor">Mentor</Label>
              <Select
                name="mentor"
                onValueChange={(value) => handleValueChange("mentor", value)}
              >
                <SelectTrigger id="mentor">
                  <SelectValue placeholder="choose mentor" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="salitha">Salitha M K</SelectItem>
                  <SelectItem value="Usha">Usha</SelectItem>
                  <SelectItem value="Harsha">Harsha</SelectItem>
                  <SelectItem value="Deepa">Deepa</SelectItem>
                  <SelectItem value="Giri">Giri</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subject">Course</Label>
              <Select
                name="subject"
                onValueChange={(value) => handleValueChange("subject", value)}
              >
                <SelectTrigger id="subject">
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
