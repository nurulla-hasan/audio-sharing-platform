"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { FiLogOut, FiMenu, FiSearch, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import LoginModal from "../authentication/login/LoginModal"
import SignUpModal from "../authentication/signUp/SignUpModal"
import ForgotPasswordModal from "../authentication/forgotPassword/ForgotPassModal"
import VerifyCodeModal from "../authentication/verify/VerifyCodeModal"
import SuccessModal from "../authentication/success/SuccessModal"
import ResetPasswordModal from "../authentication/resetPass/ResetPasswordModal"
import { useDispatch, useSelector } from "react-redux"
import { logout, setIsSignUpOpen } from "@/store/mainSlice"
import { CgProfile } from "react-icons/cg"
import { FaRegHeart } from "react-icons/fa6"
import { TbLogin } from "react-icons/tb";

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isForgotPassModalOpen, setIsForgotPassModalOpen] = useState(false)
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false)
  const [isResetModalOpen, setIsResetPasswordModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const dispatch = useDispatch()
  const isSignUpOpen = useSelector((state) => state.main.isSignUpOpen)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const user = useSelector((state) => state.main.user)

  const handleLogout = () => {
    dispatch(logout())
    setIsMobileDropdownOpen(false)
  }

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Donate Us", href: "/donate-us" },
    // { title: "People", href: "/people" },
    { title: "Bonds", href: "/bonds" },
    { title: "Objects", href: "/objects" },
    { title: "Institutions", href: "/institutions" },
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

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
  }

  return (
    <div className="bg-[#1C4587] sticky top-0 z-50">
      <nav className="z-50 py-6 px-5 md:px-8 lg:px-30 mx-auto flex justify-between items-center relative">
        {/* Mobile nav */}
        <div className=" flex items-center justify-between w-full xl:w-auto">
          {/* Mobile Menu Button */}
          <div className="xl:hidden cursor-pointer bg-[#4080c1] rounded-full p-1 text-white flex justify-end text-xl">
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
              <div className="md:h-7 lg:h-8 border-[#FFFFFF] font-bold text-lg flex justify-center items-center gap-2 border-2 rounded-[100%] p-2">
                <div className="lg:w-2 w-2 lg:h-2 h-2 rounded-full bg-[#22B14C]"></div>
                <div className="lg:w-12 w-8  h-2 rounded-full bg-[#FFF200]"></div>
                <div className="lg:w-2 w-2 lg:h-2 h-2 rounded-full bg-[#ED1C24]"></div>
              </div>
            </Link>
          </motion.div>

          {/* Mobile avater */}
          <div>
            {
              user ? (
                <div className="lg:hidden flex items-center">
                  {user ? (
                    <div className="relative">
                      <div
                        className="xl:flex items-center space-x-3 cursor-pointer"
                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                      >
                        <img src={"/avatar.png"} alt="User Avatar" className="w-8 h-8 rounded-full" />
                        {/* <p className="text-sm font-semibold">{user.name}</p> */}
                      </div>

                      {/* Dropdown Menu */}
                      {isMobileDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          onClick={() => setIsMobileDropdownOpen(false)}
                          className="absolute right-0 mt-2 w-44 z-50 bg-white shadow-lg rounded-lg *:rounded-lg border border-gray-300"
                        >
                          <Link href="/profile">
                            <button className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100  hover:rounded-lg">
                              <CgProfile size={20} color="#1C4587" className="text-blue-600" /> Profile
                            </button>
                          </Link>
                          <Link href="/chatting/favorite">
                            <button className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                              <FaRegHeart size={20} color="#1C4587" className="text-gray-700" /> Favorite
                            </button>
                          </Link>
                          <Link href="/chatting/allPlaylist/myPlaylist">
                            <button className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                              <img src="/playlist.svg" alt="" /> Playlist
                            </button>
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-red-600 hover:bg-gray-100"
                          >
                            <FiLogOut size={20} className="text-black" /> Log out
                          </button>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) :
                (
                  <div onClick={() => setIsLoginModalOpen(true)} className="bg-[#4080c1] rounded-full p-1 xl:hidden">
                    <TbLogin color="#fff" size={20} />
                  </div>
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
              className="absolute lg:top-20 top-19 left-0 bg-[#1C4587] w-full xl:hidden"
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

              {!user && (
                <motion.div
                  onClick={() => setMenuOpen(false)}
                  variants={menuItemVariants}
                  className="ml-6 mt-3 mb-5 space-x-4"
                >
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
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu Items */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          className="hidden xl:flex justify-center items-center gap-5"
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
          <div className="md:flex justify-center hidden">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 py-2 rounded-full border text-gray-100 border-gray-300 text-[10px] md:text-xs shadow-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-300"
              />
            </div>
          </div>
        </motion.div>



        {/* Desktop Buttons */}
        {user ? (
          <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="relative">
            <div className="hidden lg:flex items-center gap-2 cursor-pointer">
              <img src={"/avatar.png"} alt="User Avatar" className="w-10 h-10 rounded-full" />
              <img src="/down.svg" alt="" />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg *:rounded-lg border border-gray-300"
              >
                <Link href="/profile">
                  <button className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:rounded-lg">
                    <CgProfile size={20} color="#1C4587" className="text-blue-600" /> Profile
                  </button>
                </Link>
                <Link href="/chatting/favorite">
                  <button className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                    <FaRegHeart size={20} color="#1C4587" className="text-gray-700" /> Favorite
                  </button>
                </Link>
                <Link href="/chatting/all-playlist/my-playlist">
                  <button className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                    <img src="/playlist.svg" alt="" /> Playlist
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-4 py-3 text-sm font-semibold text-red-600 hover:bg-gray-100"
                >
                  <FiLogOut size={20} className="text-black" /> Log out
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.div
            className="hidden xl:flex gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoginModalOpen(true)}
              className="text-white text-sm font-medium border border-white px-6 py-[6px] rounded-full transition cursor-pointer"
            >
              Login
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(setIsSignUpOpen(true))}
              className="text-sm font-medium bg-button border text-white px-6 py-[6px] rounded-full cursor-pointer"
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
          setIsResetModalOpen={setIsResetPasswordModalOpen}
        />
        {/* Reset Modal */}
        <ResetPasswordModal
          isOpen={isResetModalOpen}
          onClose={() => setIsResetPasswordModalOpen(false)}
          setIsSuccessModalOpen={setIsSuccessModalOpen}
        />
        {/* Success Modal */}
        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      </nav>
    </div>
  )
}

export default Navbar

