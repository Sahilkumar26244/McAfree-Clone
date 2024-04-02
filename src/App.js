import { useRef } from "react";
import Home from "./Pages/Home";



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
      <Home HomeSec={HomeSec} AboutSec={AboutSec} ContactSec={ContactSec} scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
