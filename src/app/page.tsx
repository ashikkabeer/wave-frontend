export default function Home() {
  return (
    <main className=" w-screen flex min-h-screen flex-col items-center justify-between">
      <div className="center h-screen w-screen hero flex flex-col align-middle justify-center items-center">
        <div className="px-10 w-screen flex flex-col align-middle justify-center items-center">
          <p className="text-4xl italic font-semibold mb-5 bg-black text-white px-5">#LetsWave</p>
          <p className="text-2xl flex-wrap align-middle font-semibold text-center">
            Musaliar College of Engineering and Technology
          </p>
          <p className="mt-5 md:mx-56 text-center">
            Welcome to the heart of <span className="text-xl font-semibold">Musaliar College of Engineering & Technology</span>! Introducing 
              your all-in-one platform for connecting, sharing, and
            learning. Join our vibrant community to stay updated on campus
            events, collaborate with peers, and enhance your college experience.
            Together, let uss build a thriving hub of knowledge and connection at
             the campus. <br/> <span className="font-bold text-xl">Join wave now!</span> 
          </p>
        </div>
        <div className="buttons mt-10 w-full justify-center flex gap-12">
          <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 md:w-32 w-1/3 text-neutral-50">
            <span className="relative z-10 text-sm whitespace-nowrap">Login</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
              <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-purple-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
