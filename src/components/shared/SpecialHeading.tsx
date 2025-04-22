import { motion } from "framer-motion";

const SpecialHeading = ({ title, icon }: { title: string; icon: React.ReactNode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="special-heading flex items-center gap-4 text-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <motion.span
        className="text-primary-color"
        aria-hidden="true"
        variants={iconVariants}
      >
        {icon}
      </motion.span>
      
      <motion.h1
        className="font-bold"
        variants={itemVariants}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

export default SpecialHeading;