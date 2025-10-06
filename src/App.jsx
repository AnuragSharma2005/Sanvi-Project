import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './Component/Homepage'
import Navbar from './Component/Navbar'
import UberCards from "./Component/ubercards"
import Uhistory from "./Component/Uhistory"
import Uchallenge from "./Component/uchallenge"
import Uscope from "./Component/uscope"
import Amazoncards from "./Component/amazoncards"
import Ahistory from "./Component/Ahistory"
import Achallenge from "./Component/Achallenge"
import Ascope from "./Component/Ascope"
// import About from "./Component/About"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ubercards" element={<UberCards />} />
        <Route path="/uhistory" element={<Uhistory />} />
         <Route path="/uchallenge" element={<Uchallenge />} />
          <Route path="/uscope" element={<Uscope/>} />
          <Route path="/Amazoncards" element={<Amazoncards/>} />
           <Route path="/Ahistory" element={<Ahistory/>} />
            <Route path="/Achallenge" element={<Achallenge/>} />
            <Route path="/Ascope" element={<Ascope/>} />
            {/* <Route path="/About" element={<About/>} /> */}
      </Routes>
    </Router>
  )
}

export default App
