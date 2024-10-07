import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ open, setOpen }) {
  const pathname = usePathname();
  return (
    <div
      className={`fixed right-0 bg-slate-200 dark:bg-[#1F3352] top-0 w-full h-screen z-[9999] duration-1000 ${
        open ? " visible translate-y-0" : "invisible -translate-y-full"
      }`}
    >
      <button
        className=" text-4xl absolute right-0 pr-10 pt-10"
        onClick={() => {
          setOpen(!open);
        }}
      >
        x
      </button>
      <nav className=" flex flex-col text-xl font-bold items-center py-52 justify-around h-full">
        <Link
          href="/"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 text-amber-500 rounded-lg"
              : ""
          }`}
        >
          HOME
        </Link>
        <Link
          href="/about"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/menu"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg  text-amber-500"
              : ""
          }`}
        >
          MENU
        </Link>
        <Link
          href="/quran"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/our-story"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg  text-amber-500"
              : ""
          }`}
        >
          OUR STORY
        </Link>
        <Link
          href="/Franchising"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/Franchising"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg  text-amber-500"
              : ""
          }`}
        >
          Franchising
        </Link>
        <Link
          href="/Careers"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/Careers"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg  text-amber-500"
              : ""
          }`}
        >
          CAREERS
        </Link>
        <Link
          href="/contact"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/contact"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg  text-amber-500"
              : ""
          }`}
        >
          CONTACT
        </Link>
      </nav>
    </div>
  );
}