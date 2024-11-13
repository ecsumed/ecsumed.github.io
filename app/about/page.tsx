import { readFile } from '@/lib/markdown';
import { MarkdownRenderer } from '../components/markdown'
import { TerminalCommand } from '../components/terminal'
import path from 'path';

export default function Page() {
    const contentDirectory = path.join(process.cwd(), 'content');

    const fullPath = path.join(contentDirectory, 'about-me.md');
    const fileContents = readFile(fullPath)

    return (

        <div className='p-3 rounded h-50 terminal'>
            <TerminalCommand command={["$ whoami && cat about-me.md | renderHTML"]} delay={1000}>
                <div className='mt-6 mb-16 p-6 rounded bg-slate-50 text-black dark:bg-zinc-900 dark:text-white'>
                    <MarkdownRenderer>
                        {fileContents.content}
                    </MarkdownRenderer>
                </div>

            </TerminalCommand>
        </div >
    )
}

