import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Market Monitor", "Buffer Strategy", "Policy Engine", "Analytics"];

const Navbar = () => {
  const [active, setActive] = useState("Market Monitor");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="border-b border-border px-4 md:px-6 py-3 flex justify-between items-center bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-primary">
          <ShieldCheck className="text-primary-foreground w-5 h-5" />
        </div>
        <span className="font-bold tracking-tight text-lg uppercase">
          Aegis{" "}
          <span className="text-muted-foreground font-light text-sm hidden sm:inline">
            Commodity v2.4
          </span>
        </span>
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex gap-6 text-sm font-medium text-muted-foreground items-center">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`transition-colors ${active === item ? "text-primary" : "hover:text-primary"}`}
          >
            {item}
          </button>
        ))}
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2 text-primary">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Live System Active
        </div>
      </div>

      {/* Mobile toggle */}
      <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-3 lg:hidden z-50"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { setActive(item); setMobileOpen(false); }}
                className={`text-left text-sm py-2 px-3 rounded-lg transition-colors ${
                  active === item ? "bg-secondary text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
            <div className="flex items-center gap-2 text-primary text-sm px-3 pt-2 border-t border-border">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Live System Active
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
