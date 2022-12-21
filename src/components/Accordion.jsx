import { useState } from 'react'
import '../styles/Accordion.css'
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
                <img className='accordion__header__arrow' src={isOpen === true ? openArrow : closedArrow} alt='' onClick={() => (isOpen === true ? setIsOpen(false) : setIsOpen(true))}></img>
            </div>

            { isOpen === true ?
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