import { TerminalCommand } from '../components/terminal'

export default function Page() {
    return (

        <div className='p-3 rounded h-50 bg-slate-300 dark:bg-zinc-800 dark:text-white'>
            <TerminalCommand command={["$ whoami && cat about-me.md | renderhtml"]} delay={1000}>
                <p className='text-2xl'>about</p>
            </TerminalCommand>
        </div >
    )
}

