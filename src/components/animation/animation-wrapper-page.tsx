import { motion } from "framer-motion";
import type React from "react";
import { useLocation } from "react-router-dom";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <>
      <motion.div
        key={`overlay2-${location.pathname}`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0 }}
        className="fixed top-0 left-0 w-full h-screen bg-gray-900 origin-top"
      />
      {children}
    </>
  );
};

export default AnimationWrapper;
