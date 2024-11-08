import { MarkdownRenderer } from '@/app/components/markdown';
import { getPost, getSortedPostsData } from '../../../lib/posts';

import Link from 'next/link';
import Badge from '@/app/components/badge';
import Image from 'next/image';



export async function generateStaticParams() {
  const posts = getSortedPostsData()

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
  const post = getPost(postID);

  const day = post.createdAt.getDate()
  const month = post.createdAt.toLocaleString('en-us', { month: 'short' })
  const year = post.createdAt.getFullYear()

  if (!post) {
    return <p>Post not found.</p>
  }

  return (
    <div className="min-h-screen p-2 font-[family-name:var(--font-geist-sans)]">
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

        <div className='grid grid-cols-2'>
          <div className='content-center'>
            {post.tags.map((tag: string) => (
              <Link href={`/posts/${tag}`}>
                <Badge color="green" text={tag}></Badge>
              </Link>
            ))}
          </div>

          <div className="pr-2 flex justify-end">
            <span className='text-lg'>{month} {day}, {year} </span>
          </div>
        </div>

      </div>

      <div className='mt-6 mb-16 p-6 rounded bg-slate-50 text-black dark:bg-zinc-900 dark:text-white'>
        <MarkdownRenderer>
          {post.content}
        </MarkdownRenderer>
      </div>

    </div>

  );
}

