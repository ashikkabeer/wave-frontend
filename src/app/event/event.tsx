import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import BASE_URL from "../../../BASE_URL";
export default function EventHeader({ data }: { data: any }) {
  const [interest, setInterest] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentRole, setCurrentRole] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  useEffect(() => {
    // Retrieve chat history when component mounts
    const fetchCurrentUser = async () => {
      let token;
      if (typeof localStorage !== "undefined") {
        token = localStorage.getItem("access_token");
      } else {
        console.log("localStorage is not available.");
      }
      console.log("token", token);
      const username = await fetch(BASE_URL + "/user/me", {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await username.json();
      setCurrentUser(res.username);
      setCurrentRole(res.role);
      setCurrentUserId(res.userId);
    };
    fetchCurrentUser();
  }, [currentUser, currentRole, currentUserId]);
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

  const handleDelete = async () => {
    try {
      const response = await fetch(BASE_URL + `/event/${data.id}/delete`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
        mode: "cors",
        method: "DELETE",
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("Failed to delete event");
    } finally {
      alert("Event deleted successfully");
    }
  };
  return (
    <main className="w-full">
      <div className="">
        <Card className="">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>{data.name}</CardTitle>
              <p
                onClick={handleDelete}
                className={`${
                  currentRole === "faculty"
                    ? "border rounded-full p-2 bg-red-200 hover:bg-red-300 ease-in-out transition-all"
                    : "hidden invisible"
                }`}
              >
                {" "}
                {currentRole === "faculty" && <Trash2 />}{" "}
              </p>
            </div>
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
