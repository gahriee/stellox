// File: ContentPageTemplate.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import bg from '../assets/background.gif'; 
import logo from '../assets/logo.png'; 

// --- Utility: Typewriter Component ---
function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 40, 
  className = "", 
  showCursorAfter = false 
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false); 

  // 1. Detect if the user wants this text centered
  const hasCenterTag = typeof text === 'string' && text.includes('<center>');

  // 2. Adjust the className dynamically
  // If <center> is found, remove 'text-justify' and add 'text-center'
  const appliedClassName = hasCenterTag 
    ? className.replace('text-justify', 'text-center') 
    : className;

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, delay * 1000);
    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (startTyping) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsTypingComplete(true);
      }
    }
  }, [currentIndex, text, speed, startTyping]);

  const parseHtmlTags = (htmlText) => {
    const parts = htmlText.split(/(<b>|<\/b>|<i>|<\/i>|<center>|<\/center>|<br>|\t)/);
    let isBold = false;
    let isItalic = false;

    return parts.map((part, index) => {
      if (part === '<b>') { isBold = true; return null; }
      if (part === '</b>') { isBold = false; return null; }
      if (part === '<i>') { isItalic = true; return null; }
      if (part === '</i>') { isItalic = false; return null; }
      
      // 3. Just strip the <center> tags here. 
      // We handled the alignment in the parent className above.
      if (part === '<center>' || part === '</center>') { return null; }
      
      if (part === '<br>') { return <br key={index} />; }
      if (part === '\t') { return <span key={index} className="inline-block w-8"></span>; }

      if (part) {
        let classes = "";
        if (isBold) classes += "font-bold text-primary "; 
        if (isItalic) classes += "italic ";
        
        // Note: No specific class needed for center here, as the parent <p> does it.
        return <span key={index} className={classes}>{part}</span>;
      }
      return null;
    }).filter(Boolean);
  };

  const isBoldWrapped = typeof text === 'string' && text.trim().startsWith('<b>') && text.trim().endsWith('</b>');
  const showCursor = !isTypingComplete || (showCursorAfter && !isBoldWrapped);

  return (
    // Use the `appliedClassName` here
    <p className={appliedClassName}>
      {parseHtmlTags(displayedText)}
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="ml-1 inline-block h-5 w-[2px] bg-primary align-middle shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]"
        />
      )}
    </p>
  );
}

