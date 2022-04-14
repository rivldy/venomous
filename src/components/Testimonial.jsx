import { useState, useEffect } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { TechReviewerCard, TweetCard, YoutubeCard } from './Cards'

import joannaMix from '../images/youtubers/joanna-nix.jpg'
import julianWan from '../images/youtubers/julian-wan.jpg'
import nicolasHorn from '../images/youtubers/nicolas-horn.jpg'

import hannahBusing from '../images/twitters/hannah-busing.jpg'
import jonathanPendleton from '../images/twitters/jonathan-pendleton.jpg'
import maryJane from '../images/twitters/mary-jane.jpg'

import brianKen from '../images/techs/brian-ken.jpg'
import jamesCarlsen from '../images/techs/james-carlsen.jpg'

const tabs = ["YouTube", "Tweet", "Tech Reviewer"]

const youtubers = [
    {
        name: "Joanna Nix",
        image: joannaMix,
        subscribers: "2.4 m",
        text: "“Browse the internet safely and, most importantly, freely. A VPN is one thing you shouldn't miss. I recommend Venomous.”",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "WanDaily",
        image: julianWan,
        subscribers: "5 m",
        text: "“Venomous is an excellent VPN, and is recognized for its prowess in the industry. I've been using it for 3 years with no issues, I use it on my iPhone, my Android, my Mac laptop.”",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        name: "neepseys",
        image: nicolasHorn,
        subscribers: "10 m",
        text: "“I've been a Venomous customer for years, and if you haven't tried it yet, you're missing out on the peace of mind I feel thanks to my private data and secure internet activity.”",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]

const twitters = [
    {
        author: {
            name: "Hannah Busing",
            username: "HannahBusing22",
            avatar: hannahBusing
        },
        text: "Everyone should be using a VPN, but sometimes they can be tricky to set up and/or optimize. Thankfully I was able to get in touch with Venomous and fix the speed issues I was having in a matter of seconds. Their service and discounts are really enticing!",
        date: "5:58 AM - 2 Nov 2021",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        author: {
            name: "Jon Pendleton",
            username: "JPendleton",
            avatar: jonathanPendleton
        },
        text: "Definitely my go-to VPN software! Tried many others in the past however im staying with Venomous since 4 years now. Top notch speed and reliability, user friendly for all devices, strict no log policy and they have the best customer service ever! #ItsDoomber Keep it up !",
        date: "10:54 AM - 21 Oct 2021",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        author: {
            name: "Mary J",
            username: "MaryJane72",
            avatar: maryJane
        },
        text: "If anyone is sceptic about Venomous service quality, their services by default is really good, whats even better is their support when I face some issues, very responsive support and very helpful and they never disappoint, keep it up Venomous.",
        date: "8:20 PM - 7 Oct 2021",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]

const techs = [
    {
        author: {
            name: "Brian Ken",
            company: "PC Master",
            position: "Software Analyst",
            photo: brianKen
        },
        text: "“Compared to other VPN services, it's hard to beat Venomous. The service offers many and varied servers, great advanced features, strong privacy and security practices, and user-friendly clients for all major platforms.”"
    },
    {
        author: {
            name: "James Carlsen",
            company: "Tech Daily",
            position: "Tech Reviewer",
            photo: jamesCarlsen
        },
        text: "“The bottom line: When you're online, don't worry about security anymore or worry about your information being leaked when using a VPN. Venomous makes it easy.”"
    }
]

export default function Testimonial() {
    const [currentTab, setCurrentTab] = useState(tabs[0])
    const [prevBtnDisable, setPrevBtnDisable] = useState(true)
    const [nextBtnDisable, setNextBtnDisable] = useState(false)

    const prevTabHandler = () => {
        setCurrentTab(tabs[tabs.findIndex(tab => tab == currentTab) - 1])
    }

    const nextTabHandler = () => {
        setCurrentTab(tabs[tabs.findIndex(tab => tab == currentTab) + 1])
    }

    useEffect(() => {
        if(tabs.indexOf(currentTab) >= (tabs.length - 1)) {
            setNextBtnDisable(true)
        } else if(tabs.indexOf(currentTab) <= 0) {
            setPrevBtnDisable(true)
        } else {
            setPrevBtnDisable(false)
            setNextBtnDisable(false)
        }
    }, [currentTab])
    
    
    return (
        <section className="w-full bg-white py-20">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">However, don't just take our word for it</h1>
                    <p className="text-lg pt-5">Find out what people are saying about Venomous.</p>
                </div>
                <div className="pt-20">
                    {/* All tabs */}
                    <div className="hidden sm:flex justify-center">
                        { tabs.map((tab, index) => (
                            <button className={`tabs ${tab == currentTab ? "border-primary text-primary" : "border-transparent"}`} onClick={() => setCurrentTab(tabs[index])} key={tab}>{tab}</button>
                        )) }
                    </div>
                    {/* Individual tab */}
                    <div className="flex sm:hidden justify-around items-center">
                        <button className={`single-tab-arrow ${prevBtnDisable ? "single-tab-arrow-disable" : "cursor-pointer"}`} onClick={prevTabHandler} disabled={prevBtnDisable}>
                            <BsFillArrowLeftCircleFill />
                        </button>
                        <div className="single-tab">{currentTab}</div>
                        <button className={`single-tab-arrow ${nextBtnDisable ? "single-tab-arrow-disable" : "cursor-pointer"}`} onClick={nextTabHandler} disabled={nextBtnDisable}>
                            <BsFillArrowRightCircleFill />
                        </button>
                    </div>
                </div>
                {/* Youtube cards */}
                { tabs.indexOf(currentTab) == 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-10">
                        { youtubers.map(youtuber => (
                            <YoutubeCard youtuber={youtuber} key={youtuber.name} />
                        )) }
                    </div>
                ) }
                {/* Twitter cards */}
                { tabs.indexOf(currentTab) == 1 &&  (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-10">
                        { twitters.map(tweet => (
                            <TweetCard tweet={tweet} key={tweet.author.username} />
                        )) }
                    </div>
                ) }
                {/* Tech Reviewer cards */}
                { tabs.indexOf(currentTab) == 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-10">
                        { techs.map(tech => (
                            <TechReviewerCard tech={tech} key={tech.author.name} />
                        )) }
                    </div>
                ) }
            </div>
        </section>
    )
}