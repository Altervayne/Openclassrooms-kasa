import '../styles/Home.css';
import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'

function Home() {
  const activeLink = 'home'

  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <Banner activeLink={activeLink} />
    </div>
  );
}

export default Home;
