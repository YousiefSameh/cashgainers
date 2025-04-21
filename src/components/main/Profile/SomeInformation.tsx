import { motion } from "framer-motion";
import Avatar from "@assets/Avatar.png";

const SomeInformation = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="md:mb-6 my-6 p-6 bg-[#2A2E3F] flex items-center gap-4 rounded-lg w-[95%] md:w-full mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={Avatar}
        className="size-[80px] md:size-[120px] border-4 border-secondary-color rounded-full"
        alt="User Logo"
        variants={itemVariants}
        transition={{ type: "spring", stiffness: 100 }}
      />

      <motion.div
        className="text text-sm md:text-base"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        <motion.h3 variants={itemVariants}>
          <span className="text-base-content/60">ID: </span>{" "}
          coinsmakers_user11210
        </motion.h3>
        <motion.h3 variants={itemVariants}>
          <span className="text-base-content/60">Username: </span>{" "}
          YousiefSameh20
        </motion.h3>
        <motion.h3 variants={itemVariants}>
          <span className="text-base-content/60">Referred By: </span> None
        </motion.h3>
        <motion.h3 variants={itemVariants}>
          <span className="text-base-content/60">Joined At: </span> 2025-04-03
          01:54 AM
        </motion.h3>
      </motion.div>
    </motion.section>
  );
};

export default SomeInformation;
