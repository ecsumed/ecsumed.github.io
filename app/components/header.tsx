"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'


const items = [
    {
        "name": "Home",
        "link": "/",
        "extra_classes": ""
    },
    {
        "name": "Posts",
        "link": "/posts",
        "extra_classes": ""
    },
    {
        "name": "Experiment",
        "link": "/playground",
        "extra_classes": ""
    },
    {
        "name": "About",
        "link": "/about",
        "extra_classes": "line-through"
    },
    {
        "name": "Resume",
        "link": "/resume",
        "extra_classes": ""
    }
]

function MenuItem({ link, displayValue, extra_classes }) {
    const currentPath = usePathname();

    let item;
    if (currentPath != link) {
        item = (
            <Link href={`${link}`} className="group transition-all duration-300 ease-in-out">
                <span className={`bg-left-bottom bg-gradient-to-r from-amber-600 to-amber-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ${extra_classes}`}>
                    {displayValue}
                </span>
            </Link>
        )
    } else {
        item = (
            <span className="">
                {"-".repeat(displayValue.length)}
            </span>
        )
    }

    return (
        <li className="max-md:min-w-12 flex justify-center px-3 last:pl-3 last:pr-0">
            {item}
        </li>
    )
}

export default function Header() {
    return (
        <header id="header" className="">
            <nav className="">
                <div className="flex align-middle">
                    <div className="flex-1 flex justify-end">
                        <ul className="flex">
                            {items.map((item) => (
                                <MenuItem
                                    link={item.link}
                                    displayValue={item.name}
                                    key={item.name}
                                    extra_classes={item.extra_classes}
                                    >
                                </MenuItem>
                            ))}
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    );
}
