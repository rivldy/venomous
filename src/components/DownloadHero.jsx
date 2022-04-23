import { BsCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import VpnImg from '../images/vpn.svg'


const downloadFeatures = [
    "The best online experience with the fastest VPN for PC",
    "Easy VPN setup for Windows 7 Service Pack 1, Windows 8.1, Windows 10 (version 1607 or later), and Windows 11",
    "Choose the data you want to protect with split tunneling"
]

export default function DownloadHero() {
    return (
        <div className="container py-28">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-3xl font-bold text-center md:text-5xl md:text-left">Download Venomous app for Windows PC</h1>
                    <ul className="mt-6 md:mt-8">
                        { downloadFeatures.map((text, index) => (
                            <li className="flex my-2" key={index}>
                                <BsCheck className="inline mr-2 text-2xl" />
                                <span className="flex-1 text-lg font-semibold">{text}</span>
                            </li>
                        )) }
                    </ul>
                    <div className="flex flex-col w-full mt-8 space-y-3 md:flex-row md:items-center md:justify-start md:space-x-3 md:space-y-0">
                        <Link to="/pricing">
                            <button className="w-full text-lg font-semibold md:text-sm lg:text-lg md:w-fit btn btn-jumbo btn-bordered btn-primary">Buy Venomous</button>
                        </Link>
                        <button className="w-full text-lg font-semibold md:text-sm lg:text-lg md:w-fit btn btn-jumbo btn-bordered btn-outline-grey">Download App</button>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                    <img src={VpnImg} alt="Download Venomous" className="w-full md:w-fit" />
                </div>
            </div>
        </div>
    )
}