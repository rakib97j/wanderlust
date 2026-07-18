"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative flex min-h-[80vh] py-28 items-center justify-center overflow-hidden bg-black opacity-70 px-4">
      {/* Animated Background */}
      <div className="animate-error-glow absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:35px_35px]" />

      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <AlertTriangle className="h-8 w-8 animate-pulse text-cyan-400" />
        </div>

        <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400">
          Error 404
        </span>

        <h1 className="mt-4 text-7xl font-black">
          <span className="bg-gradient-to-r from-cyan-400 via-white to-red-400 bg-clip-text text-transparent">
            LOST
          </span>
        </h1>

        <h2 className="mt-2 text-2xl font-bold text-white">
          This Route Doesn't Exist
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          The destination you're looking for has vanished from our travel map.
          Let's navigate you back safely.
        </p>

        <Link href={'/'}>
          <Button className="mt-7 bg-cyan-500 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
            Return Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
