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

const downloadFaqs = [
    {
        question: "Should I use a free VPN software?",
        answer: "No. Using free VPNs is the same as giving your information away to a stranger online. Free virtual private network providers have to maintain an infrastructure to keep their service running, so they need to make money somehow. Since you're not paying for their service, they may collect your data and sell it to advertisers, use your device as an exit node for paying users, or even add your computer to a botnet network. It will also most likely won't work well - the VPN connection is usually unstable and slow, internet data is left unencrypted, and your IP address and location aren't sufficiently hidden. The best VPN providers with zero-knowledge architecture will respect your privacy and protect your data. So instead of risking your data, find a reliable VPN service. Most providers offer yearly plans that cost $40.00-$70.00, but a lot of them also have two-year subscriptions that go for $60.00-$80.00. Still not sure? You can try NordVPN risk-free with our 30-day money-back guarantee."
    },
    {
        question: "Is it legal to use a VPN?",
        answer: "Using a virtual private network is legal in most countries, including Australia, Canada, the UK, Germany, and the US. A few have banned them altogether, and some have strict laws in place to regulate how VPN clients are used. These laws are usually there to ensure the government can track its citizens' actions online, but the best VPN service providers can bypass these restrictions. If you plan to travel to a country with government censorship and wish to keep your connection with home, we suggest downloading the NordVPN app and getting your subscription before you set off."
    },
    {
        question: "Are there any drawbacks of using a VPN?",
        answer: "There are, but not many - the benefits usually outweigh the drawbacks. The main drawback of using a VPN is a slower internet connection. After all, your device has to connect to a VPN server before traveling to your desired website. This little detour naturally takes at least some time. That's why you have to look for a VPN service that offers the best speeds. For example, if you choose NordVPN's NordLynx protocol, you'll hardly notice any difference at all - it's been proven to be the fastest one on the market."
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
                    <h2 className="mb-10 text-4xl font-bold text-center">Frequently Asked Questions</h2>
                    <div className="flex flex-col w-full mx-auto space-y-5 lg:w-4/5 xl:w-2/3">
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
                <h2 className="mb-10 text-4xl font-bold text-center">Frequently Asked Questions</h2>
                <div className="flex flex-col w-full mx-auto space-y-5 lg:w-4/5 xl:w-2/3">
                    { pricingFaqs.map((faq, index) => (
                        <AccordionFaq faq={faq} key={index} />
                    )) }
                </div>
            </div>
        </div>
    )
}


export function DownloadFaq()  {
    return (
        <div className="w-full py-20 bg-zinc-50">
            <div className="container">
                <h2 className="mb-10 text-4xl font-bold text-center">Frequently Asked Questions</h2>
                <div className="flex flex-col w-full mx-auto space-y-5 lg:w-4/5 xl:w-2/3">
                    { downloadFaqs.map((faq, index) => (
                        <AccordionFaq faq={faq} key={index} />
                    )) }
                </div>
            </div>
        </div>
    )
}