import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggler = () => {

    const elem: any = useRef()
    const themeData = localStorage.getItem('theme') || 'light'
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        setTheme(themeData)
    }, [themeData])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)

        if (theme === 'dark') {
            elem.current.style.transform = 'translate(200%)';
        } else if (theme === 'light') {
            elem.current.style.transform = 'translate(40%)';
        }

    }, [theme])


    const onClick = () => {
    
        if (theme === 'dark') {
            localStorage.setItem('theme', 'light')
            setTheme('light');
        } else if (theme === 'light') {
            localStorage.setItem('theme', 'dark')
            setTheme('dark');
        }
    }

    return (
        <div className="theme-toggler">
            <div className="picker" ref={elem}></div>
            <FaSun size={24} className="icon" onClick={onClick} />
            <FaMoon size={24} className="icon" onClick={onClick} />
        </div>
    )
}

export default ThemeToggler
