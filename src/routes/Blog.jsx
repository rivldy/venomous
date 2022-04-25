import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import Post from "../components/Post"

export default function Blog() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    
    const apiKey = "69639fa3f23a414885b89d88c029dbde"
    const url = "https://newsapi.org/v2/everything?q=internet&searchIn=title&pageSize=30"

    useEffect(() => {
        fetch(url, {
            headers: {
                "X-Api-Key": apiKey
            }
        })
        .then(response => {
            if(response.ok) return response.json()
            throw new Error('something went wrong while requesting posts')
        })
        .then(posts => setPosts(posts.articles))
        .catch(err => setError(err.message))
    }, [])

    if(error) return <h1>{error}</h1>
    
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