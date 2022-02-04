import './App.css';
import Hero from './componenets/Hero'
import Nav from './componenets/Nav'
import About from './componenets/About'
import Contact from './componenets/Contact'
import Footer from './componenets/Footer'
import Works from './componenets/Works'


function App() {
  return (
    <div className="App">
      <Hero />
      <Nav />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
