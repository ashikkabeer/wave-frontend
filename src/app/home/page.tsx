"use client";
import React, { useState, useEffect } from "react";
import Cards from "@/components/card";
import { CreatePostButton } from "@/components/createPostButton";
import BASE_URL from "../../../BASE_URL";
import { RotateSpinner } from "react-spinners-kit";
export default function HomePage() {
  // api-> https://65d90abac96fbb24c1bcb008.mockapi.io/api/v1/posts
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + "/post", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          mode: "cors",
          method: "GET",
        });
        console.log(response);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="">
      <div className="w-screen flex justify-center">
        <CreatePostButton />
      </div>
      {loading ? (
        <div className="w-screen h-screen">
          <div className="w-full h-full flex justify-center items-center">
            <RotateSpinner />
          </div>
        </div>
      ) : (
        <div className="">
          {data &&
            data.map(
              (item: {
                id: string;
                title: string;
                description: string;
                image: string;
                upvotes: number;
                date: string;
              }) => (
                <div key={item.id}>
                  <Cards
                    data={{
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      image: item.image,
                      upvotes: item.upvotes,
                      date: item.date,
                    }}
                  />
                </div>
              )
            )}
        </div>
      )}
    </main>
  );
}
