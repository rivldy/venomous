import Service from '../components/Service'
import securityImg from '../security.svg'
import certificationImg from '../certification.svg'
import justbrowsingImg from '../just_browsing.svg'
import powerfulImg from '../powerful.svg'
import personaldataImg from '../personal_data.svg'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'


export default function Home() {

    const services = [
        {
            invert: false,
            image: powerfulImg,
            title: "Our new feature will protect you from Adware, Spyware, and Malware",
            description: "Increase your cybersecurity with Venomous's Threat Protection. You do not need to be connected to a VPN server for this feature to work. Once you enable it in settings, Threat Protection will continue to make your browsing safer and smoother. Don't worry about accidentally opening a malicious website, downloading malware, or being bothered by annoying trackers and ads. Threat Protection will eradicate cyber threats before any real damage is done to your device or data.",
            buttonText: "Learn more"
        },
        {
            invert: true,
            image: justbrowsingImg,
            title: "Get secure and private access to the internet",
            description: "A VPN service provides you with a secure, encrypted tunnel for your online traffic to flow. No one can see into those tunnels and get your internet data. Venomous is the best VPN if you want peace of mind when using public Wi-Fi. Access your personal information or work files securely, encrypt your internet connection, and keep your browsing history private. Buy a VPN for online privacy and security.",
            buttonText: "See More Features"
        },
        {
            invert: false,
            image: personaldataImg,
            title: "Protect all your devices",
            description: "Do you use Windows at work, MacOS at home, and Linux for your special projects? You can still enjoy online privacy and security with any platform. The Venomous app is available for Windows, macOS, iOS, Android, and Linux. There are also encrypted proxy extensions for Chrome, Firefox, and Edge. And best of all, with one Venomous account, you can secure up to 6 devices at once. Here are the best VPN providers for all your devices.",
            buttonText: "Choose Your Apps"
        },
        {
            invert: true,
            image: certificationImg,
            title: "Enjoy fast and stable connection anywhere",
            description: "Buffering is annoying because you have to stream and download files on a slow internet connection. Don't worry — Venomous has the upper hand over other VPN services thanks to its excellent combination of tamper-proof security, high-speed connections, and unlimited bandwidth. Choose from NordVPN's 5400+ servers in 60 countries and enjoy the fastest VPN experience. Thousands of VPN servers will ensure your internet connection is hassle free. So, activate the VPN, access websites, download files, stream videos and enjoy a fast internet connection.",
            buttonText: "Check Location"
        }
    ]

    return (
        <>
        {/* Hero */}
        <section className="w-full bg-white relative">
            <div className="jumbotron">
                <div className="flex-1 space-y-10 h-screen lg:h-fit text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Best Internet Security Tool</h1>
                    <p className="text-lg font-semibold">More than VPN service. Block spyware and malware with our new feature - Threat Protection.</p>
                    <button type="button" className="btn btn-jumbo btn-primary w-2/3 lg:w-fit">
                        <a href="">Try Now</a>
                    </button>
                </div>
                <img src={securityImg} alt="Security" className="w-4/5 sm:w-1/2" />
            </div>
        </section>
        {/* Service */}
        { services.map(service => (
            <Service
                invert={service.invert}
                image={service.image}
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                key={service.title}
            />
        )) }
        {/* Testimonial */}
        <Testimonial />
        {/* Faq */}
        <Faq />
        </>
    )
}