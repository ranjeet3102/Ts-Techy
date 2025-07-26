
import React, { useState } from 'react';
import Beams from '../../../design/beams.jsx';

const UserIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function contactlaptop() {
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
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Form submission error:", await response.json());
        setStatus('error');
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
  return (
    // ADDED: flex items-center justify-center to center the content
    <div className="relative rounded-[2rem] min-h-screen w-[1150px] bg-black font-sans overflow-hidden flex items-center justify-center p-4">
      
      {/* Background Beams Component */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={15}
        />
      </div>

      {/* Centered Content Card */}
      <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm border border-indigo-500/20 p-8 sm:p-12 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-gray-300">Your message has been sent successfully. We'll get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
      
    </div>
  );
}

  return (
    <div className="relative rounded-[2rem] min-h-screen w-[1150px] bg-black font-sans overflow-hidden">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={15}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl mx-auto p-8 sm:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Let's Get In Touch.
              </h1>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <UserIcon className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <MailIcon className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pr-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your main text here..."
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm mb-4 text-center">
                      Oops! Something went wrong. Please check your connection and try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 
bg-gradient-to-r from-[#111827] to-[#F9FAFB] 
hover:from-[#F9FAFB] hover:to-[#111827] 
text-black font-semibold py-3 px-4 rounded-lg 
focus:outline-none focus:ring-4 focus:ring-offset-2 
focus:ring-offset-black focus:ring-white 
disabled:opacity-50 disabled:cursor-not-allowed 
transition-all duration-300 group  shadow-lg shadow-white/20
"                 >
                    <span>{status === 'submitting' ? 'Submitting...' : 'Submit Form'}</span>
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
