import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Accordion({ faq }) {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="accordion" onClick={() => setIsOpen(!isOpen)}>
            <div className="accordion-title">
                <h3 className="text-lg sm:text-2xl font-semibold">{faq.question}</h3>
                { isOpen ? (
                    <IoIosArrowUp className="text-xl" />
                ) : (
                    <IoIosArrowDown className="text-xl" />
                ) }
            </div>
            { isOpen && (
                <p className="accordion-lead">{faq.answer}</p>
            ) }
        </div>
    )
}