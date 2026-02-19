import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Downloads from './pages/Downloads';
import Docs from './pages/Docs';
import Readme from './pages/legal/Readme';
import License from './pages/legal/License';
import CodeOfConduct from './pages/legal/CodeOfConduct';
import Contributing from './pages/legal/Contributing';
import Security from './pages/legal/Security';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-mono text-primary selection:bg-primary selection:text-black">
      <div className="scanline"></div>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/readme" element={<Readme />} />
          <Route path="/license" element={<License />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/contributing" element={<Contributing />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
