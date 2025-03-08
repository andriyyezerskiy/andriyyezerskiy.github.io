import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-pink-400 via-orange-300 to-gray-100 blur-3xl"
      animate={{ scale: [1, 1.2, 1], x: ["-10%", "10%", "-10%"], y: ["-10%", "10%", "-10%"] }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
    />
  );
}
