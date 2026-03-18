import { ShieldCheck, Building2, Truck, Landmark, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const schemeDetails: Record<string, { title: string; icon: any; color: string; description: string; stats: { label: string; value: string }[]; actions: string[] }> = {
  psf: {
    title: "Price Stabilization Fund (PSF)",
    icon: ShieldCheck,
    color: "text-primary",
    description: "The PSF is designed to moderate price volatility of essential commodities through strategic market interventions. The fund maintains reserves for procurement and distribution during supply-demand imbalances.",
    stats: [
      { label: "Total Corpus", value: "₹3,500 Cr" },
      { label: "Utilized", value: "67%" },
      { label: "Active Interventions", value: "12" },
      { label: "Success Rate", value: "89.3%" },
    ],
    actions: ["Release buffer to Central Region", "Procure additional wheat stock", "Approve oilseed intervention"],
  },
  fci: {
    title: "Food Corporation of India (FCI)",
    icon: Building2,
    color: "text-accent",
    description: "FCI manages procurement, storage, and distribution of food grains. Current reserves are at optimal levels with active procurement across 14 states.",
    stats: [
      { label: "Wheat Stock", value: "42.3 MT" },
      { label: "Rice Stock", value: "38.1 MT" },
      { label: "Storage Utilization", value: "82%" },
      { label: "Procurement Centers", value: "2,847" },
    ],
    actions: ["Increase procurement in Punjab", "Release 45,000 MT wheat", "Optimize godown utilization"],
  },
  pds: {
    title: "Public Distribution System (PDS)",
    icon: Truck,
    color: "text-warning",
    description: "PDS ensures food security through a network of fair price shops. Coverage has expanded to 94.1% of eligible beneficiaries with real-time tracking of distribution.",
    stats: [
      { label: "Coverage", value: "94.1%" },
      { label: "Fair Price Shops", value: "5.3L" },
      { label: "Beneficiaries", value: "81.3 Cr" },
      { label: "Monthly Distribution", value: "5.2 MT" },
    ],
    actions: ["Increase NE region allocation", "Update beneficiary database", "Optimize supply routes"],
  },
  fao: {
    title: "FAO Global Insights",
    icon: Landmark,
    color: "text-accent",
    description: "FAO provides global food security data, price indices, and early warning systems. Integration enables correlation of global trends with domestic price movements.",
    stats: [
      { label: "Food Price Index", value: "124.3" },
      { label: "Cereal Index", value: "118.7" },
      { label: "Vegetable Oil Index", value: "131.2" },
      { label: "Sugar Index", value: "142.8" },
    ],
    actions: ["Sync latest global data", "Run correlation analysis", "Generate impact report"],
  },
};

const GovSchemePage = ({ scheme }: { scheme: string }) => {
  const data = schemeDetails[scheme];
  if (!data) return null;
  const Icon = data.icon;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="surface-card p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl bg-secondary border border-border`}>
            <Icon size={28} className={data.color} />
          </div>
          <div>
            <h2 className="text-xl font-bold">{data.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{data.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.stats.map((s, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-card/30 text-center">
              <div className="text-xs text-muted-foreground mb-1">{s.label}</div>
              <div className="text-xl font-mono font-bold">{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="surface-card p-5 md:p-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" /> Recommended Actions
        </h3>
        <div className="space-y-2">
          {data.actions.map((a, i) => (
            <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl border border-border hover:bg-primary/5 hover:border-primary/30 transition-all text-left">
              <span className="text-sm">{a}</span>
              <ArrowRight size={16} className="text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GovSchemePage;
