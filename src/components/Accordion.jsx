import '../styles/components/Accordion.css'
import { useState } from 'react'
import openArrow from '../assets/open-accordion-arrow.svg'
import closedArrow from '../assets/closed-accordion-arrow.svg'

function Accordion({title, content}) {
    const [isOpen, setIsOpen] = useState(false)
    let isContentArray = false
    if (content instanceof Array) {
        isContentArray = true
    }

    return (
        <div className='accordion__container'>

            <div className='accordion__header'>
                <h2 className='accordion__header__title'>{title}</h2>
                <img className='accordion__header__arrow' src={isOpen ? openArrow : closedArrow} alt='' onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}></img>
            </div>

            { isOpen ?
            <div className='accordion__content'>
                { isContentArray ? (
                    <ul>{content.map(element => <li key={element} className='accordion__content__text'>{element}</li>)}</ul>
                ) : (
                    <p className='accordion__content__text'>{content}</p>
                ) }
            </div> 
            : null}

        </div>
    )
}

export default Accordion