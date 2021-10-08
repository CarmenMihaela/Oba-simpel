import React, {useState} from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Boeken from './pages/Boeken'
import './Sass/main.css'
import { FontProvider } from './components/FontContext'


const App = () => {
  const [fontSize, setFontSize] = useState(20);
  const value = {fontSize, setFontSize};

  return (
    <div> 
   <FontProvider>
    <Navbar />
    
   
    <Header />
   </FontProvider>
    <Boeken />
      
    </div>
  );
}

export default App


