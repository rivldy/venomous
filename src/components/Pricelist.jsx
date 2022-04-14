import { useSelector } from 'react-redux'

import { PriceCard } from "./Cards"

export default function Pricelist() {
    const pricings = useSelector(state => state.pricings.data)
    const youtuber = useSelector(state => state.youtubers.data[0])
    
    return (
        <div className="price-list">
            <h1 className="text-4xl font-bold text-center sm:text-5xl">Get more than just a VPN</h1>
            <p className="pt-6 text-lg text-center">Block malware, trackers, and intrusive ads with FREE Threat Protection.</p>
            <div className="grid grid-cols-1 gap-2 my-10 lg:grid-cols-3">
                { pricings.map((pricing, id) => (
                    <PriceCard pricing={pricing} key={id} />
                )) }
            </div>
            <div className="quote">
                <div className="hidden quote-avatar md:block">
                    <img src={youtuber.image} alt={youtuber.name} />
                </div>
                <div className="flex space-x-4 md:flex-col md:space-x-0">
                    <div className="quote-avatar md:hidden">
                        <img src={youtuber.image} alt={youtuber.name} />
                    </div>
                    <div className="quote-container">
                        <span className="quote-name">{youtuber.name}</span>
                        <span className="quote-name-subs">{youtuber.subscribers} subscribers</span>
                    </div>
                    <div className="hidden py-2 md:block">
                        <p className="text-slate-600">{youtuber.text}</p>
                    </div>
                </div>
                <div className="py-2 md:hidden">
                    <p className="text-lg text-slate-600">{youtuber.text}</p>
                </div>
            </div>
        </div>
    )
}