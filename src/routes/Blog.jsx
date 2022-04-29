import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useSelector } from "react-redux"
import Post from "../components/Post"

export default function Blog() {
    const [posts, setPosts] = useState([])
    
    const postsData = useSelector(state => state.posts.data)
    useEffect(() => {
        const postsTimeout = setTimeout(() => {
            setPosts(postsData)
        }, 1000)

        return () => {
            clearTimeout(postsTimeout)
        }
    }, [])
    
    return (
        <>
            <Helmet>
                <title>Hot news from the privacy world | Venomous</title>
            </Helmet>
            <section className="w-full bg-white">
                <Post posts={posts} />
            </section>
        </>
    )
}