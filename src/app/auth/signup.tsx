'use client'
import { FormEvent } from 'react'

import { Button } from "@/components/ui/button"

import {z} from "zod";
export function SignUp() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        // event.preventDefault()
        console.log('on submit triggered')

        const formData = new FormData(event.currentTarget)
        console.log(formData)
        const response = await fetch('http://localhost:7000/', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        const data = await response.json()
        console.log(data)
    }
    // username: z.string().min(2).max(50),
    //     name: z.string().min(2).max(50),
    //     password: z.string().min(2).max(50),
    //     email: z.string().min(2).max(50),
    //     gender: z.any()
    return (
        <div className={'w-screen mx-5'}>
            <div className={"w-full flex justify-center items-center"}>
                <form className="w-auto flex flex-col space-y-8" onSubmit={onSubmit}>
                    <label className="flex flex-col" htmlFor="username">
                        Username: <input className="input" type="text" name="username" placeholder="username"/>
                    </label>
                    <label className="flex flex-col" htmlFor="name">
                        Name: <input className="input" type="text" name="name" placeholder="name"/>
                    </label>
                    <label className="flex flex-col" htmlFor="email">
                        Email: <input className="input" type="email" name="email" placeholder="email"/>
                    </label>
                    <label className="flex flex-col" htmlFor="password">
                        Password: <input className="input" type="password" name="password" placeholder="password"/>
                    </label>
                    <label className="flex flex-col" htmlFor="gender">
                        Gender
                        <select className="input" name="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                    <button className="py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90" type="submit">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}