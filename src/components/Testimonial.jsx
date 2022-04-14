import { useState, useEffect } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

import { TechReviewerCard, TweetCard, YoutubeCard } from './Cards'

export default function Testimonial() {
    const tabs = useSelector(state => state.tabs.data)
    const youtubers = useSelector(state => state.youtubers.data)
    const twitters = useSelector(state => state.twitters.data)
    const techs = useSelector(state => state.techs.data)

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