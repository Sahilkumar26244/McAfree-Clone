import { useRef } from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import StepperForm from "./Pages/StepperForm";



function App() {

  const HomeSec = useRef(null)
  const AboutSec = useRef(null)
  const ContactSec = useRef(null)


  const scrollToSection = (elementRef) => {
    // console.log(elementRef)
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    } else {
      // Handle the case where the ref is not available
      console.error('Ref is not available');
      // Optionally, you could scroll to the top of the page or do something else
      // Example: window.scrollTo(0, 0);
    }
  };


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home HomeSec={HomeSec} AboutSec={AboutSec} ContactSec={ContactSec} scrollToSection={scrollToSection} />} />
        <Route path="/activate" element={<StepperForm/>} />
      </Routes>
    </div>
  );
}

export default App;
