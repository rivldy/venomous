import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        showSidebar: false
    },
    reducers: {
        setShowSidebar: state => {
            state.showSidebar = true
        },
        setHideSidebar: state => {
            state.showSidebar = false
        }
    }
})

export const { setShowSidebar, setHideSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer