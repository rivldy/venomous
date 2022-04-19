import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        showSidebar: false
    },
    reducers: {
        setShowSidebar: state => {
            state.showSidebar = true
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
            }
        },
        setHideSidebar: state => {
            state.showSidebar = false
            document.body.style.overflow = 'unset';
        }
    }
})

export const { setShowSidebar, setHideSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer