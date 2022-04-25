import { BsYoutube, BsTwitter } from 'react-icons/bs'

export function YoutubeCard({ youtuber }) {
    return (
        <div className="flex flex-col justify-between w-full px-4 py-5 border shadow-sm border-slate-200">
            <div className="flex items-center justify-start space-x-3">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                    <img src={youtuber.image} alt={youtuber.name}  className="w-full" />
                </div>
                <div className="flex flex-col flex-1">
                    <h3 className="text-lg font-semibold">{youtuber.name}</h3>
                    <p className="text-base font-semibold">{youtuber.subscribers} subscriber</p>
                </div>
            </div>
            <hr className="mt-6" />
            <p className="flex-1 mt-6 mb-8 text-lg">{youtuber.text}</p>
            <a className="text-sm font-semibold w-fit" href={youtuber.url} target="_blank">Watch on YouTube <BsYoutube className="inline text-lg text-red-700" /> </a>
        </div>
    )
}

export function TweetCard({ tweet }) {
    return (
        <a href={tweet.url} target="_blank">
            <div className="flex flex-col justify-between w-full px-4 py-5 border shadow-sm border-slate-200">
                <div className="flex items-center justify-start space-x-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img src={tweet.author.avatar} alt={tweet.author.username}  className="w-full" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <h3 className="text-lg font-semibold">{tweet.author.name}</h3>
                        <p className="text-sm text-slate-400">@{tweet.author.username}</p>
                    </div>
                    <BsTwitter className="text-xl text-blue-400" />
                </div>
                <p className="flex-1 mt-6 mb-6 text-lg">{tweet.text}</p>
                <p className="text-base w-fit text-slate-400">{tweet.date}</p>
            </div>
        </a>
    )
}

export function TechReviewerCard({ tech }) {
    return (
        <div className="flex flex-col justify-between w-full px-4 py-5 text-center">
            <div className="flex items-center justify-center">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                    <img src={tech.author.photo} alt={tech.author.name}  className="w-full" />
                </div>
            </div>
            <p className="flex-1 mt-6 mb-6 text-base text-slate-700">{tech.text}</p>
            <h3 className="text-xs font-semibold">{tech.author.name}</h3>
            <p className="text-xs text-slate-400">{tech.author.position}, {tech.author.company}</p>
        </div>
    )
}


export function PriceCard({ pricing }) {
    return (
        <div className="relative w-full px-4 pt-10 pb-6 bg-white rounded-lg shadow hover:shadow-xl">
            { pricing.bestValue && (
                <div className="absolute inset-x-0 text-center -top-4">
                    <div className="relative inline-block px-5 py-1 text-white rounded-full bg-primary">
                        Best value
                        <div className="absolute inset-x-0 flex justify-center -bottom-5">
                            <div className="w-0 h-0 border-[10px] border-solid border-transparent border-b-0 border-t-[20px] border-t-primary"></div>
                        </div>
                    </div>
                </div>
            ) }
            <div className="text-center">
                <p className="text-base font-semibold">{pricing.yearPlan}</p>
                <h3 className="flex justify-center my-4 text-5xl font-bold">
                    <span className="text-3xl">$</span> {pricing.price}</h3>
                <p className="text-base font-semibold">per month</p>
            </div>
            <div className="my-4 text-center">
                <div className={`text-xs font-semibold inline-block py-1 px-2 rounded-xl ${pricing.bestValue ? 'text-primary bg-red-200' : 'text-slate-600 bg-slate-200'}`}>Save {pricing.save}</div>
                <button className={`btn btn-simple w-full my-4 ${pricing.bestValue ? 'btn-pricing-red' : 'btn-pricing-grey'}`}>{pricing.buttonText}</button>
                <p className="text-sm font-semibold text-slate-700">
                    { (pricing.discount.before || pricing.discount.after) && (
                        <>
                            <span className="mr-1 line-through text-slate-800">${pricing.discount.before}</span>
                            <span className="mr-1 text-primary">${pricing.discount.after}</span>
                        </>
                    ) }
                    { pricing.discount.bill && (
                        <span className="mr-1 text-slate-700">${pricing.discount.bill}</span>
                    ) }
                    {pricing.discount.text}
                </p>
                <p className="my-2 text-sm font-semibold text-slate-700">Then, ${pricing.perYear}</p>
                <p className="text-sm text-slate-400">VAT may apply</p>
            </div>
        </div>
    )
}


export function FeatureCard({ feature }) {
    return (
        <div className="px-4 py-5 text-center">
            <h4 className="text-2xl font-semibold">{ feature.title }</h4>
            <p className="mt-4 text-base">{ feature.desc }</p>
        </div>
    )
}


export function ReasonCard({ reason }) {
    return (
        <div className="flex flex-col space-y-5">
            <div className="w-20">
                <span className="text-4xl text-primary">
                    { reason.icon }
                </span>
            </div>
            <h4 className="text-xl font-semibold">{ reason.title }</h4>
            <p className="text-base">{ reason.desc }</p>
        </div>
    )
}


export function PostCard({ post }) {
    return(
        <a href={post.url} target="_blank" className="flex flex-col items-start justify-between px-5 py-3 my-3 space-y-5 bg-white border rounded-md shadow-sm border-slate-200 hover:shadow-lg">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <div className="flex flex-col items-start justify-center">
                <span className="text-sm text-slate-600">{post.author ? post.author : post.source.name}</span>
                <span className="text-sm font-semibold text-slate-600">{post.source.name}</span>
                <span className="text-sm text-slate-600">Published at {post.publishedAt.slice(0, 10)}</span>
            </div>
        </a>
    )
}