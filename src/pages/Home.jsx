import '../styles/Home.css';
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import HousingCard from '../components/HousingCard.jsx'

const housingList = [
  {
    title: "Appartement cosy",
		cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
  },
  {
    title: "Magnifique appartement proche Canal Saint Martin",
		cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
  }
]

function Home() {
  const activeLink = 'home'

  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <main>
        <Banner activeLink={activeLink} />

        <div className="home__carousel">
          <HousingCard housing={housingList[0]} />
          <HousingCard housing={housingList[1]} />
          <HousingCard housing={housingList[0]} />
          <HousingCard housing={housingList[1]} />
        </div>

      </main>
      <Footer />
    </div>
  );
}


export default Home;