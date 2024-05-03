"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { AddRoomForm } from "./addEventsForm";
export function CreateEventButton() {
  return (
    <div className="">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default" className="font-bold px-10">
            Create an Event
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AddRoomForm />
          <AlertDialogCancel>Go Back</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

//             <AlertDialogAction>Continue</AlertDialogAction>
