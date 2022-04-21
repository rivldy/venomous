import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ImHome3 } from 'react-icons/im'
import NotFoundImg from '../images/not_found.svg'

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <section className="py-24 bg-white">
                <div className="container text-center select-none">
                    <img className="w-full mx-auto md:w-1/2" src={NotFoundImg} alt="404 page not found" />                    
                    <h1 className="my-10 text-3xl font-bold md:text-5xl text-primary">
                        <span className="text-slate-800">You've lost!, </span>
                        Page Not Found :(
                    </h1>
                    <Link to="/" className="inline-block">
                        <span className="flex items-center justify-center px-3 py-2 space-x-4 bg-gray-100 hover:bg-gray-300">
                            <ImHome3 className="text-2xl" />
                            <span className="text-base">Go Back Home</span>
                        </span>
                    </Link>
                </div>
            </section>
        </>
    )
}