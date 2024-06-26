"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { CreatePostForm } from "./addPostForm";
export function CreatePostButton() {
  return (
    <div className="">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default" className="font-bold px-10">
            Create a post
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <CreatePostForm />
          <AlertDialogCancel>Go Back</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

//             <AlertDialogAction>Continue</AlertDialogAction>
