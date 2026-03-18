import { FileText, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const policies = [
  {
    title: "Buffer Stock Release — Wheat (Central)",
    status: "recommended",
    confidence: 91.7,
    reasoning: "ARIMA model projects 12% price increase over 48h. Release of 45,000 MT recommended under PSF guidelines.",
  },
  {
    title: "Import Tariff Adjustment — Edible Oil",
    status: "pending",
    confidence: 78.3,
    reasoning: "Global palm oil prices down 6%. Temporary tariff reduction could reduce domestic prices by ₹8-12/L.",
  },
  {
    title: "PDS Allocation Increase — Rice (NE Region)",
    status: "approved",
    confidence: 95.1,
    reasoning: "Stock levels at 92%. NE region showing 15% higher demand due to seasonal patterns.",
  },
];

const statusConfig = {
  recommended: { icon: AlertTriangle, label: "Recommended", style: "text-warning bg-warning/10 border-warning/30" },
  pending: { icon: Clock, label: "Pending Review", style: "text-accent bg-accent/10 border-accent/30" },
  approved: { icon: CheckCircle, label: "Approved", style: "text-primary bg-primary/10 border-primary/30" },
};

const PolicyEngine = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.7 }}
    className="col-span-12 lg:col-span-6 surface-card p-5 md:p-6"
  >
    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
      <FileText className="w-4 h-4" /> Policy Recommendations (XAI)
    </h3>
    <div className="space-y-4">
      {policies.map((p, i) => {
        const s = statusConfig[p.status as keyof typeof statusConfig];
        return (
          <div key={i} className="p-4 rounded-xl border border-border bg-card/30 hover:bg-secondary/50 transition-colors">
            <div className="flex justify-between items-start gap-3 mb-2">
              <h4 className="text-sm font-medium">{p.title}</h4>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border shrink-0 ${s.style}`}>
                {s.label}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.reasoning}</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 bg-secondary h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: `${p.confidence}%` }} />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">{p.confidence}%</span>
            </div>
          </div>
        );
      })}
    </div>
  </motion.section>
);

export default PolicyEngine;
