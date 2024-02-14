import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import { Signup } from "./Components/Signup";

const pageAbout = {
  marginTop: "50px",
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<h1 style={pageAbout}>Home Page</h1>} />
          <Route
            path="/add"
            element={<h1 style={pageAbout}>Add Products Page</h1>}
          />
          <Route
            path="/update"
            element={<h1 style={pageAbout}>Update Products Page</h1>}
          />
          <Route
            path="/logout"
            element={<h1 style={pageAbout}>Logout Page</h1>}
          />
          <Route
            path="/profile"
            element={<h1 style={pageAbout}>Profile Page</h1>}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
