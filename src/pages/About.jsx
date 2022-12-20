import '../styles/About.css';
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import Accordion from '../components/Accordion.jsx'
import aboutText from '../data/aboutText.js'

function About({activeLink}) {
  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <main>
        <Banner activeLink={activeLink} />
        <div className="about__carousel">
          <Accordion title='test' content='test' />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
