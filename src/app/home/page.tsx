'use client'
import React, { useState, useEffect } from "react";
import Cards from "@/components/card";

export default function HomePage() {
  // api-> https://65d90abac96fbb24c1bcb008.mockapi.io/api/v1/posts
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://65d90abac96fbb24c1bcb008.mockapi.io/api/v1/posts"
        );
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
                name: string;
                department: string;
                content: string;
                image: string;
                like: number;
                avatar:string;
              }) => (
                <div key={item.id}>
                  <Cards
                    data={{
                      name: item.name,
                      avatar:item.avatar,
                      department: item.department,
                      content: item.content,
                      image: item.image,
                      like: item.like,
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
