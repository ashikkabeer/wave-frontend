import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {SignUp} from './signup'
import SignIn from "@/app/auth/login";
import {main} from "@popperjs/core";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthPage() {
    return (
        <div className={"w-screen mx-5"}>
            <div className={"w-full flex justify-center items-center"}>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
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
