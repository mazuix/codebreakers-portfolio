import React, { useState } from 'react';
import { Send } from 'lucide-react';

// Contact form component with fields and submit
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Container with all the information */}
      <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
        Send Us A Message
      </h3>
      
      {/* Form with input fields and loading */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border-b-2 border-cyan-700 text-gray-200 p-3 focus:outline-none focus:border-cyan-400 transition-all font-sans placeholder-transparent peer"
              placeholder="Your Name"
            />
            <label htmlFor="name" className="absolute left-3 -top-5 text-sm text-cyan-400 transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-cyan-400">
              Your Name
            </label>
          </div>
          
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border-b-2 border-cyan-700 text-gray-200 p-3 focus:outline-none focus:border-cyan-400 transition-all font-sans placeholder-transparent peer"
              placeholder="Your Email"
            />
            <label htmlFor="email" className="absolute left-3 -top-5 text-sm text-cyan-400 transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-cyan-400">
              Your Email
            </label>
          </div>
        </div>
        
        <div className="relative">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-black/40 border-b-2 border-cyan-700 text-gray-200 p-3 focus:outline-none focus:border-cyan-400 transition-all font-sans placeholder-transparent peer"
            placeholder="Subject"
          />
          <label htmlFor="subject" className="absolute left-3 -top-5 text-sm text-cyan-400 transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-cyan-400">
            Subject
          </label>
        </div>
        
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full bg-black/40 border-b-2 border-cyan-700 text-gray-200 p-3 focus:outline-none focus:border-cyan-400 transition-all font-sans resize-none placeholder-transparent peer"
            placeholder="Your Message"
          ></textarea>
          <label htmlFor="message" className="absolute left-3 -top-5 text-sm text-cyan-400 transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-cyan-400">
            Your Message
          </label>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-md relative overflow-hidden group transition-all duration-300 ease-out ${isSubmitting ? 'opacity-70' : ''}`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 group-hover:from-cyan-600 group-hover:to-fuchsia-600 transition-all duration-300"></span>
            <span className="relative flex items-center justify-center text-black font-bold">
              {isSubmitting ? (
                <span className="flex items-center">
                  <span className="mr-2">Sending</span>
                  <span className="animate-ping">.</span>
                  <span className="animate-ping delay-100">.</span>
                  <span className="animate-ping delay-200">.</span>
                </span>
              ) : (
                <span className="flex items-center">
                  <span className="mr-2">Send Message</span>
                  <Send size={16} />
                </span>
              )}
            </span>
          </button>
        </div>
        
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-900/20 border border-green-500 rounded-md text-green-400 font-sans text-sm animate-pulse">
            Your message has been sent successfully! We'll get back to you soon.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;