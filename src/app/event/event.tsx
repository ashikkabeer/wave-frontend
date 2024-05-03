import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreateEventButton } from "./createEventButton";
import { useState } from "react";
import BASE_URL from "../../../BASE_URL";
export default function EventHeader({ data }: { data: any }) {
  const [interest, setInterest] = useState(false);
  const handleInterest = async () => {
    if (!interest) {
      setInterest(!interest);
      const response = await fetch(BASE_URL + `/event/${data.id}/interest`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
        mode: "cors",
        method: "POST",
      });
      const result = await response.json();
      console.log(result);
    }
  };
  return (
    <main className="w-full">
      <div className="">
        <Card className="">
          <CardHeader>
            <CardTitle>{data.name}</CardTitle>
            <CardDescription className="w-3/4">
              {data.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <p>{data.date}</p>
              <p
                onClick={handleInterest}
                className={`${
                  interest === true
                    ? "bg-green-600 text-white p-2 rounded-full mr-2"
                    : "bg-red-400  text-white p-2 rounded-full mr-2"
                }`}
              >
                {" "}
                {interest && <div className="select-none">Interested</div>}
                {!interest && <div className="select-none">Not Interested</div>}
              </p>
            </div>
            <p>Venue: {data.location}</p>
            <p>Host: {data.createdBy}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
