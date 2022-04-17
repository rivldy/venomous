import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export function AccordionFaq({ faq }) {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="accordion-faq" onClick={() => setIsOpen(!isOpen)}>
            <div className="accordion-faq-title">
                <h3 className="text-lg font-semibold sm:text-2xl">{faq.question}</h3>
                { isOpen ? (
                    <IoIosArrowUp className="text-xl" />
                ) : (
                    <IoIosArrowDown className="text-xl" />
                ) }
            </div>
            { isOpen && (
                <p className="accordion-faq-lead">{faq.answer}</p>
            ) }
        </div>
    )
}