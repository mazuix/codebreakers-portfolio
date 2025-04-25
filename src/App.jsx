// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';  
import TeamPage from './pages/TeamPage';
import HazelProfile from './members/HazelProfile';
import DanielaProfile from './members/DanielaProfile';
import ChaProfile from './members/ChaProfile';
import JasmineProfile from './members/JasmineProfile';
import JoeyProfile from './members/JoeyProfile';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />  
          <Route path="/team" element={<TeamPage />} />
          <Route path="/member/hazel" element={<HazelProfile />} />
          <Route path="/member/daniela" element={<DanielaProfile />} />
          <Route path="/member/cha" element={<ChaProfile />} />
          <Route path="/member/jasmine" element={<JasmineProfile />} />
          <Route path="/member/joey" element={<JoeyProfile />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;