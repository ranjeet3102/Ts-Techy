import React, { useState } from 'react';
import Galaxy from '../../design/galaxy.jsx';
import './Contact.css'; 
import { Mail, User, MessageSquare, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdkderpg';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        console.error("Form submission error:", await response.json());
        setStatus('error');
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setStatus('error');
    }
  };

  return (
    <section className="relative w-full bg-[#000010] py-20 sm:py-32">
      <div className="galaxy-background">
        <Galaxy 
          mouseRepulsion={true}
          density={1.5}
          glowIntensity={0.4}
          hueShift={240}
        />
      </div>
      <div className="relative z-10 mx-auto px-4">
        <div className="w-full max-w-5xl mx-auto p-6 sm:p-8 lg:p-12 space-y-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Contact Us</h1>
            <p className="mt-2 text-gray-300">Our team is ready to help you</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <p className="text-gray-300 text-base sm:text-lg">
                Our dedicated team is prepared and eager to provide you with the assistance you need, ensuring your success and satisfaction. Feel free to reach out anytime for our support.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl">Our Address</h3>
                    <p className="text-gray-300">Kovaipudur, Coimbatore, Tamilnadu, India 641042</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl">Contact Info</h3>
                    <p className="text-gray-300">Give us a call at</p>
                    <a href="tel:+917845105058" className="text-white font-bold hover:text-blue-400 transition">+91 78451 05058</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl">Live Support</h3>
                    <p className="text-gray-300">Live chat service</p>
                    <a href="mailto:support@tstechy.com" className="text-white font-bold hover:text-blue-400 transition">support@tstechy.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {status === 'success' ? (
                <div className="text-center bg-gray-700/50 p-8 rounded-lg">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">Thank You!</h2>
                  <p className="text-gray-300 mb-6">Your message has been sent. We'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-all duration-300 group"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="relative">
                    <User className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="block w-full pl-12 pr-3 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                  </div>
                  <div className="relative">
                    <Mail className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="block w-full pl-12 pr-3 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                  </div>
                  <div className="relative">
                    <MessageSquare className="pointer-events-none w-5 h-5 absolute top-4 left-4 text-gray-400" />
                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Your Message" required className="block w-full pl-12 pr-3 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"></textarea>
                  </div>
                  <div>
                    {status === 'error' && (
                      <p className="text-red-400 text-sm mb-4 text-center">
                        Oops! Something went wrong. Please try again.
                      </p>
                    )}
                    <button type="submit" disabled={status === 'submitting'} className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 group">
                      <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;