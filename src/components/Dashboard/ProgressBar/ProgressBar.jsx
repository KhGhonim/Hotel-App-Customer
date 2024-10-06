import { motion } from "framer-motion";

export default function ProgressBar({ percentage }) {
  const variants = {
    hidden: { width: "0%" },
    visible: {
      width: `${percentage}%`,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div className="h-2 w-3/4 overflow-hidden rounded-full bg-green-600">
      <motion.div
        className="h-full rounded-full bg-white"
        initial="hidden"
        animate="visible"
        variants={variants}
      />
    </div>
  );
}
