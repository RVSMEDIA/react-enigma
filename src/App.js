import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Work from "./Work";
import Ecommerce from "./Ecommerce";
import Seo from "./Seo";
import About from "./About";
import Error from "./Error";
import MainHeader from "./MainHeader";
function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element = {<MainHeader />} >
            <Route index element = {<Home/>} />
            <Route path ="work" element = {<Work/>} />
            <Route path ="ecommerce" element = { <Ecommerce/>} />
            <Route path ="seo" element = { <Seo/>} />
            <Route path ="about" element = { <About/>} />
            <Route path ="*" element={ <Error/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
