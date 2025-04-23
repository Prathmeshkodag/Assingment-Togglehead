import About from "./components/About";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import StatsSection from "./components/Stats";
import Subscribe from "./components/SubScribe";


function App() {
  return (
    <div >
     <Navbar/>
     <Home/>
     <About/>
     <StatsSection/>
     <Faq/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
