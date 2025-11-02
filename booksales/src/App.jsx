import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import GenreEdit from "./pages/Genreedit";
import GenreList from "./pages/Genrelist";
import Register from "./pages/Register";


function App() {
  return (
    <Router>
      <nav style={{ margin: "10px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/books">Books</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Book />} />
        <Route path="/genre/list/:id" element={<GenreList />} />
        <Route path="/genre/edit/:id" element={<GenreEdit />} />
         <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
