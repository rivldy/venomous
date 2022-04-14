import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im'

export default function Sidebar({ showSidebar, setShowSidebar }) {
    const closeSidebarHandler = () => {
        setShowSidebar(false);

        // Unsets Background Scrolling to use when SideDrawer/Modal is closed
        document.body.style.overflow = 'unset';
    }
    
    return (
        <>
        {/* Sidebar */}
        { showSidebar && (
            <>
            <div className="overlay"></div>

            <div className="sidebar">
                <div className="flex justify-end">
                    <button type='button' className="sidebar-hamburger" onClick={closeSidebarHandler}>
                        <ImCross />
                    </button>
                </div>
                <ul className="flex flex-1 flex-col justify-center space-y-4 ml-6 overflow-hidden">
                    <li>
                        <Link className="nav-link-sidebar" to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link className="nav-link-sidebar" to="/help">Customer Service</Link>
                    </li>
                    <li>
                        <Link className="nav-link-sidebar" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="nav-link-sidebar text-primary" to="/">Get Venomous</Link>
                    </li>
                </ul>
            </div>
            </>
        ) }
        </>
    )
}