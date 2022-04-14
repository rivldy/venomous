
export default function Service1({ invert, image, title, description, buttonText, children }) {
    return (
        <section className="w-full py-20 space-y-10">
            <div className="container my-6 flex flex-col lg:flex-row justify-between items-center lg:space-x-8 space-y-8">
                <img src={image} alt={title} className="w-full lg:w-1/2" />
                <div className={`space-y-6 ${invert ? 'lg:order-first' : ''}`}>
                    <h2 className="text-3xl font-bold">{ title }</h2>
                    <p>{ description }</p>
                    { children }
                    <button className="btn btn-jumbo btn-primary w-full lg:w-fit">{ buttonText }</button>
                </div>
            </div>
        </section>
    )
}