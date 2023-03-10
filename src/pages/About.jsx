import '../styles/pages/About.css';
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import Accordion from '../components/Accordion.jsx'
const aboutText = require('../data/aboutText.json')

function About({activeLink}) {
  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <main>
        <Banner activeLink={activeLink} />
        <div className="about__carrousel">
          { aboutText.map(entry => <div className='about__carrousel__accordion'><Accordion title={ entry.title } content={ entry.content } /></div>) }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
