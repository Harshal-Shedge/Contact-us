
import React from 'react'
import Navigation from './components/Navigation/Navigation';
import "./App.css";
import Contactheader from './components/Contactheader/Contactheader';
import Contactform from './components/Contactform/Contactform';


function App() {
  return (
    <>
    <div className="App">
     <Navigation/>
     <main className='main_container'>
     <Contactheader/>
     <Contactform/>
     </main>
    </div>
    </>
  );
}

export default App;
