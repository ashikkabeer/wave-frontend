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
import { CreatePostForm } from "./addPostForm";
export function CreatePostButton() {
  return (
    <div className="w-full">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Create a post</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <CreatePostForm />
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

//             <AlertDialogAction>Continue</AlertDialogAction>
