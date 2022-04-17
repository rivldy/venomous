import { BsFillPlayFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { BiHide } from 'react-icons/bi'
import { ReasonCard } from './Cards'

const reasons = [
    {
        title: "Fastest on the planet",
        desc: "5400+ ultra-fast VPN servers around the globe. Groundbreaking VenomousLynx protocol. No bandwidth limits. Experience top-speed online security with Venomous.",
        icon: <BsFillPlayFill />
    },
    {
        title: "Safe, easy content access",
        desc: "HD movies, live sports, hot TV shows? We got it. It takes just a click or tap to cloak your IP at home or while traveling, letting you view your favorite content in privacy and security.",
        icon: <BsFillCheckCircleFill />
    },
    {
        title: "No-logs policy",
        desc: "We couldn't provide any details about you to third parties even if they asked. Why? Because we never log what you do online. We've got nothing to reveal.",
        icon: <BiHide />
    },
]

export default function Reason() {
    return (
        <div className="w-full bg-zinc-50 my-20">
            <div className="container py-10">
                <h1 className="text-3xl font-bold md:text-5xl text-center">3 reasons to choose Venomous</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-4">
                    { reasons.map((reason, index) => (
                        <ReasonCard key={index} reason={reason} />
                    )) }
                </div>
            </div>
        </div>
    )
}
