import { PieChart, Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const volatilityData = [
  { month: "Jan", wheat: 1.2, rice: 0.8, onion: 3.5 },
  { month: "Feb", wheat: 1.5, rice: 1.0, onion: 4.2 },
  { month: "Mar", wheat: 1.8, rice: 1.2, onion: 2.8 },
  { month: "Apr", wheat: 2.1, rice: 0.9, onion: 5.1 },
  { month: "May", wheat: 2.4, rice: 1.4, onion: 7.8 },
  { month: "Jun", wheat: 1.9, rice: 1.1, onion: 6.2 },
];

const reports = [
  { title: "Monthly Price Stability Report", date: "March 2026", status: "Ready" },
  { title: "Buffer Stock Utilization Report", date: "March 2026", status: "Ready" },
  { title: "Policy Impact Assessment", date: "Q1 2026", status: "Generating" },
  { title: "Regional Disparity Analysis", date: "March 2026", status: "Ready" },
];

const ReportsAnalytics = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="surface-card p-5 md:p-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
        <PieChart className="w-4 h-4" /> Price Volatility Analysis
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={volatilityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217,33%,15%)" vertical={false} />
            <XAxis dataKey="month" stroke="hsl(215,20%,45%)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(215,20%,45%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={v => `${v}%`} />
            <Tooltip contentStyle={{ backgroundColor: "hsl(217,33%,6%)", border: "1px solid hsl(217,33%,15%)", borderRadius: "8px", fontSize: "12px" }} />
            <Line type="monotone" dataKey="wheat" stroke="hsl(160,84%,39%)" strokeWidth={2} name="Wheat" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="rice" stroke="hsl(239,84%,67%)" strokeWidth={2} name="Rice" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="onion" stroke="hsl(0,84%,60%)" strokeWidth={2} name="Onion" dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="surface-card p-5 md:p-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
        <FileText className="w-4 h-4" /> Generated Reports
      </h3>
      <div className="space-y-3">
        {reports.map((r, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-secondary/30 transition-colors">
            <div>
              <div className="text-sm font-medium">{r.title}</div>
              <div className="text-xs text-muted-foreground">{r.date}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${r.status === "Ready" ? "bg-primary/10 text-primary" : "bg-warning/10 text-warning"}`}>{r.status}</span>
              {r.status === "Ready" && (
                <button className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <Download size={14} className="text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ReportsAnalytics;
