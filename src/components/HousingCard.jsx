import '../styles/HousingCard.css'

function HousingCard({ housing }) {
    return (
        <div className="housing-card__container" style={{backgroundImage: `url(${housing.cover})`}}>
            <h2 className="housing-card__title">{housing.title}</h2>
        </div>
    )
}

export default HousingCard