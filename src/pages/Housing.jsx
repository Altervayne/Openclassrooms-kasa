import { useParams } from 'react-router-dom'
import PageNotFound from './PageNotFound.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ImageCarrousel from '../components/ImageCarrousel.jsx'
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
            </main>
            <Footer />
        </div>
    ) : (
        <PageNotFound activeLink='404' />
    ))
    
}

export default Housing