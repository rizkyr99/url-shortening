import { Toaster } from 'react-hot-toast';
import './App.scss';
import Footer from './components/Footer';
import FooterBanner from './components/FooterBanner';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Shorten from './components/Shorten';
import ShortenList from './components/ShortenList';
import Statistics from './components/Statistics';
import LinkContextProvider from './contexts/LinkContext';

function App() {
  return (
    <div>
      <LinkContextProvider>
        <Toaster />
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
      </LinkContextProvider>
    </div>
  );
}

export default App;
