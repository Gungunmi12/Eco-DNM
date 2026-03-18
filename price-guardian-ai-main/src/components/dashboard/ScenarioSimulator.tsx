import { Play, Info } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const basePrice = 2180;

function generateScenarioData(supplyShock: number, fuelSurge: number, monsoonFail: number) {
  const impact = supplyShock * 8 + fuelSurge * 5 + monsoonFail * 12;
  return [
    { week: "W1", base: basePrice, scenario: basePrice + impact * 0.2 },
    { week: "W2", base: basePrice + 10, scenario: basePrice + 10 + impact * 0.45 },
    { week: "W3", base: basePrice + 5, scenario: basePrice + 5 + impact * 0.7 },
    { week: "W4", base: basePrice + 20, scenario: basePrice + 20 + impact * 0.85 },
    { week: "W5", base: basePrice + 15, scenario: basePrice + 15 + impact },
    { week: "W6", base: basePrice + 25, scenario: basePrice + 25 + impact * 0.9 },
  ];
}

const ScenarioSimulator = () => {
  const [supplyShock, setSupplyShock] = useState(20);
  const [fuelSurge, setFuelSurge] = useState(15);
  const [monsoonFail, setMonsoonFail] = useState(10);

  const data = generateScenarioData(supplyShock, fuelSurge, monsoonFail);
  const priceImpact = Math.round(supplyShock * 8 + fuelSurge * 5 + monsoonFail * 12);
  const fundRequired = Math.round(priceImpact * 2.3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
      className="col-span-12 bg-surface-elevated border border-accent/20 rounded-2xl p-5 md:p-8 glow-agent"
    >
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
          <Play className="text-accent w-5 h-5 md:w-6 md:h-6 fill-accent" />
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-bold italic tracking-tight uppercase">
            Scenario Simulator (What-If Analysis)
          </h2>
          <p className="text-muted-foreground text-sm">Predict outcomes by adjusting external variables</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Controls */}
        <div className="space-y-6">
          {[
            { label: "Supply Shock (%)", value: supplyShock, set: setSupplyShock },
            { label: "Fuel Price Surge (%)", value: fuelSurge, set: setFuelSurge },
            { label: "Monsoon Failure Risk (%)", value: monsoonFail, set: setMonsoonFail },
          ].map((s) => (
            <div key={s.label}>
              <label className="text-xs font-bold text-muted-foreground uppercase block mb-2">
                {s.label}
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={s.value}
                onChange={(e) => s.set(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-right text-xs font-mono text-accent mt-1">{s.value}%</div>
            </div>
          ))}

          {/* Impact Summary */}
          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Est. Price Impact</span>
              <span className="font-mono text-destructive">+₹{priceImpact}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">PSF Required</span>
              <span className="font-mono text-warning">₹{fundRequired}Cr</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="lg:col-span-3 bg-background/50 rounded-xl border border-border p-4 md:p-6">
          {priceImpact === 0 ? (
            <div className="h-[250px] flex items-center justify-center">
              <div className="text-center">
                <Info className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm max-w-xs">
                  Adjust parameters to see AI-generated impact on price stabilization funds.
                </p>
              </div>
            </div>
          ) : (
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217,33%,15%)" vertical={false} />
                  <XAxis dataKey="week" stroke="hsl(215,20%,45%)" fontSize={12} tickLine={false} axisLine={false} />
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
                  <Line type="monotone" dataKey="base" stroke="hsl(160,84%,39%)" strokeWidth={2} name="Baseline" dot={false} />
                  <Line type="monotone" dataKey="scenario" stroke="hsl(0,84%,60%)" strokeWidth={2} strokeDasharray="5 5" name="Scenario" dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ScenarioSimulator;
