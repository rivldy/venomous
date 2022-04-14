import appStore from '../app-store-logo.svg'
import googlePlay from '../google-play-logo.svg'

export default function Download() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6">
            <h3 className="text-slate-500 font-semibold text-center sm:text-left">Download the Venomous mobile app for iOS and Android platforms.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ButtonDownload 
                    logo={<img src={appStore} className="w-6" />}
                    textTop="Download on the"
                    textBottom="App Store"
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
                <ButtonDownload 
                    logo={<img src={googlePlay} className="w-6" />}
                    textTop="GET IT ON"
                    textBottom="Google Play"
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
            </div>
        </div>
    )
}

function ButtonDownload({ logo, textTop, textBottom, url }) {
    return (
        <button className="btn btn-download btn-grey">
            <a href={url} className="flex items-center space-x-2" target="_blank">
                { logo }
                <div className="flex flex-col text-left">
                    <p className="text-xs">{ textTop }</p>
                    <h4 className="text-lg font-semibold">{ textBottom }</h4>
                </div>
            </a>
        </button>
    )
}