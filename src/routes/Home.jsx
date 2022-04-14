import { useSelector } from 'react-redux'

import Service from '../components/Service'
import securityImg from '../security.svg'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'


export default function Home() {

    const services = useSelector(state => state.services.data)
    
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