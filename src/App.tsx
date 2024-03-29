import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";

function App() {
    return (
        <Router>
            <Header />
            <div id="content" className="w-5/6 sm:w-2/3 m-auto">
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<h1>hello there</h1>} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blogs />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
