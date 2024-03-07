import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {SignUp} from './signup'
import {main} from "@popperjs/core";
export default function AuthPage() {
  return (
      <main>
        <div>
          <SignUp/>
        </div>
      </main>

  );
}
