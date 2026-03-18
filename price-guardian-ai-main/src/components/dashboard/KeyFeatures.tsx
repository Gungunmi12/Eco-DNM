import { Bell, Play, BarChart3, Package } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Bell, label: "Smart Alerts", color: "text-destructive", bg: "bg-destructive/10" },
  { icon: Play, label: "Scenario Simulation", color: "text-primary", bg: "bg-primary/10" },
  { icon: BarChart3, label: "Demand-Supply Alert", color: "text-warning", bg: "bg-warning/10" },
  { icon: Package, label: "Buffer Stock Management", color: "text-accent", bg: "bg-accent/10" },
];

const KeyFeatures = ({ onNavigate }: { onNavigate: (section: string) => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="surface-card p-5 md:p-6"
  >
    <h3 className="text-sm font-bold uppercase tracking-widest text-center mb-6 text-foreground bg-primary/10 py-2 rounded-lg border border-primary/20">
      Key Features
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {features.map((f, i) => (
        <button
          key={i}
          onClick={() => onNavigate(f.label === "Smart Alerts" ? "alerts" : f.label === "Scenario Simulation" ? "scenario" : f.label === "Demand-Supply Alert" ? "demand-supply" : "buffer-stock")}
          className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all group"
        >
          <div className={`p-3 rounded-xl ${f.bg} group-hover:scale-110 transition-transform`}>
            <f.icon size={24} className={f.color} />
          </div>
          <span className="text-xs font-medium text-center">{f.label}</span>
        </button>
      ))}
    </div>
  </motion.div>
);

export default KeyFeatures;
