"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full flex justify-center items-center p-6 absolute top-0 left-0 right-0 z-50">
      <div className="container flex justify-between items-center">
        <Link href="/" className="logo">
          <Image
            src="/image 1.png"
            alt="logo"
            width={81}
            height={91}
            loading="lazy"
          />
        </Link>
        <nav className=" text-slate-100 hidden lg:flex">
          <ul className="flex gap-16 items-center justify-between">
            <li>
              <Link
                className={`${
                  pathname === "/"
                    ? " text-navColor text-base uppercase font-semibold"
                    : "text-base uppercase font-semibold"
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/menu"
                    ? " text-navColor text-base uppercase font-semibold"
                    : "text-base uppercase font-semibold"
                }`}
                href="/menu"
              >
                menu
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/our-story"
                    ? " text-navColor text-base uppercase font-semibold"
                    : "text-base uppercase font-semibold"
                }`}
                href="/our-story"
              >
                our story
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/Franchising"
                    ? " text-navColor text-base uppercase font-semibold"
                    : "text-base uppercase font-semibold"
                }`}
                href="/franchising"
              >
                Franchising
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/careers"
                    ? " text-navColor text-base uppercase font-semibold"
                    : "text-base uppercase font-semibold"
                }`}
                href="/careers"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/contact"
                    ? " text-navColor text-base uppercase font-semibold"
                    : "text-base uppercase font-semibold"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <FaBars
        onClick={() => setOpen(!open)}
        className="text-slate-50 text-3xl cursor-pointer block lg:hidden"
      />
      <Nav open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
