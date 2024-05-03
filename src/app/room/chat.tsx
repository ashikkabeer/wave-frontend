import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface ChatProps {
  title: string;
  description: string;
  mentor: string;
  author: string;
  batch: number;
  department: string;
  subject: string;
}
export default function Chat({
  title,
  description,
  mentor,
  author,
  batch,
  department,
  subject,
}: ChatProps) {
  return (
    <main className="w-full">
      <div className="">
        <Card className="">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <p>
                created by{" "}
                <span className="bg-primary-foreground">{author}</span>
              </p>
              <div className="flex flex-col">
                <p className="underline">Batch: {batch}</p>
                <p className="bg-primary text-white p-2 rounded mr-2">
                  {department}
                </p>
              </div>
            </div>
            <p>Mentor: {mentor}</p>
            <p className="text-primary font-medium underline">
              Subject: {subject}
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
