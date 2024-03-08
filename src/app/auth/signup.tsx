'use client'
import { FormEvent } from 'react'

import { Button } from "@/components/ui/button"

import {z} from "zod";
export function SignUp() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        try {
            event.preventDefault()
        console.log(event.defaultPrevented)

        const formData = new FormData(event.currentTarget)
        console.log("formData", formData)

        const values = Object.fromEntries(formData.entries());

        console.log("values", JSON.stringify(values))
        const response = await fetch('http://localhost:3000/auth/signup', {
            headers: {
                "Content-Type": "application/json",
              },
            method: 'POST',
            mode:"cors",
            body:JSON.stringify(values),
        })

        // Handle response if necessary
        const data = await response.json()
        console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    // username: z.string().min(2).max(50),
    //     name: z.string().min(2).max(50),
    //     password: z.string().min(2).max(50),
    //     email: z.string().min(2).max(50),
    //     gender: z.any()
    return (
        <div className={''}>
            <div className={""}>
                <form className=" flex flex-col space-y-1" onSubmit={onSubmit}>
                    <label htmlFor='username' className="flex flex-col">
                        Username: <input className="input" type="text" name="username" placeholder="username"/>
                    </label>
                    <label htmlFor='name' className="flex flex-col" >
                        Name: <input className="input" type="text" name="name" placeholder="name"/>
                    </label>
                    <label htmlFor='email' className="flex flex-col">
                        Email: <input className="input" type="email" name="email" placeholder="email"/>
                    </label>
                    <label htmlFor='password' className="flex flex-col">
                        Password: <input className="input" type="password" name="password" placeholder="password"/>
                    </label>
                    <label htmlFor='gender' className="flex flex-col">
                        Gender
                        <select className="input" name="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <button className="py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90" type="submit">
                        Signup
                    </button>
                </form>

            </div>
        </div>
    )
}