import { AlertTriangle, Bell, TrendingUp, TrendingDown, Package } from "lucide-react";
import { motion } from "framer-motion";

const alerts = [
  {
    type: "spike",
    icon: TrendingUp,
    title: "Price Spike: Rice (Basmati)",
    desc: "North Region — ₹4,200/quintal (+8.3% in 6h)",
    time: "12 min ago",
    severity: "destructive" as const,
  },
  {
    type: "low_stock",
    icon: Package,
    title: "Low Stock Warning: Sugar",
    desc: "West Region — Buffer at 18% (threshold: 25%)",
    time: "34 min ago",
    severity: "warning" as const,
  },
  {
    type: "drop",
    icon: TrendingDown,
    title: "Price Drop: Onion",
    desc: "South Region — ₹1,800/quintal (−5.1% in 4h)",
    time: "1h ago",
    severity: "primary" as const,
  },
  {
    type: "spike",
    icon: AlertTriangle,
    title: "Volatility Alert: Wheat",
    desc: "National — Volatility index crossed 2.8% threshold",
    time: "2h ago",
    severity: "warning" as const,
  },
];

const severityStyles = {
  destructive: "border-destructive/30 bg-destructive/5",
  warning: "border-warning/30 bg-warning/5",
  primary: "border-primary/30 bg-primary/5",
};

const iconStyles = {
  destructive: "text-destructive",
  warning: "text-warning",
  primary: "text-primary",
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const AlertsPanel = () => (
  <motion.section
    variants={stagger}
    initial="hidden"
    animate="show"
    className="col-span-12 surface-card p-5 md:p-6"
  >
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
        <Bell className="w-4 h-4" /> Smart Alerts
      </h3>
      <span className="text-xs font-mono text-muted-foreground">
        {alerts.length} active
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {alerts.map((alert, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className={`p-4 rounded-xl border ${severityStyles[alert.severity]} flex gap-3`}
        >
          <alert.icon className={`w-5 h-5 mt-0.5 shrink-0 ${iconStyles[alert.severity]}`} />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2">
              <h4 className="text-sm font-medium truncate">{alert.title}</h4>
              <span className="text-[10px] text-muted-foreground shrink-0">{alert.time}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{alert.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default AlertsPanel;
