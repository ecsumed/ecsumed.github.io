'use client'

import { TypeAnimation } from 'react-type-animation';
import './css/terminal.css';
import { useState } from 'react';

const interleave = (arr, thing) => [].concat(...arr.map(n => [n, thing])).slice(0, -1)

export const TerminalCommand = ({ command, delay, children }) => {
    const [showOutput, setShowOutput] = useState(false)

    var seq = interleave(command, delay)

    seq.push(
        (el) => {
            el.classList.remove("type");
            setShowOutput(true);
        }
    )
    return (
        <div className='h-72'>
            <TypeAnimation
                sequence={seq}
                wrapper="span"
                speed={25}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={0}
                cursor={false} // omit the default css typing animation class
                className="type"
            />

            {showOutput && children}
        </div>

    );
};