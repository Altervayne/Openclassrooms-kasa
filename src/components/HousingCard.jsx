import '../styles/HousingCard.css'

function HousingCard({ housing }) {
    return (
        <div className="housing-card__container" style={{backgroundImage: `url(${housing.cover})`}}>
            <a href={`./housing&id=${housing.id}`} className='housing-card__link'>
                <h2 className="housing-card__title">{housing.title}</h2>
            </a>
        </div>
    )
}

export default HousingCard