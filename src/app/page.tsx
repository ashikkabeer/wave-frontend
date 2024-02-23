import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-screen flex min-h-screen flex-col items-center justify-between">
      <div className="center h-screen w-screen hero flex flex-col align-middle justify-center items-center">
        <div className="px-10 w-screen flex flex-col align-middle justify-center items-center">
          <p className="text-4xl italic font-semibold mb-5 bg-black text-white px-5">
            #LetsWave
          </p>
          <p className="text-2xl flex-wrap align-middle font-semibold text-center">
            Musaliar College of Engineering and Technology
          </p>
          <p className="mt-5 md:mx-56 text-center">
            Welcome to the heart of{" "}
            <span className="text-xl font-semibold">
              Musaliar College of Engineering & Technology
            </span>
            ! Introducing your all-in-one platform for connecting, sharing, and
            learning. Join our vibrant community to stay updated on campus
            events, collaborate with peers, and enhance your college experience.
            Together, let uss build a thriving hub of knowledge and connection
            at the campus. <br />{" "}
            <span className="font-bold text-xl">Join wave now!</span>
          </p>
        </div>
        <div className="buttons mt-10 w-full justify-center flex gap-12">
          <Link
          href={"/auth"}
          className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Login now
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
