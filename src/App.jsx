import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Explore from "./components/Explore";
import Genre from "./components/Genre";
import Home from "./components/Home";
import Movies from "./components/Movies";
import News from "./components/News";
import TvShows from "./components/TvShows";
import NavBar from "./components/NavBar";
import AuthPages from "./components/Authpages";
import FetchApi from "./components/FecthingApi";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPages />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/news" element={<News />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/fetch-api" element={<FetchApi />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
