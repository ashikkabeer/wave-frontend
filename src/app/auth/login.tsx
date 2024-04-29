"use client";
import { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import BASE_URL from "../../../BASE_URL";
import { redirect } from "next/navigation";
export default function SignIn() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      console.log(event.defaultPrevented);

      const formData = new FormData(event.currentTarget);
      console.log("formData", formData);

      const values = Object.fromEntries(formData.entries());

      console.log("values", JSON.stringify(values));
      const response = await fetch(BASE_URL+"/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(values),
      });

      // Handle response if necessary
      const data = await response.json();
      if (data.access_token) {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem("access_token", data.access_token);
        } else {
          console.log("localStorage is not available.");
        }
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
            <Input type="text" name="username" placeholder="username" />
          </label>

          <label htmlFor="password" className="flex flex-col">
            Password:{" "}
            <Input type="password" name="password" placeholder="password" />
          </label>

          <Button
            className="py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90"
            type="submit"
          >
            Signin
          </Button>
        </form>
      </div>
    </div>
  );
}
