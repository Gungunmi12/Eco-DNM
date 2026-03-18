import { AlertTriangle, Package, Cloud, TrendingUp, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialAlerts = [
  { id: 1, icon: TrendingUp, text: "Price Spike in North Region", color: "text-destructive", bg: "bg-destructive/10" },
  { id: 2, icon: Package, text: "Low Stock: Urad Dal", color: "text-warning", bg: "bg-warning/10" },
  { id: 3, icon: Cloud, text: "Dry Spell in Central Area", color: "text-accent", bg: "bg-accent/10" },
  { id: 4, icon: AlertTriangle, text: "Wheat Volatility > 2.8%", color: "text-destructive", bg: "bg-destructive/10" },
];

const ActiveAlertsSidebar = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  return (
    <div className="surface-card p-5">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Active Alerts</h4>
        <span className="text-[10px] font-mono text-muted-foreground">{alerts.length} active</span>
      </div>
      <div className="space-y-2">
        <AnimatePresence>
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`flex items-center gap-2 p-2.5 rounded-lg ${alert.bg} border border-border/50`}
            >
              <alert.icon size={14} className={alert.color} />
              <span className="text-xs flex-1">{alert.text}</span>
              <button onClick={() => setAlerts(a => a.filter(x => x.id !== alert.id))} className="text-muted-foreground hover:text-foreground">
                <X size={12} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        {alerts.length === 0 && <p className="text-xs text-muted-foreground text-center py-4">No active alerts</p>}
      </div>
    </div>
  );
};

export default ActiveAlertsSidebar;
