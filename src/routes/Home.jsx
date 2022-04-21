import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import Service from '../components/Service'
import securityImg from '../images/security.svg'
import Testimonial from '../components/Testimonial'
import { HomeFaq } from '../components/Faq'


export default function Home() {

    const services = useSelector(state => state.services.data)
    
    return (
        <>
        <Helmet>
            <title>Get Secure Internet Connection - Venomous VPN</title>
        </Helmet>
        {/* Hero */}
        <section className="relative w-full bg-white">
            <div className="jumbotron">
                <div className="flex-1 h-screen space-y-10 text-center lg:h-fit lg:text-left">
                    <h1 className="text-5xl font-bold">Best Internet Security Tool</h1>
                    <p className="text-lg font-semibold">More than VPN service. Block spyware and malware with our new feature - Threat Protection.</p>
                    <button type="button" className="w-2/3 btn btn-jumbo btn-primary lg:w-fit">
                        <Link to="/pricing">
                            Get Started
                        </Link>
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
        <HomeFaq />
        </>
    )
}