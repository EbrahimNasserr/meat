import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ open, setOpen }) {
  const pathname = usePathname();
  return (
    <div
      className={`fixed right-0 bg-slate-200 top-0 w-full h-screen z-[9999] duration-1000 ${
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
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-50 text-heroTextColor rounded-lg"
              : ""
          }`}
        >
          HOME
        </Link>
        <Link
          href="/menu"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/menu"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg text-heroTextColor"
              : ""
          }`}
        >
          MENU
        </Link>
        <Link
          href="/our-story"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/our-story"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg text-heroTextColor"
              : ""
          }`}
        >
          OUR STORY
        </Link>
        <Link
          href="/franchising"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/franchising"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg text-heroTextColor"
              : ""
          }`}
        >
          Franchising
        </Link>
        <Link
          href="/careers"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/careers"
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg text-heroTextColor"
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
              ? "underline underline-offset-[10px] decoration-2 decoration-amber-500 rounded-lg text-heroTextColor"
              : ""
          }`}
        >
          CONTACT
        </Link>
      </nav>
    </div>
  );
}