import Image from "next/image"
import Chat from "./chat"

export default async function Room() {
  return(
    <div className="w-screen flex justify-center">
      <div className=" w-full px-10 md:w-1/2 h-screen bg-pink-200">
        <div className="mt-10 ">
          <Chat/>
        </div>
      </div>
    </div>
  )
}