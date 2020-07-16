import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Header from "../src/components/Header/index"
import Footer from "../src/components/Footer/index"
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Music from "./pages/Music/Music";
import FourOhFour from "./pages/FourOhFour/FourOhFour";
import './App.css';

function App() {
  return (
    <Router>
      <div id="app">
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;





// import React, { useState, useEffect } from 'react';
// import './App.css';
// import desktopImage from './pineapple-desktop.jpg';
// import mobileImage from './pineapple-mobile.jpg';

// const App = () => {
//     const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

//     return (
//         <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
//             <div className="App-content">
//                 <h1>Pineapples</h1>
//                 <p>They are good</p>
//             </div>
//         </div>
//     );
// };

// const useWindowWidth = () => {
//     const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleWindowResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleWindowResize);
//         return () => window.removeEventListener('resize', handleWindowResize);
//     },[]);

//     return windowWidth;
// };

// export default App;