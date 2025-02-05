import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Initialiser EmailJS
emailjs.init("HCIjg_LxZu4OsbBun");

interface FormData {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      
      try {
        await emailjs.send(
          "service_8bz7atr", // Service ID from EmailJS
          "template_fn3kg4c", // Template ID from EmailJS
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: "Tolarys",
          }
        );
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', subject: '' });
      } catch (error) {
        setSubmitStatus('error');
        console.error('Erreur lors de l\'envoi:', error);
      }
      
      setIsSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const inputClasses = "w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-xl text-text-light placeholder-text-light/50 focus:outline-none focus:ring-2 focus:ring-pink text-sm sm:text-base";
  const labelClasses = "block text-sm sm:text-base font-medium text-text-light mb-2";

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-6 bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl"
      >
        <div>
          <label htmlFor="name" className={labelClasses}>
            Nom
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Votre nom"
            required
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-1 text-pink text-sm"
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="votre@email.com"
            required
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-1 text-pink text-sm"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className={labelClasses}>
            Sujet
          </label>
          <motion.select
            whileFocus={{ scale: 1.01 }}
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses}
            required
          >
            <option value="">Choisissez un sujet</option>
            <option value="site-web" className="bg-background-dark">Site Web</option>
            <option value="app-mobile" className="bg-background-dark">Application Mobile</option>
            <option value="maintenance" className="bg-background-dark">Maintenance</option>
            <option value="autre" className="bg-background-dark">Autre</option>
          </motion.select>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Décrivez votre projet..."
            required
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-1 text-pink text-sm"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-colors text-sm sm:text-base
            ${isSubmitting 
              ? 'bg-pink/50 cursor-not-allowed' 
              : 'bg-pink hover:bg-pink-dark'
            } text-white`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </span>
          ) : (
            'Envoyer'
          )}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm sm:text-base text-center"
          >
            Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-pink/20 backdrop-blur-sm rounded-lg text-text-light text-center"
          >
            Une erreur est survenue. Veuillez réessayer plus tard.
          </motion.div>
        )}
      </motion.form>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-text-light mb-4">Contactez-nous directement</h3>
          <div className="flex flex-col space-y-4">
            <a 
              href="tel:+33679336812" 
              className="flex items-center text-text-light hover:text-pink transition-colors"
            >
              <span className="text-2xl mr-2">📞</span>
              <span>06 79 33 68 12</span>
            </a>
            <a 
              href="mailto:contact@tolarys.fr" 
              className="flex items-center text-text-light hover:text-pink transition-colors"
            >
              <span className="text-2xl mr-2">📧</span>
              <span>contact@tolarys.fr</span>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-text-light mb-4">Suivez-nous</h3>
          <div className="flex flex-col space-y-4">
            <a 
              href="https://www.linkedin.com/company/tolarys" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-text-light/80 hover:text-pink transition-colors"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>Tolarys</span>
            </a>
            <a 
              href="https://www.facebook.com/tolarystoulouse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-text-light/80 hover:text-pink transition-colors"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
              <span>@tolarystoulouse</span>
            </a>
            <a 
              href="https://www.instagram.com/tolarys_toulouse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-text-light/80 hover:text-pink transition-colors"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@tolarys_toulouse</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
