import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AddRoomForm } from "./addroom";

interface Chatroom {
  id: string;
  title: string;
  description: string;
  mentor: string;
  author: string;
  batch: number;
  department: string;
  subject: string;
}

export function CreateRoomButton() {
  return (
    <div className="w-full">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Create Room</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AddRoomForm />
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

//             <AlertDialogAction>Continue</AlertDialogAction>
