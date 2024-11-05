/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */

import Link from 'next/link'
import Image from 'next/image'

export function H1Renderer(children: React.ReactNode) {
    return (
        <div>
            <p className="text-2xl mt-5 ">{children}</p>
            <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

    );
}

export function H2Renderer(children: React.ReactNode) {
    return (
        <div>
            <p className="text-xl mt-5 ">{children}</p>
            <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>

    );
}

export function H3Renderer(children: React.ReactNode) {
    return (
        <p className="text-l mt-3 mb-4 font-bold">{children}</p>
    );
}

export function ThRenderer(children: React.ReactNode) {
    return (
        <th className=" border-2 border-black dark:border-white">{children}</th>
    );
}

export function TdRenderer(children: React.ReactNode) {
    return (
        <th className=" border-2 border-black dark:border-white">{children}</th>
    );
}

export function BlockQuoteRenderer(children: React.ReactNode) {
    return (
        <blockquote className="text-l italic font-semibold text-gray-900 dark:text-white">{children}</blockquote>
    );
}

export function UlRenderer(children: React.ReactNode) {
    return (
        <ul className="list-disc">{children}</ul>
    );
}

export function LiRenderer(children: React.ReactNode) {
    return (
        <li className="-my-3">{children}</li>
    );
}


export function ImgRenderer(props: any) {
    return (
        <Image src={props.src!} alt={props.alt!} width={1200} height={200} />
    )
}


export function LinkRenderer(props: any) {
    return (
        <Link className="text-sky-500" as={props.alt} href={props.href}>
            {props.children}
        </Link>
    )
}