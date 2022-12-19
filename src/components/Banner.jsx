import '../styles/Banner.css'
import homeBanner from '../assets/kasa-home-banner.jpg'
import aboutBanner from '../assets/kasa-about-banner.jpg'

function Banner({activeLink}) {
    return ( 
        <>
            { activeLink === 'home' ? (
                <div className='banner__container'>
                    <img className='banner__image' src={homeBanner} alt='Photographie de paysage de vacances'></img>
                    <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
                </div>
            ) : null }
            { activeLink === 'about' ? (
                <div className='banner__container'>
                    <img className='banner__image' src={aboutBanner} alt='Photographie de paysage de vacances'></img>
                </div>
            ) : null }
        </>
     )
}

export default Banner