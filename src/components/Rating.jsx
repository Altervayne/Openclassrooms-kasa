import '../styles/Rating.css'
import fullStar from '../assets/star-full.svg'
import emptyStar from '../assets/star-empty.svg'

function Rating({rating}) {
    const range = [1, 2, 3, 4, 5]
    const intRating = parseInt(rating, 10) 

    return (
        <div className='rating__container'>
            {range.map((rangeNumber) =>
				intRating >= rangeNumber ? (
					<img className='rating__star' src={fullStar} key={rangeNumber.toString()} alt=''></img>
				) : (
                    <img className='rating__star' src={emptyStar} key={rangeNumber.toString()} alt=''></img>
                )
			)}
        </div>
    )
}

export default Rating