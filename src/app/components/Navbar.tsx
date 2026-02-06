import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const handleNav = (target: string) => {
    setMobileOpen(false);

    if (target === "work") {
      if (isHome) {
        const el = document.getElementById("work");
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById("work");
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (target === "contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    } else if (target === "about") {
      navigate("/about");
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? theme.navBgScroll : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${theme.navBorder}` : "1px solid transparent",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-14">
          <Link
            to="/"
            className="tracking-[-0.01em] transition-colors duration-300"
            style={{
              fontFamily: "Averia Serif Libre, serif",
              fontSize: "1.125rem",
              fontWeight: 400,
              color: theme.text,
            }}
          >
            Shon Hazan
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNav("work")}
              className="transition-colors duration-300 cursor-pointer bg-transparent border-none"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                letterSpacing: "0.02em",
                color: theme.textMuted,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted)}
            >
              Work
            </button>
            <Link
              to="/about"
              className="transition-colors duration-300"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                letterSpacing: "0.02em",
                color: theme.textMuted,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted)}
            >
              About
            </Link>
            <button
              onClick={() => handleNav("contact")}
              className="transition-colors duration-300 cursor-pointer bg-transparent border-none"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                letterSpacing: "0.02em",
                color: theme.textMuted,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted)}
            >
              Contact
            </button>
          </div>
          <button
            className="md:hidden p-1 bg-transparent border-none"
            style={{ color: theme.text }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden"
            style={{ backgroundColor: theme.bg }}
          >
            <button
              onClick={() => handleNav("work")}
              className="bg-transparent border-none cursor-pointer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.125rem",
                letterSpacing: "0.02em",
                color: theme.text,
              }}
            >
              Work
            </button>
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.125rem",
                letterSpacing: "0.02em",
                color: theme.text,
              }}
            >
              About
            </Link>
            <button
              onClick={() => handleNav("contact")}
              className="bg-transparent border-none cursor-pointer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.125rem",
                letterSpacing: "0.02em",
                color: theme.text,
              }}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
