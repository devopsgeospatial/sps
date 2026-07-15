// ────────────────────────────────────────────────────────────────
// GeoAI dashboard — typed mock data layer.
// Realistic Kigali/Rwanda figures. Deterministic so SSR and client
// hydration match. Swap these arrays for a real API later; the UI
// only ever reads the exported types below.
// ────────────────────────────────────────────────────────────────

export type Trend = "up" | "down";

export interface Kpi {
  id: string;
  label: string;
  value: string;
  unit?: string;
  delta: string;
  trend: Trend;
  /** true when an upward delta is *bad* (e.g. flagged construction) */
  invert?: boolean;
  spark: number[];
}

export type RiskLevel = "low" | "moderate" | "elevated" | "high";

export interface District {
  id: string;
  name: string;
  /** stylised SVG polygon on the 0 0 800 520 canvas */
  path: string;
  labelAt: [number, number];
  buildings: number;
  newThisMonth: number;
  flagged: number;
  compliance: number; // %
  risk: RiskLevel;
}

export type AlertKind = "construction" | "change" | "flood" | "landslide";
export type Severity = "info" | "warning" | "critical";

export interface Alert {
  id: string;
  kind: AlertKind;
  severity: Severity;
  title: string;
  where: string;
  time: string;
  at: [number, number]; // position on the map canvas
}

export interface BuildingPoint {
  x: number;
  y: number;
  status: "verified" | "new" | "flagged";
}

// ── KPIs ──────────────────────────────────────────────────────────
export const kpis: Kpi[] = [
  {
    id: "buildings",
    label: "Buildings detected",
    value: "486,204",
    delta: "+2,914",
    trend: "up",
    spark: [420, 435, 447, 455, 462, 470, 479, 486],
  },
  {
    id: "change",
    label: "Change alerts (30d)",
    value: "1,342",
    delta: "+18.4%",
    trend: "up",
    invert: true,
    spark: [980, 1010, 1075, 1120, 1180, 1240, 1300, 1342],
  },
  {
    id: "compliance",
    label: "Permit compliance",
    value: "87.3",
    unit: "%",
    delta: "+1.9pts",
    trend: "up",
    spark: [82, 83, 84, 84, 85, 86, 86, 87],
  },
  {
    id: "risk",
    label: "Disaster risk index",
    value: "34",
    unit: "/100",
    delta: "-3.0",
    trend: "down",
    spark: [41, 40, 39, 38, 37, 36, 35, 34],
  },
];

// ── Districts (stylised Kigali) ───────────────────────────────────
export const districts: District[] = [
  {
    id: "gasabo",
    name: "Gasabo",
    path: "M 430 40 L 690 70 L 760 210 L 700 320 L 545 300 L 470 210 L 420 120 Z",
    labelAt: [575, 165],
    buildings: 214980,
    newThisMonth: 1486,
    flagged: 612,
    compliance: 85.1,
    risk: "elevated",
  },
  {
    id: "nyarugenge",
    name: "Nyarugenge",
    path: "M 120 150 L 420 120 L 470 210 L 420 330 L 300 360 L 150 300 Z",
    labelAt: [280, 245],
    buildings: 138420,
    newThisMonth: 742,
    flagged: 388,
    compliance: 90.4,
    risk: "moderate",
  },
  {
    id: "kicukiro",
    name: "Kicukiro",
    path: "M 300 360 L 420 330 L 545 300 L 700 320 L 640 470 L 430 500 L 320 440 Z",
    labelAt: [480, 410],
    buildings: 132804,
    newThisMonth: 686,
    flagged: 342,
    compliance: 88.2,
    risk: "high",
  },
];

