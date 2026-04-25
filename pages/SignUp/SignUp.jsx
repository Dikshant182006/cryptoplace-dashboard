import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-[85vh] bg-black px-4 py-16 mt-10 sm:mt-0">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] shadow-[0_0_60px_rgba(255,140,0,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative flex flex-col justify-center bg-[#0d0d0d] px-8 py-10 sm:px-12 lg:px-16">
            <div className="absolute left-10 top-12 opacity-20">
              <div className="space-y-3">
                <div className="h-0.5 w-16 -rotate-45 rounded-full bg-orange-500"></div>
                <div className="ml-3 h-0.5 w-14 -rotate-45 rounded-full bg-orange-500"></div>
                <div className="ml-6 h-0.5 w-12 -rotate-45 rounded-full bg-orange-500"></div>
                <div className="ml-9 h-0.5 w-10 -rotate-45 rounded-full bg-orange-500"></div>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[110px]"></div>

            <div className="relative z-10 max-w-lg">
              <p className="text-lg font-medium text-white/70 sm:text-xl">
                Join CryptoPlace Today
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Create
                </span>
                <br />
                <span className="text-white">Your Account</span>
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-white/50">
                Start exploring real-time crypto prices, market trends, and
                detailed insights through a clean and modern dashboard.
              </p>

              <div className="mt-8 flex gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                  <p className="text-xl font-bold text-orange-400">Live</p>
                  <p className="mt-1 text-xs text-white/50">Market Data</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                  <p className="text-xl font-bold text-orange-400">Fast</p>
                  <p className="mt-1 text-xs text-white/50">Coin Search</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                  <p className="text-xl font-bold text-orange-400">Smart</p>
                  <p className="mt-1 text-xs text-white/50">AI Access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center bg-[#111111] px-6 py-10 sm:px-10">
            <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-[#151515] p-5 shadow-[0_0_30px_rgba(0,0,0,0.35)] sm:p-6">
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-white">Sign Up</h2>
                <p className="mt-2 text-sm text-white/50">
                  Create your account and get started.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-orange-500/60 focus:shadow-[0_0_12px_rgba(255,140,0,0.18)]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-orange-500/60 focus:shadow-[0_0_12px_rgba(255,140,0,0.18)]"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-orange-500/60 focus:shadow-[0_0_12px_rgba(255,140,0,0.18)]"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-orange-500/60 focus:shadow-[0_0_12px_rgba(255,140,0,0.18)]"
                />

                <Link
                  to="/"
                  className="flex w-full justify-center rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,115,0,0.28)] transition duration-300 hover:scale-[1.02] hover:bg-orange-500 hover:shadow-[0_0_25px_rgba(255,115,0,0.36)]"
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