// File: QuizTemplate.jsx
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
    let isCenter = false;

    return parts.map((part, index) => {
      if (part === '<b>') { isBold = true; return null; }
      if (part === '</b>') { isBold = false; return null; }
      if (part === '<i>') { isItalic = true; return null; }
      if (part === '</i>') { isItalic = false; return null; }
      if (part === '<center>') { isCenter = true; return null; }
      if (part === '</center>') { isCenter = false; return null; }
      if (part === '<br>') { return <br key={index} />; }
      if (part === '\t') { return <span key={index} className="inline-block w-8"></span>; }

      if (part) {
        let classes = "";
        if (isBold) classes += "font-bold text-primary "; 
        if (isItalic) classes += "italic ";
        if (isCenter) classes += "block text-center w-full "; 

        return <span key={index} className={classes}>{part}</span>;
      }
      return null;
    }).filter(Boolean);
  };

  const isBoldWrapped = typeof text === 'string' && text.trim().startsWith('<b>') && text.trim().endsWith('</b>');
  const showCursor = !isTypingComplete || (showCursorAfter && !isBoldWrapped);

  return (
    <p className={className}>
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

// --- Main Quiz Template Component ---
function QuizTemplate({
  quizUrl = "#",        
  backUrl = "#",        
  instructions = "This quiz is in multiple choice format. Please read each question carefully and select the best answer." 
}) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Standard Loading Sequence
  useEffect(() => {
    const img = new Image();
    img.src = bg;
    img.onload = () => {
      setTimeout(() => setIsLoading(false), 1500);
    };
  }, []);

  // --- LOADER RENDER ---
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
            INITIALIZING QUIZ PROTOCOL
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
      
      {/* Background & Overlay */}
      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={bg} 
        alt="Background" 
        className="fixed top-0 left-0 object-cover -z-20 w-full h-full"
      />
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* Header / Logo */}
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

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen py-20 relative z-10">
        
        {/* Main Title */}
        <motion.h1 
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter text-center text-primary mb-12 drop-shadow-[0_0_10px_currentColor] uppercase font-mokoto"
        >
          ARE YOU READY?
        </motion.h1>

        {/* Card Container */}
        <motion.div 
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-2xl bg-black/80 border border-primary/30 px-6 sm:px-12 py-12 rounded-xl backdrop-blur-md shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]"
        >
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>

          {/* Header inside Card */}
          <div className="text-center mb-6 border-b border-primary/20 pb-4">
            <h2 className="text-primary text-xl sm:text-2xl font-mono tracking-widest uppercase">
              <TypewriterText text="WELCOME TO THE QUIZ!" delay={0.8} speed={30} showCursorAfter={false} />
            </h2>
          </div>
          
          {/* Instructions Body */}
          <div className="min-h-[80px] text-center">
             <TypewriterText 
                text={instructions} 
                delay={1.5}
                speed={15}
                className="text-white/80 text-sm sm:text-lg font-sans leading-relaxed tracking-wide"
                showCursorAfter={true}
             />
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.8 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-6 items-center"
          >
            {/* NO Button */}
            <a href={backUrl} className="w-full sm:w-auto">
                <motion.button
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-40 py-3 px-6 border border-white/30 text-white/70 font-mono text-sm tracking-widest uppercase rounded hover:bg-white/5 transition-colors"
                >
                    Not Yet
                </motion.button>
            </a>

            {/* YES Button */}
            <a href={quizUrl} className="w-full sm:w-auto">
                <motion.button
                    whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 20px rgba(var(--primary-rgb), 0.6)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-48 py-4 px-8 border-2 border-primary bg-primary/10 text-primary font-bold font-mono text-lg tracking-[0.2em] uppercase rounded shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] hover:bg-primary hover:text-black transition-all duration-300 relative overflow-hidden group"
                >
                    <span className="relative z-10">YES!</span>
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-0"></div>
                </motion.button>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

export default QuizTemplate;