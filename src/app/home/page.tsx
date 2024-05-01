"use client";
import React, { useState, useEffect } from "react";
import Cards from "@/components/card";
import { CreatePostButton } from "@/components/createPostButton";
import BASE_URL from "../../../BASE_URL";
export default function HomePage() {
  // api-> https://65d90abac96fbb24c1bcb008.mockapi.io/api/v1/posts
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          BASE_URL+"/post", {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
            mode: "cors",
            method: "GET",
            
          }
        );
        console.log(response)
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
    <main>
      <div className="flex justify-end">
        <CreatePostButton />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p>Loading...</p>
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
                      like: item.upvotes,
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
