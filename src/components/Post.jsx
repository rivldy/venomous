import Pagination from "../utils/Pagination";
import { PostCard } from "./Cards";
import { AiOutlineLoading } from 'react-icons/ai'

export default function Post({ posts }) {
    return (
        <div className="container flex items-center justify-center my-28">
            <div className="w-full md:w-2/3">
                <h2 className="text-xl font-bold">Recent Articles</h2>
                <div className="flex flex-col">
                    { posts.length > 0 ? (
                        <>
                            <Pagination
                                data={posts}
                                RenderComponent={PostCard}
                                title="Posts"
                                pageLimit={3}
                                dataLimit={5}
                            />
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center mt-10 space-y-2">
                            <AiOutlineLoading className="text-5xl animate-spin" />
                            <span className="text-xl">Loading...</span>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    )
}