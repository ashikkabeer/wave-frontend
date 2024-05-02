"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BASE_URL from "../../BASE_URL";
import { useRouter } from "next/navigation";
export function CreatePostForm() {
  const router = useRouter();
  //this should upload the image to an api and return the image url
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0]; // Access the first file if it exists
    setImage(file); // Update the image state
  };

  const handleUpload = async (e: any) => {
    setLoading(true);
    console.log("uploading");
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(BASE_URL + "/post/upload", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("access_token"),
        },
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Form data saved successfully!");
      } else {
        console.error("Failed to save form data");
        alert("Failed to save form data");
      }
      if (response.status === 200) {
        //redirect to /home
        console.log("redirecting to /home");
        router.push("/home");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upload Post</CardTitle>
        <CardDescription>Upload post in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {loading && (
                <p className="text-3xl italic text-red-700 items-center">
                  Uploading...
                </p>
              )}

              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                value={description}
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
            <Label htmlFor="image">Select image to upload</Label>
            <Input type="file" onChange={handleFileChange} />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" className="w-full" onClick={handleUpload}>
          Upload
        </Button>
        <br />
      </CardFooter>
    </Card>
  );
}
