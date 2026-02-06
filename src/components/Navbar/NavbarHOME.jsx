import { FaArrowLeft, FaPaw } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

export default function NavBarHome({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Alternative with slide-in from top animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.3 },
            }}
            className="fixed bg-gray-500/50 backdrop-blur-sm top-14 w-full h-screen z-200 pt-10"
          >
            <div className="container mx-auto px-6 ">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
                className="space-y-8"
              >
                {["Home", "How it Works", "About", "Contact"].map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <a
                      href="#"
                      className="flex items-center text-white text-2xl font-medium hover:text-[var(--primary)] transition-colors duration-200 py-2 group"
                    >
                      <motion.span
                        className="w-2 h-2 bg-[var(--primary)] rounded-full mr-4"
                        whileHover={{ scale: 1.5, opacity: 1 }}
                        initial={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute left-0 right-0 px-12 pt-10"
              >
                {/* Buttons remain the same */}
                <div className="absolute  left-0 right-0 px-12 pt-10">
                  <div className="flex flex-col space-y-4">
                    <button className="bg-transparent border-2 border-white text-white font-semibold py-4 rounded-lg hover:bg-white/10 transition-colors">
                      Login
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      <div className="__nav_home__ z-30 bg-white fixed  w-full min-h-10 h-14 md:h-20 md:px-10 px-10 lg:px-20 py-5 flex items-center justify-between  shadow-sm">
        {window.location.pathname.startsWith("/chat") && (
          <Link
            to={"/"}
            className="text-1xl text-[var(--black)] md:hidden mr-5"
          >
            <FaArrowLeft className="" />
          </Link>
        )}
        <section className="block">
          <section className="__logo__ flex items-center  justify-center gap-3 font-[oughter]">
            <FaPaw className="text-[var(--orange)] text-2xl md:text-4xl" />
            <h1 className="text-[var(--black)] text-xl md:text-3xl pt-1">
              <span className="text-[var(--orange)]">Vet</span>Bot
            </h1>
          </section>
        </section>

        <div className="__nav_pc__ hidden lg:block">
          <section className="__links__   poppins flex gap-12">
            <ul className="flex items-center justify-center gap-12">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">How it Works</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>

            <section className="flex gap-4">
              <button
                onClick={() => onClick(true)}
                className="bg-[var(--orange)] cursor-pointer px-6 py-2 rounded-lg font-semibold text-white"
              >
                Try for Free!
              </button>
              <button className="px-4 py-2 rounded-xl cursor-pointer font-semibold text-gray-700">
                Login
              </button>
            </section>
          </section>
        </div>

        <div className="__nav_mobile__  lg:hidden flex items-end justify-end w-full">
          <CiMenuFries
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-[var(--orange)] text-3xl relative z-100"
          />
        </div>
      </div>
    </>
  );
}
