import './App.scss';
import Footer from './components/Footer';
import FooterBanner from './components/FooterBanner';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Shorten from './components/Shorten';
import ShortenList from './components/ShortenList';
import Statistics from './components/Statistics';
import logo from './images/logo.svg';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Shorten />
        <ShortenList />
        <Statistics />
        <FooterBanner />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
