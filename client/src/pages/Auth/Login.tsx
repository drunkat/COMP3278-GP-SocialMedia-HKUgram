import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import media from "../../assets/media.png";

const Login: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    if (!emailOrUsername || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Implement login logic here
    alert("Login functionality is not implemented yet.");
  };

  return (
    <div className="h-screen w-full flex flex-row bg-dark-900 text-white font-sans overflow-hidden">
      {/* Left Side*/}
      <div className="relative hidden lg:flex flex-1 flex-col items-center justify-center p-12 xl:p-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-500/12 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
          <div className="absolute bottom-[-20%] right-[-5%] w-80 h-80 bg-accent-blue/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-md text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-6 flex items-center justify-center flex-row"
          >
            <img
              src="/hkgram_favicon_single.png"
              alt="HKGram Logo"
              className="w-14 h-14"
              draggable={false}
            />
            <span className="text-2xl font-bold tracking-tight text-white">
              HKGram
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="text-3xl xl:text-4xl font-bold leading-tight mb-3 text-white"
          >
            Your conversations,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-400 to-accent-blue">
              all in one place.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-gray-400 mb-8 text-sm leading-relaxed"
          >
            Share your world, connect with your friends, and discover new
            communities.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="flex justify-center"
          >
            <img
              src={media}
              alt="Social media app image"
              className="max-w-full max-h-[40vh] object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-120 xl:w-135 flex flex-col items-center justify-center p-6 sm:p-8 lg:p-16 relative z-10 bg-dark-800">
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="w-full max-w-sm"
        >
          <div className="flex items-center justify-center mb-8 lg:hidden">
            <img
              src="/hkgram_favicon_single.png"
              alt="HKGram Logo"
              className="w-14 h-14"
              draggable={false}
            />
            <span className="text-xl font-bold tracking-tight text-white">
              HKGram
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key="login"
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
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Welcome back
                </h2>
                <p className="text-gray-400 text-sm">
                  Sign in to your account to continue
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300 ml-1">
                    Email or Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      placeholder="you@example.com or username"
                      value={emailOrUsername}
                      onChange={(e) => setEmailOrUsername(e.target.value)}
                      className="w-full bg-dark-900 border border-dark-600 text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-sm font-medium text-gray-300">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-xs text-brand-400 hover:text-brand-300 transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-dark-900 border border-dark-600 text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <button
                  className={`w-full bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-xl py-3 mt-6 transition-all shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:shadow-[0_0_25px_rgba(217,70,239,0.4)] flex items-center justify-center gap-2 group ${!emailOrUsername || !password ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer"}`}
                  disabled={!emailOrUsername || !password}
                  onClick={handleSubmit}
                >
                  Sign In
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <button className="text-brand-400 hover:text-brand-300 font-medium transition-colors hover:cursor-pointer">
                  Create one
                </button>
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
