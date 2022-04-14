import { BsYoutube, BsTwitter } from 'react-icons/bs'

export function YoutubeCard({ youtuber }) {
    return (
        <div className="w-full px-4 py-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex justify-start items-center space-x-3">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={youtuber.image} alt={youtuber.name}  className="w-full" />
                </div>
                <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-semibold">{youtuber.name}</h3>
                    <p className="text-base font-semibold">{youtuber.subscribers} subscriber</p>
                </div>
            </div>
            <hr className="mt-6" />
            <p className="text-lg flex-1 mt-6 mb-8">{youtuber.text}</p>
            <a className="w-fit text-sm font-semibold" href={youtuber.url} target="_blank">Watch on YouTube <BsYoutube className="text-lg text-red-700 inline" /> </a>
        </div>
    )
}

export function TweetCard({ tweet }) {
    return (
        <a href={tweet.url} target="_blank">
            <div className="w-full px-4 py-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="flex justify-start items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={tweet.author.avatar} alt={tweet.author.username}  className="w-full" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <h3 className="text-lg font-semibold">{tweet.author.name}</h3>
                        <p className="text-sm text-slate-400">@{tweet.author.username}</p>
                    </div>
                    <BsTwitter className="text-xl text-blue-400" />
                </div>
                <p className="text-lg flex-1 mt-6 mb-6">{tweet.text}</p>
                <p className="w-fit text-base text-slate-400">{tweet.date}</p>
            </div>
        </a>
    )
}

export function TechReviewerCard({ tech }) {
    return (
        <div className="w-full px-4 py-5 flex flex-col justify-between text-center">
            <div className="flex justify-center items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={tech.author.photo} alt={tech.author.name}  className="w-full" />
                </div>
            </div>
            <p className="text-base flex-1 mt-6 mb-6 text-slate-700">{tech.text}</p>
            <h3 className="text-xs font-semibold">{tech.author.name}</h3>
            <p className="text-xs text-slate-400">{tech.author.position}, {tech.author.company}</p>
        </div>
    )
}


export function PriceCard({ pricing }) {
    return (
        <div className="bg-white w-full px-4 pt-10 pb-6 rounded-lg relative shadow hover:shadow-xl">
            { pricing.bestValue && (
                <div className="absolute -top-4 inset-x-0 text-center">
                    <div className="bg-primary text-white px-5 py-1 rounded-full relative inline-block">
                        Best value
                        <div className="absolute -bottom-5 inset-x-0 flex justify-center">
                            <div className="w-0 h-0 border-[10px] border-solid border-transparent border-b-0 border-t-[20px] border-t-primary"></div>
                        </div>
                    </div>
                </div>
            ) }
            <div className="text-center">
                <p className="text-base font-semibold">{pricing.yearPlan}</p>
                <h3 className="text-5xl font-bold flex justify-center my-4">
                    <span className="text-3xl">$</span> {pricing.price}</h3>
                <p className="text-base font-semibold">per month</p>
            </div>
            <div className="text-center my-4">
                <div className={`text-xs font-semibold inline-block py-1 px-2 rounded-xl ${pricing.bestValue ? 'text-primary bg-red-200' : 'text-slate-600 bg-slate-200'}`}>Save {pricing.save}</div>
                <button className={`btn btn-simple w-full my-4 ${pricing.bestValue ? 'btn-pricing-red' : 'btn-pricing-grey'}`}>{pricing.buttonText}</button>
                <p className="text-sm font-semibold text-slate-700">
                    { pricing.discount.before || pricing.discount.after && (
                        <>
                            <span className="text-slate-800 line-through mr-1">${pricing.discount.before}</span>
                            <span className="text-primary mr-1">${pricing.discount.after}</span>
                        </>
                    ) }
                    { pricing.discount.bill && (
                        <span className="text-slate-700 mr-1">${pricing.discount.bill}</span>
                    ) }
                    {pricing.discount.text}
                </p>
                <p className="text-sm font-semibold text-slate-700 my-2">Then, ${pricing.perYear}</p>
                <p className="text-sm text-slate-400">VAT may apply</p>
            </div>
        </div>
    )
}