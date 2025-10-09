import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          {/* Put your logo at /public/logo.svg or /public/logo.png */}
          <img src="/logo.svg" alt="Brennen Adams Photography" className="brand-logo" />
          <span className="brand-text">Brennen Adams Photography</span>
        </Link>

        <nav className="main-nav">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
