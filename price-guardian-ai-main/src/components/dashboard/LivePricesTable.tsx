import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

interface CommodityPrice {
  name: string;
  region: string;
  price: number;
  change: number;
  unit: string;
  updated: string;
}

const initialPrices: CommodityPrice[] = [
  { name: "Wheat (Grade A)", region: "North", price: 2180, change: 3.2, unit: "₹/quintal", updated: "2s ago" },
  { name: "Rice (Basmati)", region: "North", price: 4200, change: 8.3, unit: "₹/quintal", updated: "5s ago" },
  { name: "Sugar", region: "West", price: 3650, change: -1.2, unit: "₹/quintal", updated: "8s ago" },
  { name: "Onion", region: "South", price: 1800, change: -5.1, unit: "₹/quintal", updated: "3s ago" },
  { name: "Edible Oil (Palm)", region: "Central", price: 142, change: 2.4, unit: "₹/L", updated: "12s ago" },
  { name: "Urad Dal", region: "East", price: 8500, change: 4.1, unit: "₹/quintal", updated: "6s ago" },
  { name: "Potato", region: "NE", price: 1200, change: -2.8, unit: "₹/quintal", updated: "15s ago" },
  { name: "Tomato", region: "South", price: 2800, change: 12.5, unit: "₹/quintal", updated: "1s ago" },
  { name: "Mustard Oil", region: "North", price: 178, change: 1.6, unit: "₹/L", updated: "20s ago" },
  { name: "Chana Dal", region: "Central", price: 6200, change: -0.8, unit: "₹/quintal", updated: "10s ago" },
];

const LivePricesTable = () => {
  const [prices, setPrices] = useState(initialPrices);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(p => ({
        ...p,
        price: p.price + Math.round((Math.random() - 0.48) * p.price * 0.005),
        change: +(p.change + (Math.random() - 0.48) * 0.5).toFixed(1),
        updated: "just now",
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const regions = ["All", ...new Set(initialPrices.map(p => p.region))];
  const filtered = filter === "All" ? prices : prices.filter(p => p.region === filter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="surface-card p-5 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">Real-Time Live Prices</h3>
          <RefreshCw size={14} className="text-primary animate-spin" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {regions.map(r => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                filter === r ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground text-xs uppercase">
              <th className="text-left py-3 px-2">Commodity</th>
              <th className="text-left py-3 px-2">Region</th>
              <th className="text-right py-3 px-2">Price</th>
              <th className="text-right py-3 px-2">Change</th>
              <th className="text-right py-3 px-2 hidden sm:table-cell">Updated</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <motion.tr
                key={p.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
              >
                <td className="py-3 px-2 font-medium">{p.name}</td>
                <td className="py-3 px-2 text-muted-foreground">{p.region}</td>
                <td className="py-3 px-2 text-right font-mono">{p.unit === "₹/L" ? `₹${p.price}` : `₹${p.price.toLocaleString()}`}</td>
                <td className={`py-3 px-2 text-right font-mono flex items-center justify-end gap-1 ${p.change >= 0 ? "text-destructive" : "text-primary"}`}>
                  {p.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {p.change >= 0 ? "+" : ""}{p.change}%
                </td>
                <td className="py-3 px-2 text-right text-muted-foreground text-xs hidden sm:table-cell">{p.updated}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default LivePricesTable;
