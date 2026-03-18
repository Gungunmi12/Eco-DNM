import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import AlertTicker from "@/components/dashboard/AlertTicker";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import KeyFeatures from "@/components/dashboard/KeyFeatures";
import ActiveAlertsSidebar from "@/components/dashboard/ActiveAlertsSidebar";
import GovSchemesSidebar from "@/components/dashboard/GovSchemesSidebar";
import LivePricesTable from "@/components/dashboard/LivePricesTable";
import ForecastChart from "@/components/dashboard/ForecastChart";
import AgentPanel from "@/components/dashboard/AgentPanel";
import BufferStockModule from "@/components/dashboard/BufferStockModule";
import ScenarioSimulator from "@/components/dashboard/ScenarioSimulator";
import AlertsPanel from "@/components/dashboard/AlertsPanel";
import RegionComparison from "@/components/dashboard/RegionComparison";
import PolicyEngine from "@/components/dashboard/PolicyEngine";
import DemandSupplyAnalysis from "@/components/dashboard/DemandSupplyAnalysis";
import ExternalInsights from "@/components/dashboard/ExternalInsights";
import ReportsAnalytics from "@/components/dashboard/ReportsAnalytics";
import GovSchemePage from "@/components/dashboard/GovSchemePage";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [dashTab, setDashTab] = useState("Real-Time Live Prices");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <AlertTicker />
            <DashboardTabs onTabChange={setDashTab} />
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {dashTab === "Real-Time Live Prices" && (
                <div className="col-span-12">
                  <LivePricesTable />
                </div>
              )}
              {dashTab === "ARIMA Price Forecast" && (
                <>
                  <ForecastChart />
                  <AgentPanel />
                </>
              )}
              {dashTab === "Intelligent Buffer Stock Management" && (
                <BufferStockModule />
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <KeyFeatures onNavigate={setActiveSection} />
              </div>
              <div className="space-y-4">
                <ActiveAlertsSidebar />
                <GovSchemesSidebar />
              </div>
            </div>
          </div>
        );
      case "live-prices":
        return <LivePricesTable />;
      case "price-forecast":
        return (
          <div className="grid grid-cols-12 gap-6">
            <ForecastChart />
            <AgentPanel />
          </div>
        );
      case "buffer-stock":
        return (
          <div className="grid grid-cols-12 gap-6">
            <BufferStockModule />
          </div>
        );
      case "alerts":
        return (
          <div className="grid grid-cols-12 gap-6">
            <AlertsPanel />
          </div>
        );
      case "scenario":
        return (
          <div className="grid grid-cols-12 gap-6">
            <ScenarioSimulator />
          </div>
        );
      case "demand-supply":
        return <DemandSupplyAnalysis />;
      case "external":
        return <ExternalInsights />;
      case "policy":
        return (
          <div className="grid grid-cols-12 gap-6">
            <PolicyEngine />
            <RegionComparison />
          </div>
        );
      case "reports":
        return <ReportsAnalytics />;
      case "psf":
      case "fci":
      case "pds":
      case "fao":
        return <GovSchemePage scheme={activeSection} />;
      default:
        return null;
    }
  };

  const sectionTitles: Record<string, string> = {
    dashboard: "Welcome to the AI-Powered Commodity Price Management System",
    "live-prices": "Real-Time Live Prices",
    "price-forecast": "ARIMA Price Forecast",
    "buffer-stock": "Buffer Stock Management",
    alerts: "Alerts & Notifications",
    scenario: "Scenario Simulation",
    "demand-supply": "Demand-Supply Analysis",
    external: "External Insights",
    policy: "Policy Recommendations",
    reports: "Reports & Analytics",
    psf: "Price Stabilization Fund",
    fci: "Food Corporation of India",
    pds: "Public Distribution System",
    fao: "FAO Global Insights",
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="border-b border-border px-4 md:px-8 py-4 bg-card/40 backdrop-blur-md sticky top-0 z-40">
          <h1 className="text-base md:text-lg font-bold pl-10 lg:pl-0">
            {sectionTitles[activeSection] || "Dashboard"}
          </h1>
        </header>
        {/* Content */}
        <div className="p-4 md:p-6 lg:p-8 max-w-[1400px]">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
