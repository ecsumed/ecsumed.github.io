import { TerminalCommand, TerminalOutput } from '../components/terminal'

export default function Page() {
    return (

        <div className='p-3 rounded h-50 bg-slate-300 dark:bg-zinc-800 dark:text-white'>
            <TerminalCommand command={[
                '$ whoami',
                1000,
            ]}></TerminalCommand>

            <TerminalOutput>
                <p className='text-2xl'>Fahad Saleh</p>
            </TerminalOutput>

            <TerminalCommand command={[
                '$ cat about-me.txt | renderHTML',
                1000,
            ]}></TerminalCommand>

            <TerminalOutput>
                <p className='text-2xl'>about</p>
            </TerminalOutput>

        </div >
        
    )
}