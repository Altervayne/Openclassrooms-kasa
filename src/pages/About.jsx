import '../styles/About.css';
import Header from '../components/Header.jsx'

function About() {
  const activeLink = 'about'

  return (
    <div className="App">
      <Header activeLink={activeLink} />
    </div>
  );
}

export default About;
