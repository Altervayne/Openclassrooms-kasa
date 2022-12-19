import '../styles/About.css';
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'

function About() {
  const activeLink = 'about'

  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <Banner activeLink={activeLink} />
    </div>
  );
}

export default About;
