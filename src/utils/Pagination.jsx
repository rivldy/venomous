import { useState, useEffect } from 'react'

export default function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit))
    const [currentPage, setCurrentPage] = useState(1)

    // useEffect(() => {
    //     // Go to top when page change
    //     window.scrollTo({ behavior: 'smooth', top: '0px' });
    // }, [currentPage])
    
    function goToNextPage() {
        setCurrentPage((page) => page + 1)
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1)
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent)
        setCurrentPage(pageNumber)
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return data.slice(startIndex, endIndex)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    return (
        <div>
            {/* show the posts, 10 posts at a time */}
            <div>
                { getPaginatedData().map((d, index) => (
                    <RenderComponent key={index} post={d} />
                )) }
            </div>

            {/* show the pagination */}
            <div className="flex mt-3 space-x-3">
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`btn btn-simple ${currentPage === 1 ? '' : 'btn-primary'}`}
                    disabled={currentPage === 1}
                >Prev</button>

                {/* show page numbers */}
                { getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`w-10 h-10 rounded-full btn-bordered ${currentPage === item ? 'btn-primary' : null}`}
                    >
                        <span className="text-base">{item}</span>
                    </button>
                )) }

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`btn btn-simple ${currentPage === pages ? '' : 'btn-primary'}`}
                    disabled={currentPage === pages}
                >Next</button>
            </div>
        </div>
    )
}