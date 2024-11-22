/* eslint-disable  @typescript-eslint/no-explicit-any */

import { getSortedPostsData } from '../../lib/posts';

import Link from 'next/link'
import Badge from '../components/badge';

import { TerminalCommand } from '../components/terminal'

const posts: any = getSortedPostsData();

export default function Page() {
    return (

        <div className='p-3 rounded terminal'>
            <TerminalCommand command={["$ ", "$ ls -lggo", "$ ls -lgo"]} delay={1000} preRenderFirstString={true}>
                {posts.map((post) => (
                    <div className='max-md:mt-2 md:flex md:-ml-2 items-center'>
                        <Link className='transition delay-75 duration-300 ease-in-out hover:scale-110' href={`/post/${post.id}`} >
                            <div className='flex m-2'>
                                <p className='hidden lg:block tracking-widest md:text-xl whitespace-pre'>.rw-r--r-- {post.createdAt.getDate().toString().padStart(2, '0')} {post.createdAt.toLocaleString('en-us', { month: 'short' })} </p>
                                <p className='md:text-lg lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2'>{post.title}</p>
                                {/* <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                <p className='font-normal text-gray-500 dark:text-gray-400line-clamp-3'>{post.description}</p> */}
                            </div>
                        </Link>
                        <div className='flex max-md:mt-2'>
                            {post.tags.map((tag: string) => (
                                <Link href={`/posts/${tag}`} className='transition delay-0 duration-150 ease-in-out hover:scale-110'>
                                    <Badge text={tag}></Badge>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </TerminalCommand>
        </div >
    )
}