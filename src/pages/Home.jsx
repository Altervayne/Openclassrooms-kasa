import '../styles/pages/Home.css';
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import HousingCard from '../components/HousingCard.jsx'
const housingList = require('../data/logements.json')

function Home({activeLink}) {
  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <main>
        <Banner activeLink={activeLink} />

        <div className="home__carousel">
          { housingList.map(housing => <HousingCard housing={ housing } key={ housing.id } />) }
        </div>

      </main>
      <Footer />
    </div>
  );
}


export default Home;