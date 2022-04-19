import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux'
import { setHideSidebar } from '../app/features/header/sidebarSlice'

export default function Sidebar() {
    const showSidebar = useSelector(state => state.sidebar.showSidebar)
    const dispatch = useDispatch()
    
    const closeSidebarHandler = () => {
        dispatch(setHideSidebar())

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
                        <Link className="nav-link-sidebar" to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="nav-link-sidebar" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="nav-link-sidebar" to="/login">Log In</Link>
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