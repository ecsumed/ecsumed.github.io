'use client'

import { TypeAnimation } from 'react-type-animation';
import './css/terminal.css';

export const ExampleComponent = () => {
    return (
      <TypeAnimation
        sequence={[
          '$ ls -lggo',
          1000,
          '$ ls -lgo',
          1000,
        ]}
        wrapper="span"
        speed={25}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={0}
        cursor={false} // omit the default css typing animation class
        className="type bg-slate-300 dark:bg-zinc-800 dark:text-white"
      />
    );
  };