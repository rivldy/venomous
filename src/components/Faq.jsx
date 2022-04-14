import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const faqs = [
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

export default function Faq() {
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
                        { faqs.map(faq => (
                            <Accordion faq={faq} key={faq.question} />
                        )) }
                    </div>
                </div>
            </div>
        </section>
    )
}