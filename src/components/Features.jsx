import { useState } from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

import { FeatureCard } from "./Cards"
import SafeImg from '../images/safe.svg'
import VaultImg from '../images/vault.svg'
import PaymentsImg from '../images/payments.svg'

export default function Features() {
    const [indexAccord, setIndexAccord] = useState(0)
    const features = useSelector(state => state.features.data)

    return (
        <div className="w-full py-16 bg-white md:py-20">
            <div className="container text-center">
                <h1 className="text-3xl font-bold md:text-5xl">Advanced protection against online threats</h1>
                <p className="mt-6 text-lg md:mt-8">Shield your online activity and stay protected from cyberattacks with cutting-edge Threat Protection.</p>
                <div className="grid grid-cols-1 mt-6 md:grid-cols-3 md:mt-8">
                    { features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    )) }
                </div>
                <Link to="/pricing">
                    <button className="mt-8 btn btn-jumbo btn-primary">Get Venomous</button>
                </Link>
            </div>
            <div className="container flex flex-col mt-20 lg:space-x-10 lg:flex-row lg:items-start lg:justify-between">
                <h2 className="lg:hidden text-3xl font-bold text-center mb-8">Online security and privacy made simple</h2>
                <div className="w-full lg:w-1/2 h-[132px] sm:h-[180px] md:h-[230px] flex justify-center items-center">
                    { indexAccord == 0 && <img src={SafeImg} alt="Security & Privacy" className="h-full" /> }
                    { indexAccord == 1 && <img src={VaultImg} alt="Money back guarantee" className="h-full" /> }
                    { indexAccord == 2 && <img src={PaymentsImg} alt="Convenient payment methods" className="h-full" /> }
                </div>
                <div className="flex-col items-start justify-center hidden w-1/2 space-y-8 lg:flex">
                    <h2 className="text-3xl font-bold">Online security and privacy made simple</h2>
                    {/* Accordions */}
                    {/* Index 0 */}
                    <div className="flex items-center justify-between space-x-8 cursor-pointer" onClick={() => setIndexAccord(0)}>
                        <div className={`w-1 self-stretch ${indexAccord == 0 ? 'bg-primary' : 'bg-slate-400'}`}></div>
                        <div>
                            <h3 className="text-2xl font-semibold">One account, all of your devices</h3>
                            <p className={`text-lg ${indexAccord == 0 ? 'block' : 'hidden'}`}>No need to buy VPN subscriptions separately for your phone and PC. Venomous secures up to 6 devices and is compatible with Windows, macOS, Linux, Android, iOS, and even your Wi-Fi router.</p>
                        </div>
                    </div>
                    {/* Index 1 */}
                    <div className="flex items-center justify-between space-x-8 cursor-pointer" onClick={() => setIndexAccord(1)}>
                        <div className={`w-1 self-stretch ${indexAccord == 1 ? 'bg-primary' : 'bg-slate-400'}`}></div>
                        <div>
                            <h3 className="text-2xl font-semibold">No risk to you or your wallet</h3>
                            <p className={`text-lg ${indexAccord == 1 ? 'block' : 'hidden'}`}>Unsure about Venomous prices or how to buy a VPN subscription? Contact customer support 24/7. And remember — your purchase is always safe with our 30-day money-back guarantee.</p>
                        </div>
                    </div>
                    {/* Index 2 */}
                    <div className="flex items-center justify-between space-x-8 cursor-pointer" onClick={() => setIndexAccord(2)}>
                        <div className={`w-1 self-stretch ${indexAccord == 2 ? 'bg-primary' : 'bg-slate-400'}`}></div>
                        <div>
                            <h3 className="text-2xl font-semibold">Convenient payment methods</h3>
                            <p className={`text-lg ${indexAccord == 2 ? 'block' : 'hidden'}`}>Saw our VPN prices and decided to buy a VPN subscription? Great! That's easy — we accept online payment services, credit cards, and even some cryptocurrencies.</p>
                        </div>
                    </div>
                </div>

                {/* Mobile Feature Card */}
                { indexAccord == 0 && (
                    <div className="mt-10 text-center lg:hidden">
                        <h3 className="text-2xl font-semibold">One account, all of your devices</h3>
                        <p className="mt-4 text-lg">No need to buy VPN subscriptions separately for your phone and PC. Venomous secures up to 6 devices and is compatible with Windows, macOS, Linux, Android, iOS, and even your Wi-Fi router.</p>
                    </div>
                ) }
                { indexAccord == 1 && (
                    <div className="mt-10 text-center lg:hidden">
                        <h3 className="text-2xl font-semibold">No risk to you or your wallet</h3>
                        <p className="mt-4 text-lg">Unsure about Venomous prices or how to buy a VPN subscription? Contact customer support 24/7. And remember — your purchase is always safe with our 30-day money-back guarantee.</p>
                    </div>
                ) }
                { indexAccord == 2 && (
                    <div className="mt-10 text-center lg:hidden">
                        <h3 className="text-2xl font-semibold">Convenient payment methods</h3>
                        <p className="mt-4 text-lg">Saw our VPN prices and decided to buy a VPN subscription? Great! That's easy — we accept online payment services, credit cards, and even some cryptocurrencies.</p>
                    </div>
                ) }

                {/* Three dots */}
                <div className="flex items-center justify-center mt-8 space-x-4 lg:hidden">
                    <div 
                    className={`w-3 h-3 border rounded-full ${indexAccord == 0 ? 'border-primary bg-primary' : 'border-slate-600 bg-slate-100'}`}
                    onClick={() => setIndexAccord(0)}
                    ></div>
                    <div 
                    className={`w-3 h-3 border rounded-full ${indexAccord == 1 ? 'border-primary bg-primary' : 'border-slate-600 bg-slate-100'}`}
                    onClick={() => setIndexAccord(1)}
                    ></div>
                    <div 
                    className={`w-3 h-3 border rounded-full ${indexAccord == 2 ? 'border-primary bg-primary' : 'border-slate-600 bg-slate-100'}`}
                    onClick={() => setIndexAccord(2)}
                    ></div>
                </div>
            </div>
        </div>
    )
}