import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // <- changed here
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import GiftsPage from './pages/GiftsPage';
import PencilArtsPage from './pages/PencilArtsPage';
import AccessoriesPage from './pages/AccessoriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/romantica" element={<HomePage />} /> {/* <- changed from /romantica */}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/gifts" element={<GiftsPage />} />
          <Route path="/pencil-arts" element={<PencilArtsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
