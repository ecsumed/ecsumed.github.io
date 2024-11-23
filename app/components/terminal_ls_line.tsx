// 'use client'

import Link from "next/link";
import Badge from "./badge";

export const ListPost = ({ post }) => {
    const perms = ".rw-r--r--"
    const date = post.createdAt.getDate().toString().padStart(2, '0')
    const month = post.createdAt.toLocaleString('en-us', { month: 'short' })

    return (
        <div className='md:flex md:-ml-2 max-md:mb-3 items-center'>
            <Link className='transition delay-75 duration-300 ease-in-out hover:scale-110' href={`/post/${post.id}`} >
                <div className='flex md:m-2'>
                    <p className='hidden lg:block tracking-widest md:text-xl whitespace-pre'>{perms} {date} {month} </p>
                    <p className='md:text-lg lg:text-xl max-sm:pl-0 max-sm:mb-1 font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2'>{post.title}</p>
                </div>
            </Link>
            <div className='flex flex-wrap align-middle'>
                {post.tags.map((tag: string) => (
                    <Link href={`/posts/${tag}`} className='pr-1 py-0.5 transition delay-0 duration-150 ease-in-out hover:scale-110'>
                        <Badge text={tag}></Badge>
                    </Link>
                ))}
            </div>
        </div>
    );
};