// ── Live alerts feed ──────────────────────────────────────────────
export const alerts: Alert[] = [
  {
    id: "a1",
    kind: "construction",
    severity: "critical",
    title: "Unpermitted G+4 structure detected",
    where: "Kimironko · Gasabo",
    time: "6 min ago",
    at: [612, 150],
  },
  {
    id: "a2",
    kind: "landslide",
    severity: "warning",
    title: "Slope instability after rainfall",
    where: "Gatenga · Kicukiro",
    time: "41 min ago",
    at: [470, 430],
  },
  {
    id: "a3",
    kind: "change",
    severity: "info",
    title: "Rapid footprint expansion (+18%)",
    where: "Kabuga · Gasabo",
    time: "1 hr ago",
    at: [700, 200],
  },
  {
    id: "a4",
    kind: "flood",
    severity: "warning",
    title: "Wetland encroachment flagged",
    where: "Nyabugogo · Nyarugenge",
    time: "2 hr ago",
    at: [240, 300],
  },
  {
    id: "a5",
    kind: "construction",
    severity: "warning",
    title: "Setback violation, plot RW-2231",
    where: "Nyamirambo · Nyarugenge",
    time: "3 hr ago",
    at: [200, 260],
  },
  {
    id: "a6",
    kind: "change",
    severity: "info",
    title: "New road-side development cluster",
    where: "Masaka · Kicukiro",
    time: "5 hr ago",
    at: [560, 440],
  },
];

// ── Charts ────────────────────────────────────────────────────────
export interface GrowthPoint {
  month: string;
  detected: number; // new buildings detected (000s)
  flagged: number; // flagged for review (000s)
}

export const urbanGrowth: GrowthPoint[] = [
  { month: "Jan", detected: 2.1, flagged: 0.6 },
  { month: "Feb", detected: 2.4, flagged: 0.7 },
  { month: "Mar", detected: 2.2, flagged: 0.8 },
  { month: "Apr", detected: 2.9, flagged: 0.9 },
  { month: "May", detected: 3.3, flagged: 1.0 },
  { month: "Jun", detected: 3.0, flagged: 1.1 },
  { month: "Jul", detected: 3.6, flagged: 1.3 },
];

export interface RiskSlice {
  name: string;
  value: number;
  color: string;
}

export const riskExposure: RiskSlice[] = [
  { name: "Low", value: 52, color: "#22c55e" },
  { name: "Moderate", value: 28, color: "#00d4ff" },
  { name: "Elevated", value: 14, color: "#f5a623" },
  { name: "High", value: 6, color: "#ef4444" },
];

// ── Deterministic building scatter for the map ────────────────────
// Seeded PRNG (mulberry32) → stable across server/client renders.
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clusters: Array<{ cx: number; cy: number; r: number; n: number }> = [
  { cx: 590, cy: 160, r: 95, n: 46 }, // Gasabo core
  { cx: 700, cy: 210, r: 55, n: 22 }, // Kabuga
  { cx: 280, cy: 240, r: 85, n: 40 }, // Nyarugenge CBD
  { cx: 210, cy: 290, r: 45, n: 16 }, // Nyamirambo
  { cx: 480, cy: 400, r: 90, n: 38 }, // Kicukiro
  { cx: 560, cy: 440, r: 50, n: 18 }, // Masaka
];

function buildScatter(): BuildingPoint[] {
  const rand = mulberry32(20260715);
  const pts: BuildingPoint[] = [];
  for (const c of clusters) {
    for (let i = 0; i < c.n; i++) {
      const ang = rand() * Math.PI * 2;
      const rad = Math.sqrt(rand()) * c.r;
      const roll = rand();
      pts.push({
        x: +(c.cx + Math.cos(ang) * rad).toFixed(1),
        y: +(c.cy + Math.sin(ang) * rad * 0.8).toFixed(1),
        status: roll > 0.93 ? "flagged" : roll > 0.8 ? "new" : "verified",
      });
    }
  }
  return pts;
}

export const buildingPoints: BuildingPoint[] = buildScatter();

// ── Meta ──────────────────────────────────────────────────────────
export const dashboardMeta = {
  region: "Kigali, Rwanda",
  coverage: "3 districts · 35 sectors",
  lastSync: "live",
  model: "SPS-Detect v4 · Sentinel-2 + PlanetScope",
};
