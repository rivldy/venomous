import { useSelector } from "react-redux"
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'

import Download from "./Download"
import creditCards from '../images/credit-cards.svg'

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
    const footerLinks = useSelector(state => state.footerLinks.data)

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
                                            { link.icon == "facebook" && <FaFacebookF />}
                                            { link.icon == "twitter" && <FaTwitter />}
                                            { link.icon == "linkedin" && <FaLinkedin />}
                                            { link.icon == "youtube" && <FaYoutube />}
                                            { link.icon == "instagram" && <FaInstagram />}
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