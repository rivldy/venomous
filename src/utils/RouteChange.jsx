import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setHideSidebar } from '../app/features/header/sidebarSlice'

export default function ScrollToTop({ children }) {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(setHideSidebar())
    }, [location])

    return <>{children}</>
}