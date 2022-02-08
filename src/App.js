import React, { useState } from 'react';
import { aboutText, footerLinks } from './data'

import './App.css';
import Hero from './componenets/Hero'
import Nav from './componenets/Nav'
import About from './componenets/About'
import Contact from './componenets/Contact'
import Footer from './componenets/Footer'
import Works from './componenets/Works'

import './assets/css/fontawesome/css/all.css'


function App() {
  //
  const [currentPage, handlePageChange] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'Works':
        return <Works />;
      case 'Contact':
        return <Contact />;
      default:
        return <About aboutText={aboutText}/>;
    }
  };




  return (
    <div className="App">
      <Hero />

      {currentPage === 'About'
        ? <section>
          <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          </div>
          <div className='body'>{renderPage(currentPage)}</div>
        </section>
        : <section>
          <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className='body'>{renderPage(currentPage)}</div>
          </div>
        </section>}

      <Footer footerLinks={footerLinks} />
    </div>
  );
}

export default App;
