import { useState } from "react";
import {
  LayoutDashboard, IndianRupee, TrendingUp, Package, Bell, Play,
  BarChart3, Globe, FileText, PieChart, ChevronDown, ChevronRight,
  ShieldCheck, Building2, Truck, Landmark, Menu, X, LogOut
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "live-prices", label: "Live Prices", icon: IndianRupee },
  { id: "price-forecast", label: "Price Forecast", icon: TrendingUp },
  { id: "buffer-stock", label: "Buffer Stock Management", icon: Package },
  { id: "alerts", label: "Alerts & Notifications", icon: Bell },
  { id: "scenario", label: "Scenario Simulation", icon: Play },
  { id: "demand-supply", label: "Demand-Supply Analysis", icon: BarChart3 },
  { id: "external", label: "External Insights", icon: Globe },
  { id: "policy", label: "Policy Recommendations", icon: FileText },
  { id: "reports", label: "Reports & Analytics", icon: PieChart },
];

const govSchemes = [
  { id: "psf", label: "PSF", icon: ShieldCheck },
  { id: "fci", label: "FCI", icon: Building2 },
  { id: "pds", label: "PDS", icon: Truck },
  { id: "fao", label: "FAO", icon: Landmark },
];

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const { user, signOut } = useAuth();
  const [govOpen, setGovOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-border flex items-center gap-3">
        <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center glow-primary">
          <ShieldCheck className="text-primary-foreground w-5 h-5" />
        </div>
        <div>
          <span className="font-bold text-sm tracking-tight">AEGIS</span>
          <span className="text-muted-foreground text-[10px] block leading-none">Commodity Intelligence</span>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              activeSection === item.id
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <item.icon size={16} />
            {item.label}
          </button>
        ))}

        {/* Government Schemes */}
        <div className="pt-3 mt-3 border-t border-border">
          <button
            onClick={() => setGovOpen(!govOpen)}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-warning"
          >
            <Landmark size={16} />
            Government Schemes
            {govOpen ? <ChevronDown size={14} className="ml-auto" /> : <ChevronRight size={14} className="ml-auto" />}
          </button>
          <AnimatePresence>
            {govOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden pl-4 space-y-0.5"
              >
                {govSchemes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { onNavigate(s.id); setMobileOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                      activeSection === s.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <s.icon size={14} />
                    {s.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* User & Logout */}
      <div className="p-4 border-t border-border space-y-3">
        <div className="flex items-center gap-2 text-xs text-primary">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Live System Active
        </div>
        {user && (
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground truncate max-w-[160px]">{user.email}</span>
            <button
              onClick={signOut}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
              title="Sign out"
            >
              <LogOut size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-3 left-3 z-[60] p-2 bg-card border border-border rounded-lg"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-[55]"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-[260px] bg-card border-r border-border z-[56] transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navContent}
      </aside>
    </>
  );
};

export default Sidebar;
