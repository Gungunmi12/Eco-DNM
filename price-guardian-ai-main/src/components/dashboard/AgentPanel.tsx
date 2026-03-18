import { Cpu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const agents = [
  { name: "Monitor", status: "Scanning", color: "primary", desc: "Real-time price tracking across 12 regions" },
  { name: "Predictor", status: "Forecasting", color: "accent", desc: "ARIMA + LSTM ensemble model active" },
  { name: "Strategist", status: "Idle", color: "muted", desc: "Awaiting trigger threshold" },
  { name: "AlertBot", status: "Monitoring", color: "warning", desc: "3 active alert rules configured" },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/5", text: "text-primary", border: "border-primary/30" },
  accent: { bg: "bg-accent/5", text: "text-accent", border: "border-accent/30" },
  muted: { bg: "bg-muted", text: "text-muted-foreground", border: "border-border" },
  warning: { bg: "bg-warning/5", text: "text-warning", border: "border-warning/30" },
};

const AgentPanel = () => {
  const [activeAgent, setActiveAgent] = useState("Predictor");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
      className="col-span-12 lg:col-span-4 flex flex-col gap-6"
    >
      <div className="surface-card p-4 md:p-6 flex-1">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
          <Cpu className="w-4 h-4" /> Active Agents
        </h3>
        <div className="space-y-3">
          {agents.map((agent) => {
            const c = colorMap[agent.color];
            return (
              <motion.div
                key={agent.name}
                onClick={() => setActiveAgent(agent.name)}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  activeAgent === agent.name
                    ? "bg-secondary border-border shadow-lg"
                    : "bg-card/30 border-border/50 hover:border-border"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{agent.name} Agent</span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${c.border} ${c.text} ${c.bg}`}>
                    {agent.status}
                  </span>
                </div>
                {activeAgent === agent.name && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-xs text-muted-foreground mt-2"
                  >
                    {agent.desc}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="surface-card p-4 md:p-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
          System Health
        </h3>
        <div className="space-y-3">
          {[
            { label: "Data Latency", value: "12ms", good: true },
            { label: "Model Accuracy", value: "94.2%", good: true },
            { label: "Active Alerts", value: "3", good: false },
          ].map((s) => (
            <div key={s.label} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{s.label}</span>
              <span className={`font-mono ${s.good ? "text-primary" : "text-warning"}`}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AgentPanel;
