import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import MovieDetail from "./pages/detail";
import SearchResult from "./pages/result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetail />} />
        <Route path="/results/:query" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
