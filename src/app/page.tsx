import Link from "next/link";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <main className=" w-screen flex min-h-screen flex-col items-center justify-between">

      <Hero
        data={{
          college: "Musaliar College of Engineering and Technology",
          quoute:
            "! Introducing your all-in-one platform for connecting, sharing, and learning. Join our vibrant community to stay updated on campus events, collaborate with peers, and enhance your college experience. Together, let us build a thriving hub of knowledge and connection at the campus. Join wave now!",
        }}
      />
    </main>
  );
}
