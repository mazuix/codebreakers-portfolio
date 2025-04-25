// components/Layout.jsx
import React from 'react';
import PortfolioBG from './PortfolioBG';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Fixed background layer */}
      <div className="fixed inset-0 z-0">
        <PortfolioBG />
      </div>

      {/* Navigation with sticky positioning */}
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow">
        {children}
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;