import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { offerwalls } from "../data/OfferwallData";

interface OfferwallPartnerProps {
  item: (typeof offerwalls)[0];
  index: number;
}

const overlayVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: {
    opacity: 1,
    backdropFilter: "blur(5px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const starVariants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
    },
  }),
};

const OfferwallPartnersCard = memo(({ item, index }: OfferwallPartnerProps) => {
  const handleModalOpen = useCallback(() => {
    const modal = document.getElementById("my_iframe");
    if (modal) (modal as HTMLDialogElement).showModal();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: { scale: 1.03 },
  };

  return (
    <motion.div
      className="card p-3 flex flex-row items-center justify-between w-64 md:w-80 flex-shrink-0 gap-3 md:gap-4 overflow-hidden relative px-4 bg-gradient-to-l from-[#3b7d6740] to-[#1D232A]"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      key={index}
    >
      {/* Image Section - Left Side */}
      <div className="flex-shrink-0 w-16 md:w-24 z-10">
        <motion.div
          className="relative group"
          onClick={handleModalOpen}
          whileHover={{ transition: { staggerChildren: 0.1 } }}
        >
          <motion.div
            className="overlay absolute top-0 left-0 h-full w-full backdrop-blur-[5px] hidden items-center justify-center text-none text-3xl md:text-4xl z-[3] rounded-lg cursor-pointer group-hover:flex"
            variants={overlayVariants}
            initial="hidden"
            whileHover="visible"
          >
            <FaRegCirclePlay className="text-secondary-color" />
          </motion.div>

          <motion.div className="bg-[#1D232A] rounded-lg flex items-center justify-center h-full aspect-square border border-[#3b7d67]">
            <motion.img
              src={item.img}
              className="w-3/4 h-auto object-contain p-2"
              loading="lazy"
              alt={`${item.name} Logo`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.span
        className="badge badge-soft rounded-none rounded-tr-selector badge-success text-white absolute top-0 right-0 text-xs z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {item.salePercent}
      </motion.span>

      {/* Content Section - Right Side */}
      <motion.div
        className="flex-grow overflow-hidden z-10 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 + index * 0.05 }}
      >
        <h3 className="text-sm md:text-lg font-semibold truncate">
          {item.name}
        </h3>

        <motion.div
          className="stars text-yellow-400 flex items-center gap-0.5 text-xs md:text-sm mb-1"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.span key={i} variants={starVariants} custom={i}>
              <FaStar />
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export default OfferwallPartnersCard;
