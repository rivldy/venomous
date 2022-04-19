import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setShowSidebar } from '../app/features/header/sidebarSlice'

import logo from '../logo.svg'

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false)
    const dispatch = useDispatch()

    const changeNavbarBackground = () => {
        if(window.scrollY > 20) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }

    useEffect(() => {
        changeNavbarBackground()
        window.addEventListener("scroll", changeNavbarBackground)
    })
    
    return(
        <>
        <nav className={`navbar ${isScroll ? 'border-b border-slate-200' : ''}`}>
            <div className="container flex items-center justify-between w-full">
                <div className="flex items-center space-x-6">
                    <Link to="/">
                        <img src={logo} alt="Venomous Logo" className="logo" />
                    </Link>
                    <span className="hidden md:block w-[1px] self-stretch bg-slate-400"></span>
                    <ul className="justify-center flex-1 hidden space-x-4 md:flex">
                        <li>
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <div className="flex items-center space-x-3">
                        <Link className="nav-link" to="/login">Log In</Link>
                        <Link to="/pricing">
                            <button className="btn btn-simple btn-primary">Get Venomous</button>
                        </Link>
                    </div>
                </div>


                {/* Mobile View */}

                {/* Hamburger */}
                <button type='button' className="hamburger" onClick={() =>  dispatch(setShowSidebar())}>
                    <span className="h-0.5 w-full bg-slate-800"></span>
                    <span className="h-0.5 w-full bg-slate-800"></span>
                    <span className="h-0.5 w-full bg-slate-800"></span>
                </button>
            </div>
        </nav>
        
        </>
    )
}