import { createSlice } from "@reduxjs/toolkit"

import hannahBusing from '../../../images/twitters/hannah-busing.jpg'
import jonathanPendleton from '../../../images/twitters/jonathan-pendleton.jpg'
import maryJane from '../../../images/twitters/mary-jane.jpg'

const twitters = [
    {
        author: {
            name: "Hannah Busing",
            username: "HannahBusing22",
            avatar: hannahBusing
        },
        text: "Everyone should be using a VPN, but sometimes they can be tricky to set up and/or optimize. Thankfully I was able to get in touch with Venomous and fix the speed issues I was having in a matter of seconds. Their service and discounts are really enticing!",
        date: "5:58 AM - 2 Nov 2021",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        author: {
            name: "Jon Pendleton",
            username: "JPendleton",
            avatar: jonathanPendleton
        },
        text: "Definitely my go-to VPN software! Tried many others in the past however im staying with Venomous since 4 years now. Top notch speed and reliability, user friendly for all devices, strict no log policy and they have the best customer service ever! #ItsDoomber Keep it up !",
        date: "10:54 AM - 21 Oct 2021",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        author: {
            name: "Mary J",
            username: "MaryJane72",
            avatar: maryJane
        },
        text: "If anyone is sceptic about Venomous service quality, their services by default is really good, whats even better is their support when I face some issues, very responsive support and very helpful and they never disappoint, keep it up Venomous.",
        date: "8:20 PM - 7 Oct 2021",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]

export const twittersSlice = createSlice({
    name: "twitters",
    initialState: {
        data: twitters
    },
    reducers: {

    }
})

export default twittersSlice.reducer