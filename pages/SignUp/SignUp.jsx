import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl rounded-[30px] bg-[#090d1f] border border-[#131933] shadow-[0_0_80px_rgba(41,98,255,0.12)] overflow-hidden">
        <div className="grid grid-cols-2 min-h-[99vh]">
          
          {/* Left Side */}
          <div className="relative flex flex-col justify-center px-8 sm:px-12 bg-slate-950">
            <div className="absolute top-16 left-10 opacity-20">
              <div className="space-y-3">
                <div className="w-16 h-0.5 bg-blue-500 -rotate-45 rounded-full"></div>
                <div className="w-14 h-0.5 bg-blue-500 -rotate-45 rounded-full ml-3"></div>
                <div className="w-12 h-0.5 bg-blue-500 -rotate-45 rounded-full ml-6"></div>
                <div className="w-10 h-0.5 bg-blue-500 -rotate-45 rounded-full ml-9"></div>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-white/80 text-2xl sm:text-3xl font-medium leading-snug">
                Don’t Miss Your Chance!
              </p>

              <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight">
                <span className="text-[#1388ff]">Signup Now</span>
                <br />
                <span className="text-white">and Get Rewarded!</span>
              </h1>

              <p className="mt-6 text-sm text-white/50">
                Create your account and get started with a clean and modern experience.
              </p>
            </div>
          </div>

          {/* Right Side */}
             <div className="flex items-center justify-center px-6 sm:px-10 py-10">
            <div className="w-full max-w-md rounded-[22px] border border-[#1a2142] bg-[#121727]/90 p-6 sm:p-8 shadow-[0_0_35px_rgba(0,0,0,0.35)]">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl border border-[#222a4a] bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#2d7dff] focus:shadow-[0_0_12px_rgba(45,125,255,0.25)]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-xl border border-[#222a4a] bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#2d7dff] focus:shadow-[0_0_12px_rgba(45,125,255,0.25)]"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-[#222a4a] bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#2d7dff] focus:shadow-[0_0_12px_rgba(45,125,255,0.25)]"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-[#222a4a] bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#2d7dff] focus:shadow-[0_0_12px_rgba(45,125,255,0.25)]"
                />

                <Link to="/"
                  type="submit"
                  className="w-full rounded-xl bg-indigo-800 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(91,93,255,0.35)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(91,93,255,0.45)] cursor-pointer flex justify-center"
                >
                  Sign Up
                </Link>

              </form>
            </div>

          </div>
          </div>
          </div>
          </div>
  );
};

export default SignUp;
