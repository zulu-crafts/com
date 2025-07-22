import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../src/pages/about';
import Header from '../src/components/header';
import '../src/index.css';
import Footer from '../src/components/footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow px-4 py-8">
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer/>
        </main>
      </div>
    </Router>
  );
}

export default App;

