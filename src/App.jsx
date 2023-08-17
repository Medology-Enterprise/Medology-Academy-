import "./App.css";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Mentoring from "./components/Mentoring";
import Resources from "./components/Resources";
import Guides from "./components/Guides";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route
              index
              element={
                <>
                  <Hero />
                </>
              }
            />
            <Route exact path="/" element={<Hero />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/mentoring" element={<Mentoring />} />
            <Route exact path="/resources" element={<Resources />} />
            <Route exact path="/guides" element={<Guides />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
