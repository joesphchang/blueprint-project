import './App.css';
import About from './components/About/About';
import Donate from './components/Donate/Donate';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Volunteer from './components/Volunteer/Volunteer';

function App() {
	return (
		<div>
      <Navigation />
      <Volunteer />
      <Donate />
      <About />
      <Footer />
		</div>
	);
}

export default App;
