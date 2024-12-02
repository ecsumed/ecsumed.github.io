/* eslint-disable  @typescript-eslint/no-explicit-any */

import { getSortedPostsData } from '../../lib/posts';

import { TerminalCommand } from '../components/terminal'
import { ListPost } from '../components/terminal_ls_line';

const posts: any = getSortedPostsData();

export default function Page() {
    return (

        <div className='p-2 terminal'>
            <TerminalCommand command={["$ ", "$ ls -lggo", "$ ls -lgo"]} delay={1000} preRenderFirstString={true}>
                {posts.map((post) => (
                    <ListPost post={post}/>
                ))}
            </TerminalCommand>
        </div >
    )
}