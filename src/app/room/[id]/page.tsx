import Image from "next/image";
import Chat from "./chat";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

export default async function Room({params}) {
  return (
    <div className="w-screen flex justify-center my">
      <div className=" w-full px-10 md:w-1/2 h-screen">
        <div className="h-full gap-2 flex flex-col my-10">
          <Chat currentUser={"ashikkabeer"} />
          <div className="fixed flex w-full justify-center gap-2 bottom-0">
         
          </div>
        </div>
      </div>
    </div>
  );
}
