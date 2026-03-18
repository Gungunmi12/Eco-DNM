import { TrendingUp, Activity, Database, ChevronRight, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
};

const BufferStockModule = () => (
  <motion.section
    variants={stagger}
    initial="hidden"
    animate="show"
    className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
  >
    {/* AI Recommendation */}
    <motion.div variants={fadeUp} className="bg-primary/5 border border-primary/20 rounded-2xl p-5 md:p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <TrendingUp size={80} />
      </div>
      <h4 className="text-primary text-sm font-bold uppercase mb-2">AI Recommendation</h4>
      <div className="text-2xl md:text-3xl font-bold mb-3">RELEASE STOCK</div>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
        Current volatility index is <span className="text-destructive font-mono">14.2%</span>.
        Release <span className="text-foreground font-mono">45,000 MT</span> to Central Region to stabilize price within 48 hours.
      </p>
      <button className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all flex items-center justify-center gap-2 animate-pulse-glow">
        Execute Release <ChevronRight size={18} />
      </button>
      <div className="mt-3 text-xs text-muted-foreground text-center">
        Approved by Policy Engine • Confidence: 91.7%
      </div>
    </motion.div>

    {/* Market Volatility */}
    <motion.div variants={fadeUp} className="surface-card p-5 md:p-6">
      <h4 className="text-muted-foreground text-sm font-bold uppercase mb-4 flex items-center gap-2">
        <Activity className="w-4 h-4" /> Market Volatility
      </h4>
      <div className="flex items-end gap-2 mb-4">
        <span className="text-3xl md:text-4xl font-mono font-bold">2.4%</span>
        <span className="text-destructive text-sm font-medium mb-1 flex items-center">
          +0.8% <TrendingUp size={14} className="ml-1" />
        </span>
      </div>
      <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden mb-4">
        <div className="bg-destructive h-full rounded-full transition-all" style={{ width: "65%" }} />
      </div>
      <p className="text-xs text-muted-foreground italic">Threshold: 3.0% for automatic intervention.</p>

      <div className="mt-4 pt-4 border-t border-border space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">24h High</span>
          <span className="font-mono text-destructive">₹2,280</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">24h Low</span>
          <span className="font-mono text-primary">₹2,050</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Avg Spread</span>
          <span className="font-mono">₹115</span>
        </div>
      </div>
    </motion.div>

    {/* Global Context */}
    <motion.div variants={fadeUp} className="surface-card p-5 md:p-6">
      <h4 className="text-muted-foreground text-sm font-bold uppercase mb-4 flex items-center gap-2">
        <Database className="w-4 h-4" /> Global Context
      </h4>
      <div className="space-y-3">
        {[
          { label: "FAO Food Price Index", value: "124.3", trend: null },
          { label: "Weather Risk", value: "MODERATE", color: "text-warning" },
          { label: "FCI Reserves", value: "82%", color: "text-primary" },
          { label: "PDS Coverage", value: "94.1%", color: "text-primary" },
          { label: "Import Dependency", value: "12.4%", trend: "down" },
          { label: "PSF Utilization", value: "67%", color: "text-warning" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{item.label}</span>
            <span className={`font-mono ${item.color || ""} flex items-center gap-1`}>
              {item.value}
              {item.trend === "down" && <TrendingDown size={12} className="text-primary" />}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.section>
);

export default BufferStockModule;
