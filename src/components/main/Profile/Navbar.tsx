import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const navbarLinks = [
  { path: "/profile", id: "about", text: "About" },
  { path: "/profile/update", id: "update", text: "Edit Profile" },
  { path: "/profile/password", id: "password", text: "Change Password" },
  {
    path: "/profile/twofactor",
    id: "twofactor",
    text: "2-FA Authentication",
  },
  { path: "/profile/account", id: "account", text: "Account Settings" },
];

const Navbar = () => {
  const [active, setActive] = useState("about");

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.nav
      className="flex items-center gap-2 border-b border-gray-500 w-full overflow-x-auto px-2 md:p-0"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {navbarLinks.map((tab) => (
        <motion.div
          key={tab.id}
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300 }}
          className="flex-1"
        >
          <Link
            to={tab.path}
            onClick={() => setActive(tab.id)}
            className={`min-w-fit max-w-[350px] w-full flex items-center justify-center px-[10px] py-[15px] text-base whitespace-nowrap md:text-lg rounded-t-sm ${
              active === tab.id
                ? "bg-secondary-color text-blue-middle"
                : "bg-blue-middle hover:bg-secondary-color/80 hover:text-blue-middle"
            } transition-colors duration-200`}
          >
            {tab.text}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Navbar;