// --- Main Template Component ---
function ContentPageTemplate({
  title,
  header,
  paragraphs,
  references,
  images,
  imagePositions = { img1: 'top-left', img2: 'bottom-right' }
}) {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const img = new Image();
    img.src = bg;
    img.onload = () => {
      setTimeout(() => setIsLoading(false), 1500);
    };
  }, []);

  const getImageClasses = (positionKey) => {
    const positions = {
      'top-left': "-top-8 -left-8",
      'top-right': "-top-8 -right-8",
      'bottom-left': "-bottom-8 -left-8",
      'bottom-right': "-bottom-8 -right-8"
    };
    return positions[imagePositions[positionKey]] || positions[positionKey];
  };

  const renderContent = () => {
    return paragraphs.map((item, index) => {
      
      // --- LOGIC: Check Next Item ---
      const isLastItem = index === paragraphs.length - 1;
      const nextItem = index < paragraphs.length - 1 ? paragraphs[index + 1] : null;

      // Check 1: Is the next item an Object? (List or Image)
      const nextIsObject = typeof nextItem === 'object' && nextItem !== null;
      
      // Check 2: Is the next item a "Bold Header" Paragraph?
      const nextIsBoldHeader = typeof nextItem === 'string' && 
                               nextItem.trim().startsWith('<b>') && 
                               nextItem.trim().endsWith('</b>');

      // DECISION: Keep cursor if Last Item OR Next is Object OR Next is Bold Header
      const shouldKeepCursor = isLastItem || nextIsObject || nextIsBoldHeader;

      // 1. Image Object
      if (typeof item === 'object' && item.src && item.alt) {
        // UPDATED: Removed previous widthClass logic. 
        // Added `w-full md:w-1/2` directly to the img className for responsive sizing.
        return (
          <motion.div
            key={`image-${index}`}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="my-8 flex justify-center relative group"
          >
            <img 
              src={item.src} 
              alt={item.alt || "Content"} 
              className={`w-full md:w-1/2 h-auto border-2 border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] bg-black/50 p-1`}
            />
          </motion.div>
        );
      }
      
      // 2. List Object
      if (typeof item === 'object' && item.type === 'list') {
        const ListComponent = item.ordered ? motion.ol : motion.ul;
        return (
          <ListComponent
            key={`list-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }} 
            className="p-0 mt-4 mb-6 text-sm sm:text-base md:text-lg text-white"
          >
            {item.items.map((listItem, itemIndex) => {
              // Only the very last item in the list should inherit the `shouldKeepCursor` logic
              const isLastListItem = itemIndex === item.items.length - 1;
              
              return (
                <li key={itemIndex} className="mb-3 pl-2 border-l-2 border-primary">
                  <TypewriterText 
                    text={listItem}
                    delay={1.0 + (itemIndex * 0.3)} 
                    speed={10} 
                    className="block text-justify text-white/90 font-mono"
                    // If last item in list, use parent block logic (shouldKeepCursor). Otherwise false.
                    showCursorAfter={isLastListItem && shouldKeepCursor} 
                  />
                </li>
              );
            })}
          </ListComponent>
        );
      }
      
      if (typeof item === 'object' && item.type === 'video') {
        return (
          <motion.div
            key={`video-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="my-8 w-full aspect-video border-2 border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] bg-black/50 p-1"
          >
            <iframe
              className="w-full h-full"
              src={item.src}
              title={item.title || "Video player"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        );
      }

      // 3. Regular Paragraph
      return (
        <TypewriterText 
          key={`text-${index}`}
          text={item}
          delay={1.0} 
          speed={5} 
          className="text-white/80 mt-4 text-sm sm:text-base md:text-lg break-words mb-4 text-justify font-sans leading-relaxed tracking-wide"
          showCursorAfter={shouldKeepCursor}
        />
      );
    });
  };

  // --- LOADER ---
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden relative">
        <div className="relative z-10 w-64 text-center">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "100%" }} 
            transition={{ duration: 1.5 }}
            className="h-1 bg-primary mb-4 shadow-[0_0_10px_currentColor] text-primary" 
          />
          
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-primary font-mono text-xs tracking-[0.3em] mb-2"
          >
            INITIALIZING STELLOX
          </motion.h2>

          <div className="flex justify-center gap-2">
             {[...Array(3)].map((_, i) => (
               <motion.div
                key={i}
                animate={{ height: [10, 30, 10] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                className="w-2 bg-primary"
               />
             ))}
          </div>

          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "100%" }} 
            transition={{ duration: 1.5 }}
            className="h-1 bg-primary mt-4 shadow-[0_0_10px_currentColor] text-primary" 
          />
        </div>
      </div>
    );
  }

  // --- COMPONENT RENDER ---
  return (
    <div className="min-h-screen px-4 relative overflow-hidden font-sans text-gray-200">
      
      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={bg} 
        alt="Background" 
        className="fixed top-0 left-0 object-cover -z-20 w-full h-full"
      />
      
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-6 left-6 z-20 flex items-center gap-3"
      >
        <motion.div 
          className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center p-1 bg-black/50 backdrop-blur-sm"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="emblem" className="w-full h-full object-contain filter drop-shadow-[0_0_5px_currentColor] text-primary" />
        </motion.div>
        <div className="flex flex-col">
           <span className="text-primary font-bold tracking-[0.1em] text-md">ASTRION INC.</span>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen py-20 relative z-10">
        
        <motion.h1 
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter text-center text-primary mb-12 drop-shadow-[0_0_10px_currentColor] uppercase font-mokoto"
        >
          {title}
        </motion.h1>

        <motion.div 
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full bg-black/80 border border-primary/30 px-6 sm:px-10 py-10 rounded-xl backdrop-blur-md shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]"
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>

          <motion.img 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
            className={`w-20 sm:w-28 absolute ${getImageClasses('img1')} drop-shadow-lg`}
            src={images[0]} 
            alt="Decorative 1" 
          />
          
          <motion.img 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`w-20 sm:w-28 absolute ${getImageClasses('img2')} drop-shadow-lg`}
            src={images[1]} 
            alt="Decorative 2" 
          />

          <div className="text-center mb-8 border-b border-primary/20 pb-4">
            <h2 className="text-primary text-xl sm:text-2xl font-mono tracking-widest uppercase">
              <TypewriterText text={header} delay={0.8} speed={30} showCursorAfter={false} />
            </h2>
          </div>
          
          <div className="min-h-[200px]">
            {renderContent()}
          </div>

          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="mt-12 pt-4 border-t border-primary/20"
            >
              {references !== undefined && <p className="text-xs text-primary/70 uppercase tracking-widest mb-2">Reference:</p>}
              {references !== undefined && 
                references.map((ref, index) => (
                <div key={index} className="flex items-center gap-2 mb-1">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-white hover:text-primary transition-colors font-mono truncate underline italic"
                  >
                    {ref.text}
                  </a>
                </div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContentPageTemplate;