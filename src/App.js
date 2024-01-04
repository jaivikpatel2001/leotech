import About from "./Components/About/About";
import Choose from "./Components/Choose/Choose";
import Chooseyellow from "./Components/Chooseyellow/Chooseyellow";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Happy from "./Components/Happy/Happy";
import Header from "./Components/Header/Header";
import Industries from "./Components/Industries/Industries";
import Mission from "./Components/Mission/Mission";
import Contactform from "./Components/ContactForm/Contactform.jsx";

function App() {
  return (
    <>
      <Header />
      <Industries />
      <Choose />
      {/* <Contact /> */}
      <About />
      <Mission />
      <Chooseyellow />
      <Happy />
      {/* <Contactform /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
// import About from "./Components/About/About";
// import Choose from "./Components/Choose/Choose";
// import Chooseyellow from "./Components/Chooseyellow/Chooseyellow";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
// import Happy from "./Components/Happy/Happy";
// import Header from "./Components/Header/Header";
// import Industries from "./Components/Industries/Industries";
// import Mission from "./Components/Mission/Mission";
// import Contactform from "./Components/ContactForm/Contactform.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/Industries" element={<Industries />} />
//         <Route path="/Choose" element={<Choose />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Mission" element={<Mission />} />
//         <Route path="/Chooseyellow" element={<Chooseyellow />} />
//         <Route path="/Contactform" element={<Contactform />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
