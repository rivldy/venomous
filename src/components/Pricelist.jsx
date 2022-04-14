import { useSelector } from 'react-redux'

import { PriceCard } from "./Cards"

export default function Pricelist() {
    const pricings = useSelector(state => state.pricings.data)
    
    return (
        <div className="price-list">
            <h1 className="text-4xl sm:text-5xl font-bold text-center">Get more than just a VPN</h1>
            <p className="text-lg text-center pt-6">Block malware, trackers, and intrusive ads with FREE Threat Protection.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-2">
                { pricings.map((pricing, id) => (
                    <PriceCard pricing={pricing} key={id} />
                )) }
            </div>
        </div>
    )
}