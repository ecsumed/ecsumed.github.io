import { getSortedPostsData } from '../../lib/posts';

import Link from 'next/link'
import Badge from '../components/badge';

import { TerminalCommand } from '../components/terminal'

const posts = getSortedPostsData();

export default function Page() {
    return (

        <div className='p-3 rounded bg-slate-300 dark:bg-zinc-800 dark:text-white'>
            <TerminalCommand command={["$ ls -lggo", "$ ls -lgo"]} delay={1000}>
                {posts.map((post) => (
                    <div className='flex -ml-2 items-center'>
                        <Link className='transition delay-75 duration-300 ease-in-out hover:scale-110' href={`/post/${post.id}`} >
                            <div className='flex m-2'>
                                <p className='tracking-widest text-l whitespace-pre'>.rw-r--r-- {post.createdAt.getDate().toString().padStart(2, '0')} {post.createdAt.toLocaleString('en-us', { month: 'short' })} </p>
                                <p className='text-l font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2'>{post.title} .txt</p>
                                {/* <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                <p className='font-normal text-gray-500 dark:text-gray-400line-clamp-3'>{post.description}</p> */}
                            </div>
                        </Link>
                        <div className='flex items-center'>
                            {post.tags.map((tag: string) => (
                                <Link href={`/posts/${tag}`} className='transition delay-0 duration-150 ease-in-out hover:scale-110'>
                                    <Badge color="green" text={tag}></Badge>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </TerminalCommand>
        </div >
    )
}