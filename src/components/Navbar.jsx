import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default function Navbar({ setShowSidebar }) {
    const [isScroll, setIsScroll] = useState(false)
    
    const showSidebarHandler = () => {
        setShowSidebar(true)

        // Disables Background Scrolling whilst the SideDrawer/Modal is open
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

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
            <div className="container w-full flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="Venomous Logo" className="logo" />
                </Link>

                <ul className="hidden md:flex flex-1 justify-center space-x-4">
                    <li>
                        <Link className="nav-link" to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/help">Customer Service</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>

                <div className="hidden md:block">
                    <button className="btn btn-simple btn-primary">Get Venomous</button>
                </div>


                {/* Mobile View */}

                {/* Hamburger */}
                <button type='button' className="hamburger" onClick={showSidebarHandler}>
                    <span className="h-0.5 w-full bg-slate-800"></span>
                    <span className="h-0.5 w-full bg-slate-800"></span>
                    <span className="h-0.5 w-full bg-slate-800"></span>
                </button>
            </div>
        </nav>
        
        </>
    )
}