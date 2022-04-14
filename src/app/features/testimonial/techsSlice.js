import { createSlice } from '@reduxjs/toolkit'

import brianKen from '../../../images/techs/brian-ken.jpg'
import jamesCarlsen from '../../../images/techs/james-carlsen.jpg'

const techs = [
    {
        author: {
            name: "Brian Ken",
            company: "PC Master",
            position: "Software Analyst",
            photo: brianKen
        },
        text: "“Compared to other VPN services, it's hard to beat Venomous. The service offers many and varied servers, great advanced features, strong privacy and security practices, and user-friendly clients for all major platforms.”"
    },
    {
        author: {
            name: "James Carlsen",
            company: "Tech Daily",
            position: "Tech Reviewer",
            photo: jamesCarlsen
        },
        text: "“The bottom line: When you're online, don't worry about security anymore or worry about your information being leaked when using a VPN. Venomous makes it easy.”"
    }
]

export const techsSlice = createSlice({
    name: "techs",
    initialState: {
        data: techs
    },
    reducers: {

    }
})

export default techsSlice.reducer