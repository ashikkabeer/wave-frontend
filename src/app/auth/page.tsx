import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {SignUp} from './signup'
import SignIn from "@/app/auth/login";

export default function AuthPage() {
    return (
        <div className={"w-screen mx-5"}>
            <div className={"w-full flex justify-center items-center"}>
                <Tabs defaultValue="auth" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Signup</TabsTrigger>
                        <TabsTrigger value="password">Login</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <SignUp/>
                    </TabsContent>
                    <TabsContent value="password">
                        <SignIn/>
                    </TabsContent>
                </Tabs>
            </div>

        </div>
    )
}

// export default function AuthPage() {
//   return (
//       <main>
//         <div>
//         </div>
//       </main>
//
//   );
// }
