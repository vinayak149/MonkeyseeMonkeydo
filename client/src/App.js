import React, { useCallback } from 'react';
// import MyParticles from './components/Particles/Particles.js';
import Routing from './components/Routing/Routing.js';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <div className="App">
      {/* <MyParticles/> */}
      <Routing/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
