/* eslint-disable  @typescript-eslint/no-explicit-any */

import { TerminalCommand } from "@/app/components/terminal";
import { ListPost } from "@/app/components/terminal_ls_line";
import { getAllPostTags, getSortedPostsData } from "@/lib/posts";

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
    <div className='p-5 terminal h-full'>
      <TerminalCommand command={["$ ", "$ ls -lgo", `$ ls -lgo | grep ${tag}`]} delay={1000} preRenderFirstString={true}>
        {filteredPosts.map((post) => (
          <ListPost post={post} />
        ))}
      </TerminalCommand>
    </div >
  );
}

