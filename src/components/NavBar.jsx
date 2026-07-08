"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 flex justify-between p-4
  transition-all duration-500 ease-in-out
  ${
    scrolled
      ? "top-0 w-full  bg-white/10 backdrop-blur-xl border border-white/20 rounded-b-xl shadow-lg"
      : "top-5 w-[92%] max-w-7xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20"
  }`}
    >
      {/* Left */}
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/destinations">Destinations</Link>
        </li>
        <li>
          <Link href="/my-bookings">My Bookings</Link>
        </li>
        <li>
          <Link href="/add-destination">Add Destination</Link>
        </li>
        
      </ul>

      {/* Logo */}
      <Link href="/">
        <Image
          src="/assets/Wanderlast.png"
          width={150}
          height={150}
          alt="logo"
          className="w-auto"
        />
      </Link>

      {/* Right */}
      <ul className="flex gap-6">
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
