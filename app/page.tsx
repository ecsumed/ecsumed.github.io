import localFont from "next/font/local";
import ThreeBackground from "./components/three_background";

const printClearlySans = localFont({
  src: "./fonts/PrintClearly.woff",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-0">
        <ThreeBackground></ThreeBackground>
      </div>
      <div className="absolute top-0 left-0 h-full">
        <div className='flex flex-col p-5 h-full'>
          <div className="md:grid md:grid-cols-4">
            <div className="flex md:justify-end">
              <a href="" className="">
                <span className={`${printClearlySans.className} text-7xl`}>Fahad Saleh</span>
              </a>
            </div>
            <div className="col-span-3 max-w-full"></div>

            <div className="col-span-1 flex md:justify-end">
              <span className="text-neutral-600 dark:text-neutral-400">DevOps | SRE | Platform</span>
            </div>
            <div className="col-span-3 max-w-full"></div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-4 max-w-full"></div>
            <span className="col-span-2 font-medium text-lg whitespace-pre-wrap">
              I like trying to find bottleneck issues in
              large, distributed systems,
              ensuring optimal performance and reliability.
              And learning new stuff.
            </span>
          </div>
          <div className="flex flex-1">
            <div className="pl-6 content-end">
              <span>Currently reading: <a className="underline" href="https://thebookofshaders.com/">The Book of Shaders</a></span>
            </div>
          </div>
        </div >
      </div>
    </div>

  );
}
