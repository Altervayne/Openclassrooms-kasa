import '../styles/Footer.css'
import logoKasa from '../assets/kasa-logo-footer.svg'

function Footer() {
    return (
        <footer>
            <img src={ logoKasa } alt='Logo de Kasa' className="footer__logo"></img>
            <h2 className="footer__copyright">© 2020 Kasa. All rights reserved</h2>
        </footer>
    )
}

export default Footer