"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Lock,
  Mail,
  Building,
  ShieldCheck,
  ArrowRight,
  Factory,
  CheckCircle,
} from "lucide-react";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [role, setRole] = useState<"buyer" | "foundry">("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="font-heading text-3xl font-extrabold uppercase tracking-tight text-brand">
              Foundry Exchange
            </span>
          </Link>
          <p className="mt-2 text-xs text-slate-500 font-bold uppercase tracking-wider">
            Industrial Procurement &amp; Melting Portal
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {/* Mode Switcher */}
          <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-lg mb-6 text-center">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setSubmitted(false);
              }}
              className={`py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                mode === "login"
                  ? "bg-white text-navy shadow-2xs"
                  : "text-slate-600 hover:text-navy"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("register");
                setSubmitted(false);
              }}
              className={`py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                mode === "register"
                  ? "bg-white text-navy shadow-2xs"
                  : "text-slate-600 hover:text-navy"
              }`}
            >
              Create Account
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle className="h-12 w-12 text-brand mx-auto mb-3" />
              <h3 className="font-heading text-xl font-bold uppercase text-navy">
                Authentication Authenticated
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Welcome to Foundry Exchange. Your industrial credentials for{" "}
                <strong className="text-navy">{email || "corporate account"}</strong>{" "}
                have been logged.
              </p>
              <Link
                href="/marketplace"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors cursor-pointer"
              >
                <span>Proceed to Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selector */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole("buyer")}
                    className={`p-2.5 rounded-lg border text-xs font-bold uppercase text-left transition-all cursor-pointer ${
                      role === "buyer"
                        ? "border-brand bg-red-50 text-brand"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span className="block font-heading text-sm">OEM / Buyer</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      Sourcing castings
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("foundry")}
                    className={`p-2.5 rounded-lg border text-xs font-bold uppercase text-left transition-all cursor-pointer ${
                      role === "foundry"
                        ? "border-navy bg-slate-100 text-navy"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span className="block font-heading text-sm">Foundry Shop</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      Melting &amp; listing
                    </span>
                  </button>
                </div>
              </div>

              {mode === "register" && (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Midwest Precision Castings"
                      className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Corporate Work Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Password
                  </label>
                  {mode === "login" && (
                    <Link
                      href="/contact"
                      className="text-[10px] font-bold text-brand hover:underline cursor-pointer"
                    >
                      Forgot?
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:border-brand focus:outline-hidden"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-brand py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-hover transition-colors shadow-xs cursor-pointer"
              >
                {mode === "login"
                  ? "Access Industrial Portal"
                  : "Register Facility / Account"}
              </button>
            </form>
          )}

          {/* Security footnote */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="h-4 w-4 text-brand" />
            <span>Encrypted 256-Bit SSL • ISO 9001 Audited Network</span>
          </div>
        </div>
      </div>
    </div>
  );
}
