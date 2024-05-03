"use client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useState } from "react";
import BASE_URL from "../../../BASE_URL";
import { RotateSpinner } from "react-spinners-kit";
export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      setLoading(true);
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      console.log("formData", formData);
      const values = Object.fromEntries(formData.entries());
      console.log("values", JSON.stringify(values));
      const response = await fetch(BASE_URL + "/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        alert("Invalid username or password");
      }

      // Handle response if necessary
      const data = await response.json();
      if (data.access_token) {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("access_token", data.access_token);
        } else {
          console.log("localStorage is not available.");
        }
        router.push("/home");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
            Login
          </Button>
        </form>
        {loading && (
          <div className="flex justify-center items-center">
            <RotateSpinner size={50} color="#A020F0" loading={loading} />
          </div>
        )}
      </div>
    </div>
  );
}
