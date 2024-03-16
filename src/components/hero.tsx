import Link from "next/link";

export default function Hero({ data }: { data: any }) {
  return (
    <div className="center h-screen w-screen hero flex flex-col align-middle justify-center items-center">
      <div className="background"></div>

      <div className="px-10 w-full flex flex-col items-center">
        <p className="text-4xl italic font-semibold pb-5 px-5 inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
          #LetsWave
        </p>
        <p className="text-2xl flex-wrap align-middle font-semibold text-center">
          {data.college}
        </p>
        <p className="pt-5 md:px-56 text-center">
          Welcome to the heart of{" "}
          <span className="text-xl font-semibold">{data.college}</span>
          {data.quoute}
          <br /> <span className="font-bold text-xl">Join wave now!</span>
        </p>
      </div>
      <div className="buttons pt-10 w-full justify-center flex gap-12">
        <Link href={"/auth"} className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Login now
          </div>
        </Link>
      </div>
    </div>
  );
}
