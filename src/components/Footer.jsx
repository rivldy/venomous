import Download from "./Download";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'
import creditCards from '../credit-cards.svg'


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
                icon: <FaFacebookF />,
                text: "Facebook",
                url: ""
            },
            {
                icon: <FaTwitter />,
                text: "Twitter",
                url: ""
            },
            {
                icon: <FaLinkedin />,
                text: "LinkedIn",
                url: ""
            },
            {
                icon: <FaYoutube />,
                text: "YouTube",
                url: ""
            },
            {
                icon: <FaInstagram />,
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

export default function Footer() {
    return (
        <footer className="w-full bg-slate-800 py-8">
            <div className="container">
                <Download />
                <hr className="hidden md:block my-10 border border-slate-500 h-0" />
                <FooterLinks />
                <FooterCopyright />
            </div>
        </footer>
    )
}


function FooterLinks() {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8">
            { footerLinks.map(footLink => (
                <div className="p-2" key={footLink.title}>
                    <h4 className="text-xl text-slate-500">{footLink.title}</h4>
                    <ul className="mt-4">
                        { footLink.links.map(link => (
                            <li className="my-3" key={link.text}><a href={link.url}>
                                <span className={`text-white hover:text-slate-500 font-semibold ${link.icon ? 'flex items-center' : ''}`}>
                                    { link.icon && (
                                        <span className="mr-2 text-slate-500">
                                            { link.icon }
                                        </span>
                                    ) }
                                    {link.text}
                                </span>
                            </a></li>
                        )) }
                    </ul>
                </div>
            )) }
        </div>
    )
}


function FooterCopyright() {
    return (
        <div className="w-full flex flex-col md:flex-row md-space-x-4 md:justify-between md:items-center mt-20">
            <span className="text-sm text-slate-500 font-semibold">© 2022 Venomous Security. All Rights Reserved · support@venomous.com</span>
            <img src={creditCards} alt="Payment Methods" className="w-52 order-first md:order-last mb-6 md:mb-0" />
        </div>
    )
}