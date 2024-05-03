"use client";

import Link from "next/link";
import EventHeader from "./event";
import { useState, useEffect } from "react";
import { CreateEventButton } from "./createEventButton";
import BASE_URL from "../../../BASE_URL";
import { RotateSpinner } from "react-spinners-kit";
import { useRouter } from "next/navigation";
export default function EventPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentRole, setCurrentRole] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + "/event", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          mode: "cors",
          method: "GET",
        });
        if (!response.ok) {
          router.push("/auth");
        }
        console.log("response", response);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data, router]);
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
  return (
    <main className="w-screen flex-col flex justify-center items-center">
      <div className={`${currentRole != "faculty" ? "invisible" : ""}`}>
        <CreateEventButton />
      </div>
      {loading ? (
        <div className="w-screen h-screen">
          <div className="w-full h-full flex justify-center items-center">
            <RotateSpinner />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="md:w-2/4 w-screen px-4 md:px-0 flex justify-center flex-col gap-3">
            <div className="w-full flex justify-end"></div>
            <div className="">
              {data &&
                data.map(
                  (item: {
                    id: string;
                    name: string;
                    description: string;
                    location: string;
                    createdBy: string;
                    date: string;
                    createdAt: string;
                  }) => (
                    <div className="mt-5" key={item.id}>
                      <EventHeader
                        data={{
                          id: item.id,
                          name: item.name,
                          description: item.description,
                          location: item.location,
                          createdBy: item.createdBy,
                          date: item.date,
                          createdAt: item.createdAt,
                        }}
                      />
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
