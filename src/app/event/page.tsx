import Link from "next/link";
import EventHeader from "./event";
export default function EventPage() {
    
    return(
        <main className="w-screen flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="md:w-2/4 w-screen px-4 md:px-0 flex justify-center flex-col gap-3">
          <div className="w-full flex justify-end">
          </div>
          {/* <Link className="" href={`room/${params}`}> */}
          <Link className="" href={`room/10`}>
            <EventHeader />
          </Link>
        </div>
      </div>
    </main>
    )
}