import '../styles/Banner.css'
import homeBanner from '../assets/kasa-home-banner.jpg'
import aboutBanner from '../assets/kasa-about-banner.jpg'

function Banner({activeLink}) {
    return ( 
            <div className='banner__container'>
                    <img className='banner__image' src={activeLink === 'home' ? homeBanner : aboutBanner} alt='Photographie de paysage de vacances'></img>
                    { activeLink === 'home' ? <h1 className='banner__title'>Chez vous, partout et ailleurs</h1> : null }
            </div>
     )
}

export default Banner