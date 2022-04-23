import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux'
import { setHideSidebar } from '../app/features/header/sidebarSlice'

export default function Sidebar() {
    const showSidebar = useSelector(state => state.sidebar.showSidebar)
    const dispatch = useDispatch()
    
    return (
        <>
        {/* Sidebar */}
        { showSidebar && (
            <>
            <div className="overlay"></div>

            <div className="sidebar">
                <div className="flex justify-end">
                    <button type='button' className="sidebar-hamburger" onClick={() => dispatch(setHideSidebar())}>
                        <ImCross />
                    </button>
                </div>
                <ul className="flex flex-col justify-center flex-1 ml-6 space-y-4 overflow-hidden">
                    <li>
                        <Link className="nav-link-sidebar" to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link className="nav-link-sidebar" to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="nav-link-sidebar" to="/download">Download</Link>
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