// File: ContentPageTemplate.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import bg from '../assets/background.gif';
import logo from '../assets/logo.png';

function TypewriterText({ text, delay = 0, speed = 50, className = "" }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, delay * 1000);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, startTyping]);

  // Function to parse HTML tags in text
  const parseHtmlTags = (htmlText) => {
    // Split by bold, italic, center, br tags, and tab characters
    const parts = htmlText.split(/(<b>|<\/b>|<i>|<\/i>|<center>|<\/center>|<br>|\t)/);
    let isBold = false;
    let isItalic = false;
    let isCenter = false;

    return parts.map((part, index) => {
      // --- Toggle Flags ---
      if (part === '<b>') {
        isBold = true;
        return null;
      }
      if (part === '</b>') {
        isBold = false;
        return null;
      }
      if (part === '<i>') {
        isItalic = true;
        return null;
      }
      if (part === '</i>') {
        isItalic = false;
        return null;
      }
      if (part === '<center>') {
        isCenter = true;
        return null;
      }
      if (part === '</center>') {
        isCenter = false;
        return null;
      }
      
      // --- Direct Renders ---
      if (part === '<br>') {
        return <br key={index} />;
      }
      if (part === '\t') {
        // Renders a generic tab space
        return <span key={index} className="inline-block w-8"></span>; 
      }

      // --- Text Content ---
      if (part) {
        let classes = "";
        if (isBold) classes += "font-bold ";
        if (isItalic) classes += "italic ";
        if (isCenter) classes += "block text-center w-full "; 

        return (
          <span key={index} className={classes}>
            {part}
          </span>
        );
      }
      return null;
    }).filter(Boolean);
  };

  return (
    <p className={className}>
      {parseHtmlTags(displayedText)}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block w-1 h-5 bg-primary align-middle"
      />
    </p>
  );
}

function ContentPageTemplate({
  title,
  header,
  paragraphs,
  references,
  images,
  imagePositions = { img1: 'top-left', img2: 'bottom-right' }
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bg;
    img.onload = () => {
      setBgLoaded(true);
      setTimeout(() => setIsLoading(false), 300);
    };
  }, []);


  const getImageClasses = (positionKey) => {
    const positions = {
      'top-left': "-top-6 sm:-top-10 md:-top-12 -left-6 sm:-left-8 md:-left-12",
      'top-right': "-top-6 sm:-top-10 md:-top-12 -right-6 sm:-right-8 md:-right-12",
      'bottom-left': "-bottom-6 sm:-bottom-10 md:-bottom-12 -left-6 sm:-left-8 md:-left-12",
      'bottom-right': "-bottom-6 sm:-bottom-10 md:-bottom-12 -right-6 sm:-right-8 md:-right-12"
    };
    return positions[imagePositions[positionKey]] || positions[positionKey];
  };

  const renderContent = () => {
    return paragraphs.map((item, index) => {
      // Image Object
      if (typeof item === 'object' && item.src) {
        const widthClass = item.size === 'half' ? 'w-1/2' : 'w-full';
        
        return (
          <motion.div
            key={`image-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="my-6 flex justify-center"
          >
            <img 
              src={item.src} 
              alt={item.alt || "Content"} 
              className={`${widthClass} h-auto transition-all duration-300`}
            />
          </motion.div>
        );
      }
      
      // List Object
      if (typeof item === 'object' && item.type === 'list') {
        const ListComponent = item.ordered ? motion.ol : motion.ul;
        
        return (
          <ListComponent
            key={`list-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className={item.ordered ? "list-decimal pl-5 mt-2 text-sm sm:text-base md:text-lg text-gray-700" : "list-disc pl-10 mt-2 mb-4 text-sm sm:text-base md:text-lg text-gray-700"}
          >
            {item.items.map((listItem, itemIndex) => (
              <li key={itemIndex} className="mb-2 pl-2">
                <TypewriterText 
                  text={listItem}
                  delay={1.1 + (itemIndex * 0.2)} 
                  speed={2}
                  className="block text-justify text-secondary"
                />
              </li>
            ))}
          </ListComponent>
        );
      }
      
      // Regular Paragraph String
      return (
        <TypewriterText 
          key={`text-${index}`}
          text={item}
          delay={1.1} 
          speed={2}
          className="text-secondary mt-4 text-sm sm:text-base md:text-lg break-words mb-2 sm:mb-2 text-justify"
        />
      );
    });
  };
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-16 h-16 border-4 border-t-primary border-r-secondary border-b-accent border-l-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-white text-lg font-medium">Loading cosmic experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 relative overflow-hidden">
      <motion.img 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={bg} 
        alt="background" 
        className="absolute top-0 left-0 object-cover -z-20 w-full h-full"
      />

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10"
      >
        <motion.img 
          whileHover={{ scale: 1.1, rotate: 5 }}
          src={logo} 
          alt="logo" 
          className="h-12 w-12 sm:h-16 sm:w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 object-cover rounded-full mr-3" 
        />
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-squartiqa text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-primary whitespace-nowrap"
        >
          ASTRION INC.
        </motion.h1>
      </motion.div>

      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-screen pb-20">
        <div className="p-6 sm:p-8 md:p-12 w-full">
          <motion.h1 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-squartiqa text-center text-primary mb-10 sm:mb-16 md:mb-20"
          >
            {title}
          </motion.h1>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative mb-8 bg-primary px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 rounded-3xl font-inter shadow-xl border-2 border-transparent hover:border-white transition-all"
            whileHover={{ 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              y: -5
            }}
          >
            <motion.img 
              initial={{ x: -50, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 0.7, 
                delay: 0.7,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              className={`w-16 sm:w-24 md:w-32 absolute ${getImageClasses('img1')}`} 
              src={images[0]} 
              alt="Decorative element 1" 
              whileHover={{ rotate: 10, scale: 1.1 }}
            />
            
            <motion.img 
              initial={{ x: 50, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 0.7, 
                delay: 0.9,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              className={`w-16 sm:w-24 md:w-32 absolute ${getImageClasses('img2')}`} 
              src={images[1]} 
              alt="Decorative element 2" 
              whileHover={{ rotate: -10, scale: 1.1 }}
            />

            <div className="text-secondary text-lg sm:text-xl md:text-2xl font-bold text-gray-800 break-words mb-4 sm:mb-6 min-h-[2em] text-center font-mokoto">
              <TypewriterText 
                text={header} 
                delay={0.8} 
                speed={5} 
              />
            </div>
            
            {renderContent()}
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.0 }}
                className="mt-6 text-xs sm:text-sm md:text-base text-gray-600 italic break-words text-justify"
              >
                Reference:
              </motion.p>
            {references.map((ref, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3.0 }}
                className="mb-2 text-xs sm:text-sm md:text-base text-gray-600 italic break-words text-justify"
              >
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {ref.text}
                </a>
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContentPageTemplate;