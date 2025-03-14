"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import LoginModal from "../authentication/login/LoginModal"
import SignUpModal from "../authentication/signUp/SignUpModal"
import ForgotPasswordModal from "../authentication/forgotPassword/ForgotPassModal"
import VerifyCodeModal from "../authentication/verify/VerifyCodeModal"
import SuccessModal from "../authentication/success/SuccessModal"
import ResetPasswordModal from "../authentication/resetPass/ResetPasswordModal"
import { useDispatch, useSelector } from "react-redux";
import { setIsSignUpOpen } from "@/store/mainSlice"
import avatar from '../../../public/heroImage.png'
// import Hero from "./Hero"

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  // const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotPassModalOpen, setIsForgotPassModalOpen] = useState(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);


  const dispatch = useDispatch();
  const isSignUpOpen = useSelector((state) => state.main.isSignUpOpen);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const user = useSelector((state) => state.main.user);



  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Donate Us", href: "/donateUs" },
    { title: "People", href: "/people" },
    { title: "Bonds", href: "/bonds" },
    { title: "Object", href: "/object" },
    { title: "Institution", href: "/institution" },
    { title: "Message", href: "/message" },
    { title: "We are chatting", href: "/chatting" },
  ]

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  return (
    <div>
      <nav className="bg-[#1C4587] z-50 py-4 px-6 lg:px-56 flex justify-between items-center relative">

        {/* Mobile nav */}
        <div className=" flex items-center justify-between w-full lg:w-auto">

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer bg-[#4080c1] rounded-full p-1 text-white flex justify-end text-xl"
          >
            <span onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</span>
          </div>

          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
            className="flex flex-col justify-center"
          >
            <Link href="/">
              <div className="lg:h-[35px] border-[#FFFFFF] font-bold text-lg flex justify-center items-center gap-2 border-2 rounded-[100%] p-2">
                <div className="w-[11px] h-[11px] rounded-full bg-[#22B14C]"></div>
                <div className="w-10 h-[10px] rounded-full bg-[#FFF200]"></div>
                <div className="w-[11px] h-[11px] rounded-full bg-[#ED1C24]"></div>
              </div>
            </Link>
          </motion.div>



          {/* Mobile avater */}
          <div className="lg:hidden">
            {
              user ? (
                <div className="relative">
                  <div
                    className="lg:flex items-center space-x-3 cursor-pointer"
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  >
                    <img
                      src={avatar.src || "/default-avatar.png"}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="text-sm font-semibold">{user.name}</p>
                  </div>

                  {/* Dropdown Menu */}
                  {isMobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 shadow-md rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => {
                          // dispatch(logout());
                          setIsDropdownOpen(false);
                        }}
                        className="block cursor-pointer text-left px-4 py-2 text-sm text-white bg-blue-500"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div></div>
              )
            }
          </div>
        </div>


        {/* Mobile Menu Items */}
        
          <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={mobileMenuVariants}
                  className="absolute top-16 left-0 bg-[#1C4587] w-full md:hidden"
                >
                    {navLinks.map((link, index) => (
                      <motion.div key={index} variants={menuItemVariants}>
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`block text-white px-6 py-2 w-56 transition ${pathname === link.href ? "font-semibold" : "font-[300]"
                            }`}
                        >
                          <span className="bg-[#4080c1] px-5 rounded-full">{link.title}</span>
                        </Link>
                      </motion.div>
                    ))}


                  {
                    !user &&
                    <motion.div onClick={() => setMenuOpen(false)} variants={menuItemVariants} className="ml-6 mt-3 mb-5 space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}

                        onClick={() => setIsLoginModalOpen(true)}
                        className="text-white text-[14px] font-semibold border border-white px-6 py-[6px] rounded-md transition cursor-pointer"
                      >
                        Login
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => dispatch(setIsSignUpOpen(true))}
                        className="text-[14px] font-semibold bg-gradient-to-t from-[#1C4587] to-[#3279EA] border text-white px-6 py-[6px] rounded-md cursor-pointer"
                      >
                        Sign Up
                      </motion.button>
                    </motion.div>
                  }

                </motion.div>
              )}
          </AnimatePresence>

        {/* Desktop Menu Items */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          className="hidden md:flex lg:justify-center"
        >
          {navLinks.map((link, index) => (
            <motion.div key={index} variants={menuItemVariants}>
              <Link
                href={link.href}
                className={`inline-block  text-white lg:px-3 py-2 transition ${pathname === link.href ? "font-semibold" : "font-[300]"
                  }`}
              >
                <span className="text-sm">{link.title}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Buttons */}
        {/*If User, Avatar & Dropdown, if no, Login & Sign Up */}
        {user ? (
          <div className="relative">
            <div
              className="hidden lg:flex items-center space-x-3 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={avatar.src || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm font-semibold">{user.name}</p>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-40 shadow-md rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => {
                    // dispatch(logout());
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-white bg-blue-500"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.div
            className="hidden lg:flex space-x-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-[14px] font-semibold border border-white px-6 py-[6px] rounded-md transition cursor-pointer"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[14px] font-semibold bg-gradient-to-t from-[#1C4587] to-[#3279EA] border text-white px-6 py-[6px] rounded-md cursor-pointer"
            >
              Sign Up
            </motion.button>
          </motion.div>
        )}

        {/* --------------------------- */}
        {/* Login Modal */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          setIsSignUpOpen={() => dispatch(setIsSignUpOpen(true))}
          setIsForgotPassModalOpen={setIsForgotPassModalOpen}
        />
        {/* SignUp Modal */}
        <SignUpModal
          isOpen={isSignUpOpen}
          onClose={() => dispatch(setIsSignUpOpen(false))}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
        {/* Forgot Pass Modal */}
        <ForgotPasswordModal
          isOpen={isForgotPassModalOpen}
          onClose={() => setIsForgotPassModalOpen(false)}
          setIsVerifyModalOpen={setIsVerifyModalOpen}
        />
        {/* Verify Modal */}
        <VerifyCodeModal
          isOpen={isVerifyModalOpen}
          onClose={() => setIsVerifyModalOpen(false)}
          setIsResetModalOpen={setIsResetModalOpen}
        />
        {/* Reset Modal */}
        <ResetPasswordModal
          isOpen={isResetModalOpen}
          onClose={() => setIsResetModalOpen(false)}
          setIsSuccessModalOpen={setIsSuccessModalOpen}
        />
        {/* Success Modal */}
        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      </nav>

      {/* <Hero setIsSignUpOpen={setIsSignUpOpen}/> */}
    </div>
  )
}

export default Navbar

