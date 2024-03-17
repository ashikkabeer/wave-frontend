import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Chat() {
  return (
    <div>
      <Card>
        <CardHeader className="m-0 py-1 underline text-sm ">
          <p>@ashikkabeer</p>
        </CardHeader>
        <CardContent className="py-0">
          <p className="text-md">
            Hey da! How was your exam? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ipsam quidem hic excepturi tenetur nemo
            consequatur cupiditate, laudantium accusamus esse est et accusantium
            eaque rerum error illo maxime. Saepe totam fuga doloremque eos!
          </p>
        </CardContent>
        <CardFooter className="flex justify-end py-1">
          <p className="text-sm">16:05</p>
        </CardFooter>
      </Card>
    </div>
  );
}
