import { useState } from 'react'
import '../styles/ImageCarrousel.css'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

function ImageCarrousel({pictureList}) {
    let singlePicture = false
    if (pictureList.length === 1) {
        singlePicture = true
    }

    const [pictureIndex, changeIndex] = useState(1)
    const updateIndex = (direction) => {
        direction === 'left' ? (
            pictureIndex === 1 ? changeIndex(pictureList.length) : changeIndex(pictureIndex-1)
        ) : (
            pictureIndex === pictureList.length ? changeIndex(1) : changeIndex(pictureIndex+1)
        )
    }

    return (
        <div className='image-carrousel__container' style={{backgroundImage: `url(${pictureList[pictureIndex-1]})`}}>
            { singlePicture ? null : (
                <>
                    <img src={arrowLeft} alt='' className='image-carrousel__arrow' onClick={() => updateIndex('left')}></img>
                    <div className='image-number'>
                        <p classname='image-number__index'>{ pictureIndex }/{ pictureList.length }</p>
                    </div>
                    <img src={arrowRight} alt='' className='image-carrousel__arrow' onClick={() => updateIndex('right')}></img>
                </>
            )}
        </div>
    )
}

export default ImageCarrousel