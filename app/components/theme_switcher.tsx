/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */

"use client"

import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react'
import { useTheme } from 'next-themes'


const options = ['light', 'dark', 'system'];

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const [selected, setSelected] = useState(options.indexOf(theme));

    function onChange(i) {        
        setTheme(options[i])
        setSelected((prev) => (i === prev ? i : i));
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div className='rotate-90 flex'>
            {options.map((o, i) => (
                <div className="px-1">
                    <input
                        type="checkbox"
                        checked={i === selected}
                        onChange={() => onChange(i)}
                    />
                    <label key={i}>
                        {o}
                    </label>
                </div>
            ))}
        </div>
    )
}
export default ThemeSwitch