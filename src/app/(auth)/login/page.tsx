"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center xl:justify-start overflow-hidden h-screen p-4 md:p-6 bg-white">
      <div className="w-full sm:w-lg xl:w-[40vw] flex items-center justify-center">
        <form className="space-y-6 w-full xl:px-8">
          <div className="text-center flex items-center justify-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="Courses Logo"
              width={25}
              height={25}
            />
            <p className="font-semibold text-xl">Courses</p>
          </div>

          <p className="text-center text-gray-800 text-sm font-medium">
            Let's sign in to your account
          </p>

          <div className="flex flex-col items-center gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 rounded-lg py-2 w-full cursor-pointer">
              <FcGoogle className="h-5 w-5" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 rounded-lg py-2 w-full cursor-pointer">
              <FaFacebook className="h-5 w-5 text-blue-600" /> Facebook
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-200"></div>
            <p className="text-sm text-gray-400">Or sign in with email</p>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="flex items-center bg-transparent border border-gray-300 rounded-lg px-3">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-2 py-2 outline-none"
            />
          </div>

          <div className="flex items-center bg-transparent border border-gray-300 rounded-lg px-3">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="flex-1 px-2 py-2 outline-none"
            />
          </div>

          <button className="w-full bg-indigo-500 text-sm text-white py-2 rounded-xl hover:bg-indigo-400 transition cursor-pointer">
            Sign In
          </button>

          <div className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-indigo-500 hover:underline cursor-pointer">
              Sign up
            </a>
          </div>
        </form>
      </div>

      <div className="flex-1 hidden xl:inline-flex items-center justify-center h-full">
        {/* <Image
          src="/assets/login-img.png"
          alt="Login illustration"
          fill
          // sizes="(max-width: 768px) 100vw, 50vw"
          // style={{width: '100%', height: 'auto'}}
          className="object-contain w-full h-full rounded-2xl m-8"
        /> */}
        <img
          src="/assets/login-img.png"
          alt=""
          className="w-full h-full object-fill object-center rounded-2xl"
        />
      </div>
    </div>
  );
};

export default LoginPage;
