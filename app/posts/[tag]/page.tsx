/* eslint-disable  @typescript-eslint/no-explicit-any */

import Badge from "@/app/components/badge";
import { TerminalCommand } from "@/app/components/terminal";
import { getAllPostTags, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
  const tags: string[] = getAllPostTags()

  const paths = tags.map((tag) => ({
    tag: tag
  }))

  return paths || []
}

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>
}) {

  const tag = (await params).tag;

  const filteredPosts: any = getSortedPostsData(tag);

  if (!tag) {
    return <p>Tag not found.</p>
  }

  return (
    <div className='p-3 rounded terminal'>
      <TerminalCommand command={["$ ", "$ ls -lgo", `$ ls -lgo | grep ${tag}`]} delay={1000} preRenderFirstString={true}>
        {filteredPosts.map((post) => (
          <div className='max-md:mt-2 md:flex md:-ml-2 items-center'>
            <Link className='transition delay-75 duration-300 ease-in-out hover:scale-110' href={`/post/${post.id}`} >
              <div className='flex m-2'>
                <p className='hidden lg:block tracking-widest md:text-xl whitespace-pre'>.rw-r--r-- {post.createdAt.getDate().toString().padStart(2, '0')} {post.createdAt.toLocaleString('en-us', { month: 'short' })} </p>
                <p className='md:text-lg lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2'>{post.title} .md</p>
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
  );
}

