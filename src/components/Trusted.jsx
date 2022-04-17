import { useSelector } from "react-redux"
import { TechReviewerCard } from "./Cards"

export default function Trusted() {
    const techs = useSelector(state => state.techs.data)
    
    return (
        <div className="w-full bg-white">
            <div className="container">
                <h1 className="text-3xl md:text-5xl font-bold text-center">Trusted by tech experts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-10">
                    { techs.map(tech => (
                        <TechReviewerCard tech={tech} key={tech.author.name} />
                    )) }
                </div>
            </div>
        </div>
    )
}