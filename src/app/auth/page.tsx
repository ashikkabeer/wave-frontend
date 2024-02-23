import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from "./signup";
export default function AuthPage() {
  return (
    <main className="w-screen flex justify-center h-screen mx-auto my-auto">
      <div>
        <Tabs defaultValue="account" className="">
          <TabsList>
            <TabsTrigger className="px-5" value="account">Existing User?</TabsTrigger>
            <TabsTrigger className="px-5" value="password">New User?</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <ProfileForm/>
          </TabsContent>
          <TabsContent value="password">
          <ProfileForm/>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
