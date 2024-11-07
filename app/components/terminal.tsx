'use client'

import { TypeAnimation } from 'react-type-animation';
import './css/terminal.css';
import { useEffect, useState } from 'react';

export const TerminalCommand = ({ command }) => {
    return (
        <TypeAnimation
            sequence={command}
            wrapper="span"
            speed={25}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={0}
            cursor={false} // omit the default css typing animation class
            className="type"
        />
    );
};

export const TerminalOutput = ({ children }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 2500)
        return () => clearTimeout(timeout)
    }, [show])

    if (!show) return (
        <div className='h-40'>

        </div>
    )

    return (
        <div>
            {children}
        </div>
    );
};