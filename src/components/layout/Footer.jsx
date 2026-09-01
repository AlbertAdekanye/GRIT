import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const shopLinks = [
  { label: "New arrivals", path: "/shop" },
  { label: "T-Shirts", path: "/shop?category=t-shirts" },
  { label: "Hoodies", path: "/shop?category=hoodies" },
  { label: "Outerwear", path: "/shop?category=outerwear" },
  { label: "Bottoms", path: "/shop?category=bottoms" },
];

const companyLinks = [
  { label: "Our story", path: "/about" },
  { label: "Lookbook", path: "/lookbook" },
  { label: "Contact", path: "/contact" },
  { label: "Shipping", path: "/shipping" },
  { label: "Returns", path: "/returns" },
];

const socialLinks = [
  { label: "Instagram", url: "#" },
  { label: "TikTok", url: "#" },
  { label: "X / Twitter", url: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-grit-black px-5 pt-20 text-grit-cream sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 border-b border-white/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <Link
              to="/"
              className="font-display text-7xl leading-none tracking-[0.05em] sm:text-8xl"
            >
              GRIT
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Clothing for those shaped by pressure and driven by purpose.
              Designed in Nigeria.
            </p>

            <p className="mt-8 text-xs font-semibold tracking-[0.25em] text-grit-tan uppercase">
              Built from pressure
            </p>
          </div>

          <div>
            <h3 className="font-body text-xs font-bold tracking-[0.2em] text-grit-tan uppercase">
              Shop
            </h3>

            <ul className="mt-6 space-y-4">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-bold tracking-[0.2em] text-grit-tan uppercase">
              Information
            </h3>

            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-bold tracking-[0.2em] text-grit-tan uppercase">
              Follow
            </h3>

            <ul className="mt-6 space-y-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-[10px] tracking-[0.15em] text-white/40 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} GRIT. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>

            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="pointer-events-none -mb-[0.13em] select-none text-center font-display text-[clamp(9rem,30vw,28rem)] leading-[0.75] tracking-[-0.03em] text-white/[0.035]"
        >
          GRIT
        </p>
      </div>
    </footer>
  );
};

export default Footer;