import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Real-Time Live Prices", "ARIMA Price Forecast", "Intelligent Buffer Stock Management"];

interface DashboardTabsProps {
  onTabChange: (tab: string) => void;
}

const DashboardTabs = ({ onTabChange }: DashboardTabsProps) => {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="flex flex-wrap gap-0 border border-border rounded-xl overflow-hidden mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => { setActive(tab); onTabChange(tab); }}
          className={`relative flex-1 min-w-[200px] px-4 py-3 text-sm font-medium transition-all ${
            active === tab ? "bg-primary/10 text-primary" : "bg-card/30 text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          }`}
        >
          {tab}
          {active === tab && (
            <motion.div layoutId="tabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      ))}
    </div>
  );
};

export default DashboardTabs;
