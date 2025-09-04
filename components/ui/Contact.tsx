'use client';

import { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react'; // Added CheckCircle, XCircle for feedback icons

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // null, true, or false

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitMessage(''); // Clear message on input change
    setIsSuccess(null); // Reset success state
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsSuccess(null);

    console.log("Submitting form...");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('An unexpected error occurred. Please try again later.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 animate-pulse">
          Get In Touch
        </h2>
        <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300">
          <p className="text-center text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Have a project in mind or just want to say hello? Fill out the form below, and I'll get back to you as soon as possible!
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-base font-semibold text-gray-200 mb-3 sr-only">Name</label> {/* SR only for visual but accessible label */}
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-gray-200 mb-3 sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-base font-semibold text-gray-200 mb-3 sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows={6} // Increased rows for more space
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-sm resize-y" // Added resize-y
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  relative px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center gap-2
                  bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg
                  hover:from-orange-600 hover:to-red-700 hover:shadow-xl
                  focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50
                  transition-all duration-300 transform ${isSubmitting ? 'scale-95 cursor-not-allowed opacity-75' : 'hover:scale-105'}
                `}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </div>
          </form>
          {submitMessage && (
            <p className={`mt-8 text-center text-lg flex items-center justify-center gap-2 ${
              isSuccess === true ? 'text-green-400' : 'text-red-400'
            }`}>
              {isSuccess === true ? <CheckCircle size={24} /> : <XCircle size={24} />}
              {submitMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
