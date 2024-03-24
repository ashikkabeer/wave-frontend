import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Chat() {
  return (
    <main className="w-full">
      <div className="">
        <Card className="">
          <CardHeader>
            <CardTitle>Is computer science relevant ?</CardTitle>
            <CardDescription>No, I dont think so</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <p>created by <span className="bg-primary-foreground">@ashikkabeer</span></p>
              <p className="bg-primary text-white p-2 rounded-full mr-2">S6</p>
            </div>
            <p>Mentor: Salitha MK</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
