"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const GlassForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify reCAPTCHA");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://test.esimwhitelabel.com/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          "g-recaptcha-response": captchaValue,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent!");
        setStep("otp");
      } else {
        alert(data?.message || "Failed to send OTP");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://test.esimwhitelabel.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "insomnia/9.2.0",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          name: form.name,
          otp: otp,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account verified!");
        setStep("form");
        setForm({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setOtp("");
        setCaptchaValue(null);
      } else {
        alert(data?.message || "Invalid OTP");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10">
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FloginBg.a05beed4.png&w=1920&q=100"
          className="w-full h-full object-cover"
          alt="bg"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* HEADER */}
      <Header />

      {/* CONTENT AREA (IMPORTANT FIX) */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 md:py-20 relative z-10">
        <form
          onSubmit={step === "form" ? handleSubmit : (e) => e.preventDefault()}
          className="w-full max-w-lg p-5 sm:p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
        >
          {/* TABS */}
          <div className="flex mb-6 bg-white/30 rounded-2xl p-1">
            <Link href="/login" className="w-1/2">
              <button
                type="button"
                className="w-full py-2 rounded-xl font-semibold"
              >
                Login
              </button>
            </Link>

            <Link href="/register" className="w-1/2">
              <button
                type="button"
                className="w-full py-2 rounded-xl font-semibold bg-white"
              >
                Register
              </button>
            </Link>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center mb-6 text-black">
            {step === "form" ? "Sign up now" : "Verify OTP"}
          </h1>

          {/* FORM */}
          {step === "form" && (
            <>
              <div className="space-y-4">
                <input
                  className="w-full p-3 rounded-xl bg-white border"
                  placeholder="Enter your name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                  className="w-full p-3 rounded-xl bg-white border"
                  placeholder="Enter your email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                  type="password"
                  className="w-full p-3 rounded-xl bg-white border"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />

                <input
                  type="password"
                  className="w-full p-3 rounded-xl bg-white border"
                  placeholder="Confirm password"
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
                  }
                />
              </div>

              <div className="mt-6 flex justify-center">
                <div
                  style={{
                    transform: "scale(0.95)",
                    transformOrigin: "center",
                  }}
                >
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={(v) => setCaptchaValue(v)}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full py-3 rounded-xl bg-yellow-400 font-bold"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </>
          )}

          {/* OTP STEP */}
          {step === "otp" && (
            <>
              <input
                className="w-full p-3 rounded-xl bg-white border"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
              />

              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={loading}
                className="mt-6 w-full py-3 rounded-xl bg-green-500 text-white font-bold"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}
        </form>
      </div>

      <div className="relative z-20 bg-transparent">
        <Footer />
      </div>
    </div>
  );
};

export default GlassForm;
