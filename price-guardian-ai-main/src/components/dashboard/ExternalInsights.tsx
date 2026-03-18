import { Globe, Cloud, Leaf, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const weatherData = [
  { region: "North India", condition: "Clear", temp: "32°C", rainfall: "12mm", risk: "Low" },
  { region: "Central India", condition: "Dry Spell", temp: "38°C", rainfall: "2mm", risk: "High" },
  { region: "South India", condition: "Scattered Rain", temp: "29°C", rainfall: "45mm", risk: "Moderate" },
  { region: "East India", condition: "Humid", temp: "34°C", rainfall: "28mm", risk: "Moderate" },
];

const cropData = [
  { crop: "Wheat", production: "112 MT", yoy: "+3.2%", status: "On Track" },
  { crop: "Rice", production: "130 MT", yoy: "+1.8%", status: "On Track" },
  { crop: "Sugarcane", production: "410 MT", yoy: "-2.1%", status: "Below Target" },
  { crop: "Oilseeds", production: "38 MT", yoy: "+5.4%", status: "Exceeding" },
];

const globalIndices = [
  { label: "FAO Food Price Index", value: "124.3", change: "+1.2%" },
  { label: "Brent Crude", value: "$82.4", change: "+0.8%" },
  { label: "Global Wheat Futures", value: "$7.24/bu", change: "-1.4%" },
  { label: "USD/INR", value: "83.12", change: "+0.1%" },
];

const ExternalInsights = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    {/* Weather */}
    <div className="surface-card p-5 md:p-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
        <Cloud className="w-4 h-4" /> Weather & Climate Data
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {weatherData.map((w, i) => (
          <div key={i} className={`p-4 rounded-xl border ${w.risk === "High" ? "border-destructive/30 bg-destructive/5" : w.risk === "Moderate" ? "border-warning/30 bg-warning/5" : "border-border bg-card/30"}`}>
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium">{w.region}</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${w.risk === "High" ? "bg-destructive/20 text-destructive" : w.risk === "Moderate" ? "bg-warning/20 text-warning" : "bg-primary/20 text-primary"}`}>{w.risk} Risk</span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <div className="flex justify-between"><span>Condition:</span><span className="font-mono">{w.condition}</span></div>
              <div className="flex justify-between"><span>Temperature:</span><span className="font-mono">{w.temp}</span></div>
              <div className="flex justify-between"><span>Rainfall:</span><span className="font-mono">{w.rainfall}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Crop Production */}
    <div className="surface-card p-5 md:p-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
        <Leaf className="w-4 h-4" /> Crop Production Data
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground text-xs uppercase">
              <th className="text-left py-2 px-2">Crop</th>
              <th className="text-right py-2 px-2">Production</th>
              <th className="text-right py-2 px-2">YoY</th>
              <th className="text-right py-2 px-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {cropData.map((c, i) => (
              <tr key={i} className="border-b border-border/50">
                <td className="py-3 px-2 font-medium">{c.crop}</td>
                <td className="py-3 px-2 text-right font-mono">{c.production}</td>
                <td className={`py-3 px-2 text-right font-mono ${c.yoy.startsWith("+") ? "text-primary" : "text-destructive"}`}>{c.yoy}</td>
                <td className="py-3 px-2 text-right">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${c.status === "On Track" ? "bg-primary/10 text-primary" : c.status === "Exceeding" ? "bg-accent/10 text-accent" : "bg-warning/10 text-warning"}`}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Global Indices */}
    <div className="surface-card p-5 md:p-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
        <Globe className="w-4 h-4" /> Global Market Indices
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {globalIndices.map((g, i) => (
          <div key={i} className="p-4 rounded-xl border border-border bg-card/30 text-center">
            <div className="text-xs text-muted-foreground mb-1">{g.label}</div>
            <div className="text-lg font-mono font-bold">{g.value}</div>
            <div className={`text-xs font-mono ${g.change.startsWith("+") ? "text-primary" : "text-destructive"}`}>{g.change}</div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ExternalInsights;
