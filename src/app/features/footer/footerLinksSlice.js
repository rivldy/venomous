import { createSlice } from "@reduxjs/toolkit"


const footerLinks = [
    {
        title: "Venomous",
        links: [
            {
                text: "About Us",
                url: ""
            },
            {
                text: "Carrer",
                url: ""
            },
            {
                text: "Free VPN Trial",
                url: ""
            },
            {
                text: "VPN Router",
                url: ""
            },
            {
                text: "Review",
                url: ""
            },
            {
                text: "Student Discount",
                url: ""
            },
            {
                text: "Where to buy",
                url: ""
            },
            {
                text: "Refer to friends",
                url: ""
            },
            {
                text: "Research Lab",
                url: ""
            },
        ]
    },
    {
        title: "VPN Apps",
        links: [
            {
                text: "Windows",
                url: ""
            },
            {
                text: "macOS",
                url: ""
            },
            {
                text: "Linux",
                url: ""
            },
            {
                text: "Android",
                url: ""
            },
            {
                text: "iOS/iPhone/iPad",
                url: ""
            },
            {
                text: "Chrome",
                url: ""
            },
            {
                text: "Firefox",
                url: ""
            },
            {
                text: "Edge",
                url: ""
            },
        ]
    },
    {
        title: "Participate",
        links: [
            {
                text: "What is VPN?",
                url: ""
            },
            {
                text: "IP Search",
                url: ""
            },
            {
                text: "What is my IP",
                url: ""
            },
            {
                text: "Social Responsibility",
                url: ""
            },
            {
                text: "Customer Story",
                url: ""
            },
            {
                text: "Press Area",
                url: ""
            },
            {
                text: "Becoma a Partner",
                url: ""
            },
        ]
    },
    {
        title: "Help",
        links: [
            {
                text: "Support Center",
                url: ""
            },
            {
                text: "Tutorial",
                url: ""
            },
            {
                text: "FAQ",
                url: ""
            },
            {
                text: "Privacy Policy",
                url: ""
            },
            {
                text: "Terms of Service",
                url: ""
            },
            {
                text: "Contact Us",
                url: ""
            },
        ]
    },
    {
        title: "Follow Us",
        links: [
            {
                icon: "facebook",
                text: "Facebook",
                url: ""
            },
            {
                icon: "twitter",
                text: "Twitter",
                url: ""
            },
            {
                icon: "linkedin",
                text: "LinkedIn",
                url: ""
            },
            {
                icon: "youtube",
                text: "YouTube",
                url: ""
            },
            {
                icon: "instagram",
                text: "Instagram",
                url: ""
            },
        ]
    },
    {
        title: "Browse",
        links: [
            {
                text: "Venomous Security",
                url: ""
            },
            {
                text: "VenomousLayer",
                url: ""
            },
            {
                text: "VenomousPass",
                url: ""
            },
            {
                text: "VenomousLocker",
                url: ""
            },
        ]
    }
]

export const footerLinksSlice = createSlice({
    name: "footerLinks",
    initialState: {
        data: footerLinks
    },
    reducers: {

    }
})

export default footerLinksSlice.reducer

