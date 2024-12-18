/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */

"use client"

import { useState, useEffect } from 'react'
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
        <div className='flex'>
            {options.map((o, i) => (
                <div className="" key={i}>
                    <input
                        type="checkbox"
                        checked={i === selected}
                        onChange={() => onChange(i)}
                        className="mb-1 appearance-none w-3 h-3 border-solid border-2 border-gray-950 dark:border-stone-100 checked:bg-gray-500"
                        id={`checkbox-${i}`}
                    />
                    <label htmlFor={`checkbox-${i}`} className="mb-2 capitalize">
                        {o}
                    </label>
                </div>
            ))}
        </div>
    )
}
export default ThemeSwitch