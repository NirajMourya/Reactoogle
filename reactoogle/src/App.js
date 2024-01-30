import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css';
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
