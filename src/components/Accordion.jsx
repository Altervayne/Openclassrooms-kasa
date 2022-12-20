import { useState } from 'react'
import '../styles/Accordion.css'
import openArrow from '../assets/open-accordion-arrow.svg'
import closedArrow from '../assets/closed-accordion-arrow.svg'

function Accordion({title, content}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='accordion__container'>
            
            <div className='accordion__header'>
                <h2 className='accordion__header__title'>{title}</h2>
                <img src={isOpen === true ? openArrow : closedArrow} alt='' onClick={() => (isOpen === true ? setIsOpen(false) : setIsOpen(true))}></img>
            </div>

            { isOpen === true ?
            <div className='accordion__inside'>
                <p className='accordion__inside__text'>{content}</p>
            </div> 
            : null}

        </div>
    )
}

export default Accordion