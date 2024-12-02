import localFont from "next/font/local";
import { redirect } from "next/navigation";

const printClearlySans = localFont({
  src: "./fonts/PrintClearly.woff",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className='p-5 h-[calc(100vh-9rem)] overflow-auto'>
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
    </div >
    // redirect('about')
  );
}
