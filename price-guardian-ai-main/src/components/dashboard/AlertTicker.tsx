import { AlertTriangle, Package, BarChart3, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const tickerAlerts = [
  { icon: AlertTriangle, text: "Price Spike Alert", color: "bg-destructive text-destructive-foreground" },
  { icon: Package, text: "Buffer Stock Release Needed", color: "bg-warning text-warning-foreground" },
  { icon: BarChart3, text: "Demand-Supply Gap: +5.2% Deficit", color: "bg-accent text-accent-foreground" },
  { icon: Cloud, text: "Weather Impact: Dry Spell Detected", color: "bg-primary text-primary-foreground" },
];

const AlertTicker = () => (
  <div className="flex flex-wrap gap-2 mb-6">
    {tickerAlerts.map((alert, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold ${alert.color}`}
      >
        <alert.icon size={14} />
        {alert.text}
      </motion.div>
    ))}
  </div>
);

export default AlertTicker;
