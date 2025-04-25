import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import ContactSidebar from '../components/ContactSidebar';

const ContactPage = ({ isEmbedded = false }) => {
  return (
    <div className={`${isEmbedded ? '' : 'min-h-screen'} pb-8 px-4`}>
      <div className="max-w-6xl mx-auto">
        <PageHeader 
          title="Get In"
          highlightedWord="Touch"
          subtitle="CONNECT WITH OUR TEAM FOR COLLABORATIONS, INQUIRIES, OR JUST TO SAY HELLO"
        />

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
          
          {/* Content grid */}
          <div className="relative grid md:grid-cols-3 gap-0 bg-black/20 backdrop-blur-md p-1 rounded-xl border border-gray-800">
            <div className="md:col-span-2 p-4 md:p-5 relative">
              <ContactForm />
              
              {/* Vertical divider that only appears on medium screens and up */}
              <div className="hidden md:block absolute top-4 bottom-4 right-0 w-px bg-gradient-to-b from-cyan-500/30 via-fuchsia-500/30 to-cyan-500/30"></div>
            </div>
            
            <div className="p-4 md:p-5 md:pl-6">
              <ContactSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;