import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      
      // Simuler l'envoi (à remplacer par votre vrai endpoint)
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', subject: '' });
      } catch (error) {
        setSubmitStatus('error');
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

      <div className="space-y-6 p-4 sm:p-6 md:p-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-text-light mb-2">Contact Direct</h3>
          <p className="text-sm sm:text-base text-text-light/80 mb-4">
            Préférez un contact direct ? Nous sommes là pour vous !
          </p>
          <div className="space-y-4">
            <a 
              href="tel:0679336812" 
              className="flex items-center text-text-light hover:text-pink transition-colors text-sm sm:text-base"
            >
              <span className="text-xl sm:text-2xl mr-2">📞</span>
              <span>06 79 33 68 12</span>
            </a>
            <a 
              href="mailto:contact@tolarys-toulouse.fr" 
              className="flex items-center text-text-light hover:text-pink transition-colors text-sm sm:text-base"
            >
              <span className="text-xl sm:text-2xl mr-2">📧</span>
              <span>contact@tolarys-toulouse.fr</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
