import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <div id='content' className="w-5/6 sm:w-2/3 m-auto">
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects perPage={15} pagination={true} columns={3} />} />
            <Route path="/projects/:id" element={<h1>hello there</h1>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
