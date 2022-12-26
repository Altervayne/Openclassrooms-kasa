import '../styles/components/HousingTag.css'

function HousingTag ({tag}) {
    return (
        <div className='tag__container'>
            <p className='tag__text'>{tag}</p>
        </div>
    )
}

export default HousingTag