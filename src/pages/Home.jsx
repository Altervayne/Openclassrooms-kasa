import '../styles/Home.css';
import Header from '../components/Header.jsx'

function Home() {
  const activeLink = 'home'

  return (
    <div className="App">
      <Header activeLink={activeLink} />
    </div>
  );
}

export default Home;
