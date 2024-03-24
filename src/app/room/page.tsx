import Link from "next/link"
import Chat from "./chat"
export default function Room () {

    return (
        <main className="w-screen flex justify-center">
            <div className="w-2/4 h-screen flex-col gap-3">
               <Link className="" href={"https://www.github.com/ashikkabeer"}> <Chat /></Link>
            </div>
        </main>
    )
}