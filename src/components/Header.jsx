import '../styles/Header.css'
import logoKasa from '../assets/kasa-logo.svg'

function Header({activeLink}) {
    return (
        <header>
            <img src={ logoKasa } alt='Logo de Kasa'></img>
            <nav>
                <a href="/" className={activeLink === 'home' ? "nav__link__active" : "nav__link"}>Accueil</a>
                <a href="/about" className={activeLink === 'about' ? "nav__link__active" : "nav__link"}>A Propos</a>
            </nav>
        </header>
    )
}

export default Header