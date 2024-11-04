import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with images.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2800);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [setShowLoader]);

};

export default Loader;