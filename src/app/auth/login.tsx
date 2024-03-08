'use client'
import { FormEvent } from 'react'

import { Button } from "@/components/ui/button"

import {z} from "zod";
import {redirect} from "next/navigation";
export default function SignIn() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      console.log(event.defaultPrevented)

      const formData = new FormData(event.currentTarget)
      console.log("formData", formData)

      const values = Object.fromEntries(formData.entries());

      console.log("values", JSON.stringify(values))
      const response = await fetch('http://localhost:3000/auth/signin', {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        mode:"cors",
        body:JSON.stringify(values),
      })

      // Handle response if necessary
      const data = await response.json()
      if(data) {
        window.location.replace('/home')
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <div className={''}>
        <div className={""}>
          <form className=" flex flex-col space-y-1" onSubmit={onSubmit}>
            <label htmlFor='username' className="flex flex-col">
              Username: <input className="input" type="text" name="username" placeholder="username"/>
            </label>


            <label htmlFor='password' className="flex flex-col">
              Password: <input className="input" type="password" name="password" placeholder="password"/>
            </label>

            <button className="py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90" type="submit">
              Signin
            </button>
          </form>

        </div>
      </div>
  )
}