import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-background text-sm py-4 border-b shadow-sm">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <Link
          className="flex-none text-2xl font-semibold tracking-tight"
          href="/"
        >
          <span className="mr-2">🛩️</span>
          <span className="text-primary">Flying</span> Book
        </Link>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <Link className="font-medium" href="/">
            <Button variant="secondary">Airplanes</Button>
          </Link>
          <Link className="font-medium" href="/">
            <Button>Contact</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
