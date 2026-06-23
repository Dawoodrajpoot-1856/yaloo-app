"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://test.esimwhitelabel.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      console.log("LOGIN RESPONSE:", data);

      if (data.status) {
        // Save token if returned
        if (data?.token) {
          localStorage.setItem("token", data.token);
        }

        if (data?.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        alert("Login Successful");

        window.location.href = "/";
      } else {
        alert(data?.message || "Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-1">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FloginBg.a05beed4.png&w=1920&q=100"
            className="w-full h-full object-cover brightness-90"
            alt="bg"
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-10 sm:py-16 lg:py-20">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
            {/* TOP BUTTONS */}
            <div className="flex mb-6 bg-white/30 rounded-2xl p-1">
              <Link href="/login" className="w-1/2">
                <button className="w-full py-2 rounded-xl font-semibold text-black bg-white transition">
                  Login
                </button>
              </Link>

              <Link href="/register" className="w-1/2">
                <button className="w-full py-2 rounded-xl font-semibold text-black">
                  Register
                </button>
              </Link>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl font-bold text-black text-center mb-6">
              Sign in
            </h1>

            {/* EMAIL */}
            <label className="text-sm font-medium text-black">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 mt-1 p-3 rounded-xl bg-white text-black outline-none"
            />

            {/* PASSWORD */}
            <label className="text-sm font-medium text-black">Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 mt-1 p-3 rounded-xl bg-white text-black outline-none"
            />

            {/* SUBMIT */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="group w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-black hover:text-white transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Submit"}
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
