import { ShieldCheck, Building2, Truck, Landmark, CheckCircle } from "lucide-react";

const schemes = [
  { icon: ShieldCheck, label: "Price Stabilization Fund", status: "Active", color: "text-primary" },
  { icon: Building2, label: "Food Corporation of India", status: "Active", color: "text-primary" },
  { icon: Truck, label: "Public Distribution System", status: "Review", color: "text-warning" },
  { icon: Landmark, label: "FAO Insights", status: "Active", color: "text-accent" },
];

const GovSchemesSidebar = () => (
  <div className="surface-card p-5">
    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Govt Schemes</h4>
    <div className="space-y-2">
      {schemes.map((s, i) => (
        <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
          <CheckCircle size={14} className={s.color} />
          <span className="text-xs flex-1">{s.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default GovSchemesSidebar;
