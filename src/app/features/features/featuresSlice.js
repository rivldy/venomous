import { createSlice } from "@reduxjs/toolkit";

const features = [
    {
        title: "Malware protection",
        desc: "Get warnings about unsafe sites and automatically scan all downloaded files and attachments.",
    },
    {
        title: "Tracker blocker",
        desc: "Stop third-party sites from tracking your online activity to serve you targeted advertising and unfair pricing.",
    },
    {
        title: "Ad blocker",
        desc: "Block all intrusive ads and annoying pop-ups for a smooth, uninterrupted browsing experience.",
    },
]

export const featuresSlice = createSlice({
    name: "features",
    initialState: {
        data: features
    },
    reducers: {

    }
})

export default featuresSlice.reducer