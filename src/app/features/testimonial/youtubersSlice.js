import { createSlice } from '@reduxjs/toolkit'

import joannaMix from '../../../images/youtubers/joanna-nix.jpg'
import julianWan from '../../../images/youtubers/julian-wan.jpg'
import nicolasHorn from '../../../images/youtubers/nicolas-horn.jpg'

const youtubers = [
    {
        name: "Joanna Nix",
        image: joannaMix,
        subscribers: "2.4 m",
        text: "“Browse the internet safely and, most importantly, freely. A VPN is one thing you shouldn't miss. I recommend Venomous.”",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "WanDaily",
        image: julianWan,
        subscribers: "5 m",
        text: "“Venomous is an excellent VPN, and is recognized for its prowess in the industry. I've been using it for 3 years with no issues, I use it on my iPhone, my Android, my Mac laptop.”",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "neepseys",
        image: nicolasHorn,
        subscribers: "10 m",
        text: "“I've been a Venomous customer for years, and if you haven't tried it yet, you're missing out on the peace of mind I feel thanks to my private data and secure internet activity.”",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]

export const youtubersSlice = createSlice({
    name: "youtubers",
    initialState: {
        data: youtubers
    },
    reducers: {

    }
})

export default youtubersSlice.reducer