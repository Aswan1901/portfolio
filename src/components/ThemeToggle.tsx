import { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
    const [dark, setDark] = useState(
        () => localStorage.getItem('theme') === 'dark'
    )

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    return (
        <button
            onClick={() => setDark(!dark)}
            className="text-sm px-3 py-1 rounded-full border border-border transition"
        >
            {dark ? <IoSunny/> : <FaMoon/>}
        </button>
    )
}