import '../styles/About.css';
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'

function About({activeLink}) {
  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <main>
        <Banner activeLink={activeLink} />
        <div className="aboutCarousel">
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
