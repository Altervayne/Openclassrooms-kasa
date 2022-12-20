import { useParams } from 'react-router-dom'
import PageNotFound from './PageNotFound.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import '../styles/Housing.css'
const housingList = require('../data/logements.json')


function Housing({activeLink}) {
    let validId = false
    const { id } = useParams()
    const housingIds = housingList.reduce(
        (array, housing) => array.concat(housing.id),[]
    )
        
    housingIds.includes(id) ? validId = true : validId = false

    return (validId === true ? (
        <div className="App">
            <Header activeLink={activeLink} />
            <main>
                <p>{id}</p>
            </main>
            <Footer />
        </div>
    ) : (
        <PageNotFound activeLink='404' />
    ))
    
}

export default Housing