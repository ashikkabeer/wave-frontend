"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef, useState } from "react";

export default function Chat() {
  const dummy = useRef();
  // const messagesRef = firestore.collection('messages'); // replace it with api calls
  // const query = messagesRef.orderBy('createdAt').limit(25); // replace

  // const [messages] = useCollectionData(query, { idField: 'id' }); //firebase

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();

    // const { uid, photoURL } = auth.currentUser; //get the users info

    // await messagesRef.add({
    //   text: formValue,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //   uid,
    //   photoURL
    // })

    setFormValue("");
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Card>
        <CardHeader className="m-0 py-1 underline text-sm ">
          <p>@ashikkabeer</p>
        </CardHeader>
        <CardContent className="py-0">
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            dignissimos aliquid est. Similique aspernatur quasi ullam vel, hic
            minima est veniam ea porro fugiat quisquam accusamus voluptatibus
            asperiores voluptate adipisci, ducimus eius maxime unde aperiam
            blanditiis consectetur ipsum aliquid eos? Velit, incidunt excepturi?
            Voluptatum, delectus adipisci magnam dignissimos, quia culpa quo
            fugit ipsam, illum autem ea.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end py-1">
          <p className="text-sm">16:05</p>
        </CardFooter>
      </Card>
    </div>
  );
}
