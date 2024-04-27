"use client";
import { FormEvent } from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
export function SignUp() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      console.log(event.defaultPrevented);

      const formData = new FormData(event.currentTarget);
      console.log("formData", formData);

      const values = Object.fromEntries(formData.entries());

      console.log("values", JSON.stringify(values));
      const response = await fetch("http://localhost:3000/auth/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(values),
      });

      // Handle response if necessary
      const data = await response.json();
      if (data) {
        window.location.replace("/home");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={""}>
      <div className={""}>
        <form className=" flex flex-col space-y-1" onSubmit={onSubmit}>
          <label htmlFor="username" className="flex flex-col">
            Username:{" "}
            <Input
              className="input"
              type="text"
              name="username"
              placeholder="username"
            />
          </label>
          <label htmlFor="name" className="flex flex-col">
            Name:{" "}
            <Input
              className="input"
              type="text"
              name="name"
              placeholder="name"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            Email:{" "}
            <Input
              className="input"
              type="email"
              name="email"
              placeholder="email"
            />
          </label>
          <label htmlFor="password" className="flex flex-col">
            Password:{" "}
            <Input
              className="input"
              type="password"
              name="password"
              placeholder="password"
            />
          </label>
          <label htmlFor="gender" className="flex flex-col">
            Gender
            <select className="input" name="gender">
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </label>
          <Button
            className=""
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}
