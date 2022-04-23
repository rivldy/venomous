import { Helmet } from 'react-helmet-async'
import DownloadHero from '../components/DownloadHero'
import Testimonial from '../components/Testimonial'
import Platform from '../components/Platform'
import { DownloadFaq } from '../components/Faq'
import MoneyBack from '../components/MoneyBack'

export default function Download() {
    return (
        <>
            <Helmet>
                <title>Free VPN Download | Venomous</title>
            </Helmet>
            <section className="w-full bg-white">
                <DownloadHero />
                <Testimonial />
                <Platform />
                <DownloadFaq />
                <MoneyBack />
            </section>
        </>
    )
}