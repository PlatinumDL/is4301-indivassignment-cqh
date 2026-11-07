import logo from '../Assets/nus-logo.jpg';
import './Pages.css';

function Home() {
  return (
    <main className="page home">
      <img src={logo} className="home-logo" alt="NUS logo" />
      <p className="home-text">NUS is a leading research university in Asia</p>
    </main>
  );
}

export default Home;
