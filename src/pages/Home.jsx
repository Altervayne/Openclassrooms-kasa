import '../styles/Home.css';
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  const activeLink = 'home'

  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <main>
        <Banner activeLink={activeLink} />
        <div className="homeCarousel">
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
