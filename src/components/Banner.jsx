import '../styles/Banner.css'
import homeBanner from '../assets/kasa-home-banner.jpg'
import aboutBanner from '../assets/kasa-about-banner.jpg'

function Banner({activeLink}) {
    return ( 
            <div className='banner__container' style={activeLink === 'home' ? {backgroundImage: `url(${homeBanner})`} : {backgroundImage: `url(${aboutBanner})`} }>
                    { activeLink === 'home' ? (<><h1 className='banner__title'>Chez vous, partout et ailleurs</h1><h1 className='banner__title__mobile'>Chez vous,<br/> partout et ailleurs</h1></>) : null }
            </div>
     )
}

export default Banner