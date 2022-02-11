
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import { InfoData } from "./data/InfoData";



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero slides= {SliderData} />
    <InfoSection {...InfoData}/>
    
 
    </>
  );
}

export default App;
