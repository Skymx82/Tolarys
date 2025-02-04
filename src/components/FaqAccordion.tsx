import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-4 sm:p-6 text-left flex justify-between items-center"
          >
            <span className="text-sm sm:text-base font-semibold text-text-light pr-4">
              {item.question}
            </span>
            <span
              className={`text-pink transition-transform duration-300 text-xl ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-6 pt-0 sm:pt-0 text-sm sm:text-base text-text-light/80">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
