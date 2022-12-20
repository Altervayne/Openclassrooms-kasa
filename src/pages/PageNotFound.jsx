import '../styles/PageNotFound.css';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function PageNotFound({activeLink}) {
    return (
        <div className="App">
            <Header activeLink={activeLink} />
                <main className='page-not-found'>
                    <h1 className='page-not-found__number'>404</h1>
                    <h2 className='page-not-found__oops'>Oups! La page que vous demandez n'existe pas.</h2>
                    <a href='./' className='page-not-found__back'>Retourner sur la page d'accueil</a>
                </main>
            <Footer />
        </div>
  );
}


export default PageNotFound;