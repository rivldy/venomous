import WindowsImg from '../images/windows.svg'
import MacosImg from '../images/macos.svg'
import LinuxImg from '../images/linux.svg'
import AndroidImg from '../images/android.svg'
import IosImg from '../images/ios.svg'
import ChromeImg from '../images/chrome.svg'
import FirefoxImg from '../images/firefox.svg'
import EdgeImg from '../images/edge.svg'
import AndroidtvImg from '../images/android-tv.svg'
import OtherImg from '../images/other.svg'


const platforms = [
    {
        icon: WindowsImg,
        name: "Windows"
    },    
    {
        icon: MacosImg,
        name: "MacOS"
    },    
    {
        icon: LinuxImg,
        name: "Linux"
    },    
    {
        icon: AndroidImg,
        name: "Android"
    },    
    {
        icon: IosImg,
        name: "iOS"
    },    
    {
        icon: ChromeImg,
        name: "Chrome"
    },    
    {
        icon: FirefoxImg,
        name: "Firefox"
    },    
    {
        icon: EdgeImg,
        name: "Edge"
    },    
    {
        icon: AndroidtvImg,
        name: "Android TV"
    },    
    {
        icon: OtherImg,
        name: "Other"
    },    
]

export default function Platform() {
    return (
        <div className="container py-20">
            <h1 className="mb-10 text-3xl font-bold text-center md:text-5xl">Get Venomous for all your devices</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-10">
                { platforms.map((platform, index) => (
                    <a href="" className="flex flex-col items-center justify-center px-3 py-2 space-y-2 border border-transparent rounded-md hover:border-slate-200" key={index}>
                        <img className="w-1/3" src={platform.icon} alt={platform.text} />
                        <span className="text-sm font-semibold">{platform.name}</span>
                    </a>
                )) }
            </div>
        </div>
    )
}