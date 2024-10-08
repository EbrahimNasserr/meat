import Image from "next/image";
import { FaSnapchat } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-heroTextColor py-24 flex justify-center items-center">
      <div className="container">
        <div className="w-[80%] mx-auto flex flex-col justify-between items-center">
          <div className="w-full text-center sm:text-left bg-franchising-box-gradient shadow-custom-shadow rounded-xl flex flex-col justify-between items-center gap-16 p-6 xl:flex-row">
            <div className="flex flex-col items-start">
              <h2 className=" text-5xl pl-3 font-bold text-stroke uppercase italic font-sans text-white">get in touch</h2>
              <p className=" text-slate-50 p-3 leading-5">
                To learn more about us or share your thoughts, please enter your
                email on the right, and our team will get back to you.
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg flex flex-col justify-between w-full items-center md:flex-row">
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR E-MAIL"
                className="outline-none rounded-lg w-full p-2 mb-5 md:mb-0"
              />
              <button type="submit" className=" py-3 px-8 bg-heroTextColor rounded-md font-bold uppercase text-slate-50">
                {" "}
                subscription
              </button>
            </div>
          </div>
          <div className="flex flex-col text-center gap-12 items-center justify-center w-full mx-auto mt-24 md:flex-row md:justify-between">
            <div className=" text-slate-50">
              <div className="flex justify-center items-center md:justify-start mb-3">
                <Image
                  src="/image 1.png"
                  width={100}
                  height={100}
                  alt="logo"
                  loading="lazy"
                />
              </div>
              <h3 className="text-3xl font-semibold capitalize my-3">
                connect with us
              </h3>
              <div className="flex justify-center gap-10 text-3xl">
                <a
                  href="http://www.snapchat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSnapchat />
                </a>
                <a
                  href="http://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="http://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiInstagram />
                </a>
              </div>
            </div>
            <div className="text-slate-50 flex flex-col md:text-left">
              <h3 className="text-3xl font-semibold uppercase mb-3">
                platform
              </h3>
              <ul className="uppercase">
                <li className="font-semibold mb-1">
                  <Link href="/">home</Link>
                </li>
                <li className="font-semibold mb-1">
                  <Link href="/menu">menu</Link>
                </li>
                <li className="font-semibold mb-1">
                  <Link href="/our-story">our story</Link>
                </li>
              </ul>
            </div>
            <div className="text-slate-50 md:text-left">
              <h3 className="text-3xl font-semibold uppercase mb-3">about</h3>
              <ul className="uppercase">
                <li className="font-semibold mb-1">
                  <Link href="/Franchising">Franchising</Link>
                </li>
                <li className="font-semibold mb-1">
                  <Link href="/careers">careers</Link>
                </li>
                <li className="font-semibold mb-1">
                  <Link href="/contact">contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
