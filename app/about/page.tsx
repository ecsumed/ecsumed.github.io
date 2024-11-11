import { TerminalCommand } from '../components/terminal'

export default function Page() {
    return (

        <div className='p-3 rounded h-50 terminal'>
            <TerminalCommand command={["$ whoami && cat about-me.md | renderHTML"]} delay={1000}>
                <p className='text-2xl'>about</p>
            </TerminalCommand>
        </div >
    )
}

