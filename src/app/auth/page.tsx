import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from "./signup";
import { LoginForm } from "./login";
export default function AuthPage() {
  return (
    <main className="w-screen flex justify-center h-screen mx-auto my-auto">
      <div>
        <Tabs defaultValue="account" className="">
          <TabsList>
            <TabsTrigger className="px-5" value="account">New User?</TabsTrigger>
            <TabsTrigger className="px-5" value="password">Existing User?</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <ProfileForm/>
          </TabsContent>
          <TabsContent value="password">
          <LoginForm/>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
