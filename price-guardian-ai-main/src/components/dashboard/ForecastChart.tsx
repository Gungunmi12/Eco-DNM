import {
  AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const priceData = [
  { time: "06:00", price: 2050, forecast: null },
  { time: "08:00", price: 2100, forecast: null },
  { time: "10:00", price: 2150, forecast: null },
  { time: "12:00", price: 2120, forecast: null },
  { time: "14:00", price: 2180, forecast: 2180 },
  { time: "16:00", price: null, forecast: 2210 },
  { time: "18:00", price: null, forecast: 2250 },
  { time: "20:00", price: null, forecast: 2230 },
  { time: "22:00", price: null, forecast: 2270 },
];

const ForecastChart = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="col-span-12 lg:col-span-8 surface-card p-4 md:p-6 relative overflow-hidden"
  >
    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 md:mb-8">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Price Forecast: Wheat (FCI Grade A)
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          ARIMA-based 12-hour predictive modeling vs. Real-time Spot Price
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-secondary rounded-md text-xs font-mono border border-border">
          REGION: NORTH-WEST
        </span>
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-mono border border-primary/20">
          CONFIDENCE: 94.2%
        </span>
      </div>
    </div>

    <div className="h-[280px] md:h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={priceData}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(160,84%,39%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(160,84%,39%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217,33%,15%)" vertical={false} />
          <XAxis dataKey="time" stroke="hsl(215,20%,45%)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="hsl(215,20%,45%)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `₹${v}`}
            domain={["dataMin - 100", "dataMax + 100"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(217,33%,6%)",
              border: "1px solid hsl(217,33%,15%)",
              borderRadius: "8px",
              fontSize: "12px",
              fontFamily: "IBM Plex Mono",
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="hsl(160,84%,39%)"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorPrice)"
            name="Spot Price"
          />
          <Line
            type="monotone"
            dataKey="forecast"
            stroke="hsl(239,84%,67%)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4, fill: "hsl(239,84%,67%)" }}
            name="AI Forecast"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>

    {/* Legend */}
    <div className="flex gap-6 mt-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-3 h-0.5 bg-primary rounded" />
        <span>Spot Price</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-0.5 bg-accent rounded" style={{ borderTop: "2px dashed" }} />
        <span>AI Forecast (ARIMA)</span>
      </div>
    </div>
  </motion.section>
);

export default ForecastChart;
