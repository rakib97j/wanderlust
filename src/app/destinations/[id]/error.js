"use client";

import { Button } from "@heroui/react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <section className="relative flex py-28 min-h-[80vh] items-center justify-center overflow-hidden bg-black px-4">
      {/* Animated Background */}
      <div className="absolute h-[450px] w-[450px] animate-pulse rounded-full bg-red-500/15 blur-[120px]" />
      <div className="absolute h-[350px] w-[350px] animate-pulse rounded-full bg-cyan-500/15 blur-[100px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:35px_35px]" />

      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-red-500/20 bg-white/5 p-8 text-center backdrop-blur-xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
          <AlertTriangle className="h-8 w-8 animate-pulse text-red-400" />
        </div>

        <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400">
          System Error
        </span>

        <h1 className="mt-5 bg-gradient-to-r from-red-400 via-white to-cyan-400 bg-clip-text text-5xl font-black text-transparent">
          Something Went Wrong
        </h1>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          An unexpected error interrupted your journey. Please try again.
        </p>

        {error?.message && (
          <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-300">
            {error.message}
          </p>
        )}

        <Link href={"/destinations"}>
          <Button
            onPress={reset}
            startContent={<RotateCcw size={18} />}
            className="mt-8 bg-cyan-500 font-semibold text-black hover:bg-cyan-400"
          >
            Try Again
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
