"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X } from 'lucide-react';

const VerifyCodeModal = ({ isOpen, onClose, setIsResetModalOpen }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Verification Code Data:", data);
    setTimeout(() => {
      setLoading(false);
      onClose();
      setIsResetModalOpen(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-4xl rounded-sm shadow-xl flex flex-col md:flex-row relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 z-50 bg-[#1C4587] text-white rounded-full p-1 hover:bg-[#15366b] transition-colors"
            >
              <X size={16} />
            </button>

            {/* Left Section - Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-[#1C4587] text-lg font-semibold mb-6">
                Verify Code
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-xs font-medium mb-1">Verification Code</label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit code"
                    {...register("code", {
                      required: "Code is required",
                      pattern: {
                        value: /^[0-9]{6}$/,
                        message: "Enter a valid 6-digit code",
                      },
                    })}
                    className="w-full px-3 py-1.5 rounded-sm border border-gray-300 focus:outline-none focus:border-[#1C4587] text-xs"
                  />
                  {errors.code && (
                    <p className="text-red-500 text-xs mt-1">{errors.code.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer bg-gradient-to-b from-[#1C4587] to-[#3279EA] hover:from-[#15366b] hover:to-[#2861c4] text-white py-1.5 rounded-sm text-xs font-medium transition-colors disabled:opacity-70"
                >
                  {loading ? "Verifying..." : "Verify Code"}
                </button>
              </form>
            </div>

            {/* Right Section - Message */}
            <div className="w-full md:w-1/2 bg-[#C0D3F2] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h2 className="text-[#1C4587] text-lg font-semibold mb-2">
                Check your email for the code!
              </h2>
              <p className="text-[#1C4587] text-xs">
                Enter the 6-digit verification code <br />
                to continue resetting your password.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VerifyCodeModal;
