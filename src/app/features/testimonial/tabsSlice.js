import { createSlice } from '@reduxjs/toolkit'

const tabs = ["YouTube", "Tweet", "Tech Reviewer"]

export const tabsSlice = createSlice({
    name: "tabs",
    initialState: {
        data: tabs
    },
    reducers: {

    }
})

export default tabsSlice.reducer