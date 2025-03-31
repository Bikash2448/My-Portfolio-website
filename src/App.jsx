import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Login from "./Components/Registration/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      {/* <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer /> */}
      
              <Navbar />
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <>
                      <Home />
                      <About />
                      <Experience />
                      <Projects />
                      <Footer />
                    </>
                  } 
                />
                <Route path="/newpage" element={<Login />} />
              </Routes>
                
      
      {/* <Login/> */}
    </div>
    </Router>
  );
}

export default App;
