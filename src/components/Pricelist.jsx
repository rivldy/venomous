import { PriceCard } from "./Cards";

const cards = [
    {
        yearPlan: "2-year plan",
        price: "3.99",
        save: "51%",
        buttonText: "Get 2-Year Plan",
        discount: {
            before: "198.96",
            after: "95.76",
            text: "for the first 2 years"
        },
        perYear: "99.48",
        bestValue: true
    },
    {
        yearPlan: "1-year plan",
        price: "4.99",
        save: "30%",
        buttonText: "Get 1-Year Plan",
        discount: {
            before: "99.48",
            after: "59.88",
            text: "for the first year"
        },
        perYear: "99.48",
        bestValue: false
    },
    {
        yearPlan: "1-month plan",
        price: "11.99",
        save: "0%",
        buttonText: "Get 1-month Plan",
        discount: {
            bill: "11.99",
            text: "billed every month"
        },
        perYear: "99.48",
        bestValue: false
    },
]

export default function Pricelist() {
    return (
        <div className="price-list">
            <h1 className="text-4xl sm:text-5xl font-bold text-center">Get more than just a VPN</h1>
            <p className="text-lg text-center pt-6">Block malware, trackers, and intrusive ads with FREE Threat Protection.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-2">
                { cards.map((card, id) => (
                    <PriceCard card={card} key={id} />
                )) }
            </div>
        </div>
    )
}