import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

type FormDataType = {
  username: string;
  email: string;
  password: string;
};

const CreateAccount: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (!formData.username || !formData.email || !formData.password) return;

    //Handle form submission logic here
    alert("Account creation logic not implemented yet");
  };

  return (
    <div className="w-full lg:w-120 xl:w-135 flex flex-col items-center justify-center p-6 sm:p-8 lg:p-16 relative z-10 bg-dark-800">
      <motion.div
        key="signup"
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: -20,
        }}
        transition={{
          duration: 0.3,
        }}
        className="w-full max-w-sm"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Create an account
          </h2>
          <p className="text-gray-400 text-sm">
            Join HKGram and start connecting today
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="John_Doe"
                className="w-full bg-dark-900 border border-dark-600 text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-gray-600"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-dark-900 border border-dark-600 text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-gray-600"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full bg-dark-900 border border-dark-600 text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-gray-600"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>

          <button
            className={`w-full bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl py-3 mt-6 transition-all shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:shadow-[0_0_25px_rgba(217,70,239,0.4)] flex items-center justify-center gap-2 group ${!formData.username || !formData.email || !formData.password ? "opacity-50 hover:cursor-not-allowed" : "hover:cursor-pointer"}`}
            disabled={
              !formData.username || !formData.email || !formData.password
            }
            type="submit"
          >
            Create Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-brand-400 hover:text-brand-300 font-medium transition-colors"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default CreateAccount;
