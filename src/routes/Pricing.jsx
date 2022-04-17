import { Helmet } from 'react-helmet-async'

import Features from "../components/Features";
import Pricelist from "../components/Pricelist";
import Reason from '../components/Reason';
import Trusted from '../components/Trusted';

export default function Pricing() {
    return (
        <>
            <Helmet>
                <title>VPN cost? Buy VPN with Credit Card, Crypto, iTunes | Venomous</title>
            </Helmet>
            <section className="w-full bg-white">
                <Pricelist />
                <Features />
                <Reason />
                <Trusted />
            </section>
        </>
    )
}