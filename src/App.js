
import './app.scss';
import './bootstrap.css';
import { Banner } from './components/banner';
import { Benefits } from './components/benefits';
import { FAQ } from './components/faq';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Minter } from './components/minter';
import { Roadmap } from './components/roadmap';
import { Story } from './components/story';
import { Team } from './components/team';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Minter />
      <Story />
      <Benefits />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
