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
              <p className="bg-primary text-white p-2 rounded-full mr-2">
                Batch: {batch}, {department}
              </p>
            </div>
            <p>Mentor: {mentor}</p>
            <p>Subject: {subject}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
