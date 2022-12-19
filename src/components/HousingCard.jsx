import '../styles/HousingCard.css'

function HousingCard({ housing }) {
    return (
        <div className="housing-card__container">
            <img src={housing.cover} alt={housing.title} className="housing-card__image"></img>
            <h2 className="housing-card__title">{housing.title}</h2>
        </div>
    )
}

export default HousingCard