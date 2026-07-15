import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { SpatialMap } from "@/components/dashboard/SpatialMap";
import { AlertsFeed } from "@/components/dashboard/AlertsFeed";
import { ZoneAgentPanel } from "@/components/dashboard/ZoneAgentPanel";
import { UrbanGrowthChart, RiskExposureChart } from "@/components/dashboard/Charts";
import { kpis } from "@/lib/dashboard-data";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-abyss font-sans text-frost">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="flex-1 space-y-5 p-4 sm:p-5">
          {/* KPI row */}
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {kpis.map((k) => (
              <KpiCard key={k.id} kpi={k} />
            ))}
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
            <div className="space-y-5 xl:col-span-2">
              <SpatialMap />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <UrbanGrowthChart />
                <RiskExposureChart />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="h-[440px]">
                <AlertsFeed />
              </div>
              <ZoneAgentPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
