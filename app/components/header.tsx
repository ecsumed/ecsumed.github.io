import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
    return (
        <header id="header" className="">
            <nav className="">
                <div className="flex align-middle">
                    <div className="flex align-middle">
                        <a href="" className="py-2">
                            <span className="self-center text-2xl text-teal-600 dark:text-teal-100">Fahad</span>
                            <span className="self-center text-2xl font-semibold text-teal-600 dark:text-emerald-500">Saleh</span>
                        </a>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <ul className="flex">
                            <li className="content-center">
                                <Link href="/posts" className="px-3 group transition-all duration-300 ease-in-out">
                                    <span className="bg-left-bottom bg-gradient-to-r from-amber-600 to-amber-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        Posts
                                    </span>
                                </Link>
                            </li>
                            <li className="content-center">
                                <Link href="/about" className="px-3 group transition-all duration-300 ease-in-out">
                                    <span className="bg-left-bottom bg-gradient-to-r from-amber-600 to-amber-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        About
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    );
}