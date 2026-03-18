import { Map } from "lucide-react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const regionData = [
  { region: "North", price: 2180, change: 3.2 },
  { region: "South", price: 2050, change: -1.4 },
  { region: "East", price: 2220, change: 5.1 },
  { region: "West", price: 2100, change: 1.8 },
  { region: "Central", price: 2310, change: 7.2 },
  { region: "NE", price: 2150, change: 2.1 },
];

const RegionComparison = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.6 }}
    className="col-span-12 lg:col-span-6 surface-card p-5 md:p-6"
  >
    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
      <Map className="w-4 h-4" /> Multi-Region Price Comparison
    </h3>
    <div className="h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={regionData} barSize={32}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217,33%,15%)" vertical={false} />
          <XAxis dataKey="region" stroke="hsl(215,20%,45%)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(215,20%,45%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(217,33%,6%)",
              border: "1px solid hsl(217,33%,15%)",
              borderRadius: "8px",
              fontSize: "12px",
              fontFamily: "IBM Plex Mono",
            }}
          />
          <Bar dataKey="price" fill="hsl(160,84%,39%)" radius={[4, 4, 0, 0]} name="Price (₹/quintal)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
      {regionData.map((r) => (
        <div key={r.region} className="text-center">
          <div className="text-xs text-muted-foreground">{r.region}</div>
          <div className={`text-xs font-mono ${r.change > 3 ? "text-destructive" : r.change < 0 ? "text-primary" : "text-foreground"}`}>
            {r.change > 0 ? "+" : ""}{r.change}%
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default RegionComparison;
