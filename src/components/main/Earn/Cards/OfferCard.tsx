import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io5";
import { PiCoinVerticalFill } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";

interface OfferCardProps {
  index: number;
  title: string;
  provider: string;
  price: number;
  image: string;
  platform: "android" | "ios" | "web";
  bgGradiant?: string;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const platformIcons = {
  android: <IoLogoAndroid />,
  ios: <IoLogoApple />,
  web: <FaGlobe />,
};

const OfferCard = memo(
  ({
    index,
    title,
    provider,
    price,
    image,
    platform,
    bgGradiant = "#FF6C0940"
  }: OfferCardProps) => {

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

    const handleModalOpen = useCallback(() => {
      const modal = document.getElementById("my_modal_3");
      if (modal) (modal as HTMLDialogElement).showModal();
    }, []);

    return (
      <motion.div
        className="card p-3 flex flex-row items-center justify-between w-64 md:w-80 flex-shrink-0 gap-3 md:gap-4 overflow-hidden relative px-4"
        style={{
          background: `linear-gradient(to right, transparent, ${bgGradiant} 100%, ${bgGradiant})`,
        }}
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
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaRegCirclePlay className="text-secondary-color" />
            </motion.div>

            <motion.div
              className="offers-devices absolute flex items-center bg-[#383d52d6] text-[0.7rem] md:text-[0.9rem] text-[#ddd] justify-center gap-1 w-auto p-[3px] md:p-[5px] rounded-[5px] ml-[8px] z-[2] top-1 left-[-6px]"
              whileInView={{ scale: [0.9, 1.1, 1] }}
              transition={{ duration: 0.5 }}
            >
              {platformIcons[platform]}
            </motion.div>

            <motion.img
              src={image}
              className="rounded-lg w-full object-cover aspect-square shadow-md"
              loading="lazy"
              alt={`${title} Icon`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </motion.div>
        </div>

        {/* Content Section - Middle */}
        <motion.div
          className="flex-grow overflow-hidden z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.05 }}
        >
          <h3 className="text-sm md:text-lg font-semibold truncate">{title}</h3>
          <p className="text-xs md:text-base text-base-content/60 truncate">
            {provider}
          </p>
          <div className="flex items-center gap-1">
            <span>${price.toFixed(2)}</span>
            <motion.span
              className="text-yellow-400"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <PiCoinVerticalFill />
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

export default OfferCard;
