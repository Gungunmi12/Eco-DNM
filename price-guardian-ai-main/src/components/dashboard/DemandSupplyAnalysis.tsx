import { BarChart3, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { commodity: "Wheat", demand: 85, supply: 78, gap: 7 },
  { commodity: "Rice", demand: 92, supply: 88, gap: 4 },
  { commodity: "Sugar", demand: 70, supply: 75, gap: -5 },
  { commodity: "Onion", demand: 65, supply: 60, gap: 5 },
  { commodity: "Oil", demand: 80, supply: 72, gap: 8 },
  { commodity: "Dal", demand: 55, supply: 48, gap: 7 },
];

const seasonalTrends = [
  { month: "Kharif", trend: "High demand for rice, oilseeds", impact: "positive" },
  { month: "Rabi", trend: "Wheat procurement peaks", impact: "positive" },
  { month: "Summer", trend: "Onion & tomato volatility spikes", impact: "negative" },
  { month: "Monsoon", trend: "Supply disruptions likely", impact: "negative" },
];

const DemandSupplyAnalysis = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="surface-card p-5 md:p-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
        <BarChart3 className="w-4 h-4" /> Demand vs Supply Gap Analysis
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217,33%,15%)" vertical={false} />
            <XAxis dataKey="commodity" stroke="hsl(215,20%,45%)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(215,20%,45%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={v => `${v}MT`} />
            <Tooltip contentStyle={{ backgroundColor: "hsl(217,33%,6%)", border: "1px solid hsl(217,33%,15%)", borderRadius: "8px", fontSize: "12px" }} />
            <Legend />
            <Bar dataKey="demand" fill="hsl(239,84%,67%)" radius={[4, 4, 0, 0]} name="Demand (kMT)" />
            <Bar dataKey="supply" fill="hsl(160,84%,39%)" radius={[4, 4, 0, 0]} name="Supply (kMT)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {data.map(d => (
          <div key={d.commodity} className={`p-3 rounded-lg border ${d.gap > 0 ? "border-destructive/20 bg-destructive/5" : "border-primary/20 bg-primary/5"}`}>
            <div className="text-xs text-muted-foreground">{d.commodity}</div>
            <div className={`text-sm font-mono font-bold flex items-center gap-1 ${d.gap > 0 ? "text-destructive" : "text-primary"}`}>
              {d.gap > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {d.gap > 0 ? "+" : ""}{d.gap}% gap
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="surface-card p-5 md:p-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Seasonal Trends</h3>
      <div className="space-y-3">
        {seasonalTrends.map((t, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-secondary/30 transition-colors">
            <span className={`text-xs font-bold px-2 py-1 rounded ${t.impact === "positive" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>{t.month}</span>
            <span className="text-sm text-muted-foreground">{t.trend}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default DemandSupplyAnalysis;
