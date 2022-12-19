import '../styles/Header.css'
import logoKasa from '../assets/kasa-logo.svg'

function Header({activeLink}) {
    return (
        <header>
            <img src={ logoKasa } alt='Logo de Kasa'></img>
            <nav>
                { activeLink === 'home' ? (
                    <a href="/" className="nav__link__active">Accueil</a>
                ) : (
                    <a href="/" className="nav__link">Accueil</a>
                ) }
                { activeLink === 'about' ? (
                    <a href="/about" className="nav__link__active">A Propos</a>
                ) : (
                    <a href="/about" className="nav__link">A Propos</a>
                ) }
            </nav>
        </header>
    )
}

export default Header