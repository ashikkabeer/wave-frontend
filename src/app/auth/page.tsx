import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignUp } from "./signup";
import SignIn from "@/app/auth/login";

export default function AuthPage() {
  return (
    <div className={"w-screen mx-5"}>
      <div className={"w-full flex justify-center items-center"}>
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <SignUp />
          </TabsContent>
          <TabsContent value="login">
            <SignIn />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
