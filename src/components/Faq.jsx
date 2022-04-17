import { Link } from "react-router-dom";
import { AccordionFaq } from "./Accordion";

const homeFaqs = [
    {
        question: "What is Venomous?",
        answer: "Venomous is a VPN provider company whose main goal is to respect the freedom of choice of its customers, make technological innovations, and build a free and safer internet for everyone. With cutting-edge features, transparency and legitimate concern for its users, Venomous is, in short, the best VPN in the world."
    },
    {
        question: "Is it safe to use a VPN?",
        answer: "Using a legitimate (and paid) VPN service is completely safe. The most traditional VPN providers on the market, such as Venomous, are committed to providing an increasingly private and secure connection for all their users. However, one should be careful when using a free VPN. These kinds of tools, apart from not providing quality service, pose a risk to your security as they can track and sell your data to third parties."
    },
    {
        question: "Is online privacy worth the cost?",
        answer: "Yes. By protecting your online privacy, you protect not only your personal life, but also important and sensitive information about yourself, such as bank details, email and social media passwords, and more. The cost paid for greater internet security is well worth it compared to the possible loss due to breaches of your privacy."
    }
]

const pricingFaqs = [
    {
        question: "How do I buy a Venomous subscription?",
        answer: "The best way is to order straight from our website — we offer unbeatable Venomous prices as part of our special deals. All you have to do is scroll up to the top of this page, pick the plan you want, and click Continue to Payment. In the order page, simply enter your email address, select your payment method, and finish the transaction."
    },
    {
        question: "How much does a VPN cost?",
        answer: "Most VPN providers offer monthly and a few different long-term plans. Users usually have to pay for the whole period when they buy a subscription. Naturally, two- and three-year plans offer the best deal. Monthly subscriptions cost $8.00-$13.00/month, while yearly plans most often go for $6.00-$7.00/month."
    },
    {
        question: "Can I buy Venomous in retail stores?",
        answer: "Yes, you can buy Venomous from Best Buy, Target, and other retail locations. If you desire more anonymity, pay in cash. Please keep in mind that Venomous prices may vary for physical products — Venomous costs less when you order a special deal directly from our website."
    },
    {
        question: "How do I upgrade my plan?",
        answer: "You can upgrade your VPN plan at any time — simply visit your user profile, click on Pick a Plan, and select the subscription option you like. It will take effect when your current subscription expires. But this is important — don't forget to cancel the recurring subscription to avoid being charged twice."
    },
    {
        question: "Do you accept PayPal?",
        answer: "In some cases, you can use PayPal to buy a VPN subscription from us. We also accept major credit cards, cryptocurrencies, Amazon Pay, Google Pay, Apple Pay, and many other payment methods. Note that we cannot grant refunds if you purchased the NordVPN app through Apple's App Store - you will have to contact App Store support for that."
    },
]

export function HomeFaq() {
    return (
        <section className="w-full bg-zinc-50">
            <div className="banner">
                <div className="banner-container">
                    <h2 className="banner-title">Get more than just a VPN</h2>
                    <p className="banner-lead">Block malware, trackers and annoying ads with FREE Threat Protection.</p>
                    <button className="banner-button">
                        <Link to="/pricing">Get Promo</Link>
                    </button>
                </div>
            </div>
            <div className="w-full py-20">
                <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                    <div className="w-full lg:w-4/5 xl:w-2/3 mx-auto flex flex-col space-y-5">
                        { homeFaqs.map((faq, index) => (
                            <AccordionFaq faq={faq} key={index} />
                        )) }
                    </div>
                </div>
            </div>
        </section>
    )
}


export function PricingFaq()  {
    return (
        <div className="w-full py-20 bg-zinc-50">
            <div className="container">
                <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                <div className="w-full lg:w-4/5 xl:w-2/3 mx-auto flex flex-col space-y-5">
                    { pricingFaqs.map((faq, index) => (
                        <AccordionFaq faq={faq} key={index} />
                    )) }
                </div>
            </div>
        </div>
    )
}