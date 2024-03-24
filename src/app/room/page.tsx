import Link from "next/link";
import Chat from "./chat";
import { CreateRoomButton } from "./createButton";
export default function Room() {
  return (
    <main className="w-screen flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="md:w-2/4 w-screen px-4 md:px-0 flex justify-center flex-col gap-3">
          <div className="w-full flex justify-end">
            <CreateRoomButton />
          </div>
          <Link className="" href={"https://www.github.com/ashikkabeer"}>
            <Chat />
          </Link>
        </div>
      </div>
    </main>
  );
}
