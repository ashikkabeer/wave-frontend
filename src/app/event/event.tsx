import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EventHeader() {
  return (
    <main className="w-full">
      <div className="">
        <Card className="">
          <CardHeader>
            <CardTitle>Aavishkar Tech-Fest</CardTitle>
            <CardDescription className="w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui
              fuga veritatis dolorum accusamus, dolorem minima quas hic
              similique, voluptatibus vitae tempora, blanditiis ipsum veniam
              quidem dignissimos eius! Esse praesentium totam nam?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <p>23 January 2024</p>
              <p className="bg-green-600 text-white p-2 rounded-full mr-2">
                Interested
              </p>
            </div>
            <p>Venue: Musaliar College of Engineering and Technology</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
