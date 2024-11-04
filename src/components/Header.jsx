import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

/**
 * Represents the header component containing the logo and navigation links.
 *
 * @component
 */

const Header = () => {
  return (
    <header className="header">

      <NavLink to="/">

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          {/* Animated logo image */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}

          />
        </motion.div>
      </NavLink>
      {/* Navigation links */}
      <NavLinks />
    </header>
  );
};

export default Header;
