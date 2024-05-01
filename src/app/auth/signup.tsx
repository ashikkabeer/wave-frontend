"use client";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import BASE_URL from "../../../BASE_URL";
export function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    batch: "",
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
      if (!values.email.toString().endsWith('@musaliar.edu')) {
        alert('Username must end with @musaliar.edu');
        return;
      }
      console.log("values", JSON.stringify(values));
      const response = await fetch(BASE_URL+"/auth/signup", {
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

      console.log(data.access_token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={""}>
      <div className={""}>
        <form className=" flex flex-col space-y-1" onSubmit={onSubmit}>
          <label htmlFor="name" className="flex flex-col">
            Name:
            <Input
              onChange={(e) => handleValueChange(e.target.name, e.target.value)}
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="username" className="flex flex-col">
            Username:{" "}
            <Input
              onChange={(e) => handleValueChange(e.target.name, e.target.value)}
              type="text"
              name="username"
              placeholder="Username"
            />
          </label>

          <label htmlFor="email" className="">
            Email:{" "}
            <Input
              onChange={(e) => handleValueChange(e.target.name, e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="password" className="flex flex-col">
            Password:{" "}
            <Input
              onChange={(e) => handleValueChange(e.target.name, e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>

          <label htmlFor="gender" className="flex flex-col">
            Gender:
            <Select name="gender">
              <SelectTrigger className="w-fill">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </label>
          <label htmlFor="role" className="flex flex-col">
            Who are you?
            <Select
              name="role"
              onValueChange={(value) => handleValueChange("role", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
              </SelectContent>
            </Select>
          </label>
          {formData.role === "student" && (
            <label htmlFor="batch" className="flex flex-col">
              Joining Year:
              <Select name="batch">
                <SelectTrigger className="w-fill">
                  <SelectValue placeholder="Batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
            </label>
          )}
          <label htmlFor="department" className="flex flex-col">
            Department:
            <Select name="department">
              <SelectTrigger className="w-fill">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Computer Science & Engineering">
                  Computer Science & Engineering
                </SelectItem>
                <SelectItem value="Electrical and Electronics Engineering">
                  Electrical and Electronics Engineering
                </SelectItem>
                <SelectItem value="Electronics and Communications Engineering">
                  Electronics and Communications Engineering
                </SelectItem>
                <SelectItem value="Mechanical Engineering">
                  Mechanical Engineering
                </SelectItem>
                <SelectItem value="Civil Engineering">
                  Civil Engineering
                </SelectItem>
              </SelectContent>
            </Select>
          </label>
          <Button className="" type="submit">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}
