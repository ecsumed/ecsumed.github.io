import { getSortedPostsData } from '../../lib/posts';

import Link from 'next/link'
import Badge from '../components/badge';
import Image from 'next/image';

import { ExampleComponent } from '../components/terminal'

const posts = getSortedPostsData()

export default function Page() {
    return (

        <div>
                    <ExampleComponent></ExampleComponent>



            {posts.map((post) => (
                <div className=''>
                    <div className='border-2 rounded p-2 transition delay-0 duration-150 ease-in-out hover:scale-110 shadow md:shadow-lg shadow-teal-700 md:shadow-teal-700'>
                        <Link className="block h-full w-full" href={`/post/${post.id}`}>
                            {/* <div >
                                <Image width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-48" src={`/content/images/${post.image}`} alt="Post header image">
                                </Image>
                            </div> */}
                            <div className='m-2'>
                                <p className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2'>{post.title}</p>
                                <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                <p className='font-normal text-gray-500 dark:text-gray-400line-clamp-3'>{post.description}</p>
                            </div>
                        </Link>
                    </div>
                    <div className=''>
                        {post.tags.map((tag: string) => (
                            <Link href={`/posts/${tag}`}>
                                <Badge color="green" text={tag}></Badge>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div >
    )
}