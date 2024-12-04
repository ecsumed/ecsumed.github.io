/* eslint-disable  @typescript-eslint/no-explicit-any */

import { MarkdownRenderer } from '@/app/components/markdown';
import { getPost, getSortedPostsData } from '../../../lib/posts';

import Link from 'next/link';
import Badge from '@/app/components/badge';
import Image from 'next/image';
import { TerminalCommand } from '@/app/components/terminal';



export async function generateStaticParams() {
  const posts: any = getSortedPostsData()

  const paths = posts.map((post) => ({
    post: post.id.toString()
  }))

  return paths || []
}

export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>
}) {
  const postID = (await params).post;
  const post: any = getPost(postID);

  const day = post.createdAt.getDate()
  const month = post.createdAt.toLocaleString('en-us', { month: 'short' })
  const year = post.createdAt.getFullYear()

  if (!post) {
    return <p>Post not found.</p>
  }

  return (
    <div className='px-5 pt-5 terminal h-full'>
      <TerminalCommand command={["$ ", `$ cat posts/${postID}.md | renderHTML`]} delay={1000}>
      <div className="p-2 font-[family-name:var(--font-geist-sans)]">
          <div className="">
            <Image width="0"
              height="0"
              sizes="100vw"
              className="w-full h-48" src={`/content/images/${post.img}`} alt="Post header image">
            </Image>
          </div>

          <div className='mt-5 mx-5'>
            <div className="">
              <span className='text-4xl'>{post.title}</span>
            </div>

            <div className='grid max-md:mt-2 md:grid-cols-2'>
              <div className='flex flex-wrap align-middle content-center'>
                {post.tags.map((tag: string) => (
                  <Link href={`/posts/${tag}`}>
                    <Badge text={tag}></Badge>
                  </Link>
                ))}
              </div>

              <div className="pr-2 max-md:mt-2">
                <span className='text-lg md:float-right'>{month} {day}, {year} </span>
              </div>
            </div>

          </div>

          <div className='mt-6 mb-8 p-6 rounded bg-slate-50 text-black dark:bg-zinc-900 dark:text-white'>
            <MarkdownRenderer>
              {post.content}
            </MarkdownRenderer>
          </div>
        </div>
      </TerminalCommand>
    </div >
  );
}

