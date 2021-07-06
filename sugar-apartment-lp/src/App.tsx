import About from './components/About';
import Credit from './components/Credit';
import Usage from './components/Usage';
import Media from './components/Media';
import Repletion from './components/Repletion';
import Footer from './components/Footer';
import './App.css';
import './destyle.css';

function App() {
  return (
    <div className='App'>
      <About />
      <Usage />
      <Media />
      <Repletion />
      <Credit />
      <Footer />
    </div>
  );
}

export default App;
