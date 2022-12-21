import { useParams } from 'react-router-dom'
import PageNotFound from './PageNotFound.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ImageCarrousel from '../components/ImageCarrousel.jsx'
import Accordion from '../components/Accordion.jsx'
import HousingTag from '../components/HousingTag.jsx'
import '../styles/Housing.css'
const housingList = require('../data/logements.json')


function Housing({activeLink}) {
    let validId = false
    const { id } = useParams()
    const housing = housingList.find(entry => entry.id === id)
    housing ? validId = true : validId = false

    return (validId === true ? (
        <div className="App">
            <Header activeLink={activeLink} />
            <main>
                <ImageCarrousel pictureList={ housing.pictures } />
                <div className='housing__info-container'>
                    <h1 className='housing__title'>{housing.title}</h1>
                    {/* USER COMPONENT */}
                </div>
                <div className='housing__info-container'>
                    <p className='housing__location'>{housing.location}</p>
                </div>
                <div className='housing__info-container'>
                    <div className='housing__tag-list'>{ housing.tags.map(tag => <HousingTag tag={ tag } key={ tag } />) }</div>
                    {/* RATING COMPONENT */}
                </div>
                <div className='housing__info-container'>
                    <div className='housing__accordion'><Accordion title='Description' content={housing.description} /></div>
                    <div className='housing__accordion'><Accordion title='Équipements' content={housing.equipments}/></div>
                </div>
            </main>
            <Footer />
        </div>
    ) : (
        <PageNotFound activeLink='404' />
    ))
    
}

export default Housing