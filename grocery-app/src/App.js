import { useState } from 'react';
import './App.css';

//import custom components
import Navbar from './components/common/Navbar'

function App() {
  const [navSelection, setNavSelection] = useState('home');
  const navBarProps = {navSelection, setNavSelection};

  return (
    <>
      <Navbar {...navBarProps}/>
    </>
  );
}

export default App;
