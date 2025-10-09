import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
