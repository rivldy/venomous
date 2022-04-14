import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Header() {
    const [showSidebar, setShowSidebar] = useState(false)
    
    return (
        <>
            <Navbar setShowSidebar={setShowSidebar} />
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </>
    )
}