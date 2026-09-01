import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import useCart from "../../hooks/useCart";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Our Story", path: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    `relative py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-colors ${
      isActive
        ? "text-grit-tan"
        : "text-grit-cream hover:text-grit-tan"
    }`;

  const closeMenu = () => setMenuOpen(false);

  const { totalQuantity } = useCart();

  return (
    <header className="relative z-50 bg-grit-black text-grit-cream">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={23} />
        </button>

        <Link
          to="/"
          className="font-display text-4xl leading-none tracking-[0.08em]"
          onClick={closeMenu}
        >
          GRIT
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={navLinkStyles}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            className="hidden transition-colors hover:text-grit-tan sm:block"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <Link
            to="/cart"
            className="relative transition-colors hover:text-grit-tan"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={21} />

            <span className="absolute -right-2.5 -top-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-grit-red px-1 text-[9px] font-bold text-white">
              {totalQuantity}
            </span>
          </Link>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-grit-black transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
          <span className="font-display text-4xl tracking-[0.08em]">GRIT</span>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X size={25} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-12">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/15 py-6 font-display text-5xl uppercase transition-colors hover:text-grit-tan"
            >
              <span>{link.label}</span>
              {totalQuantity > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-grit-red px-1 text-[9px] font-bold text-white">
                  {totalQuantity}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <p className="absolute bottom-8 left-6 text-xs tracking-[0.25em] text-grit-stone uppercase">
          Built from pressure
        </p>
      </div>
    </header>
  );
};

export default Navbar;