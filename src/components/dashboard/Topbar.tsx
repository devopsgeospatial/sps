import { Search, Calendar, Bell, ChevronDown } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-hairline bg-abyss/80 px-5 backdrop-blur-md">
      <div>
        <h1 className="text-[0.98rem] font-semibold text-white">Spatial intelligence overview</h1>
        <p className="hidden text-[0.68rem] text-mute sm:block">
          GeoAI decision dashboard · Kigali metropolitan area
        </p>
      </div>

      <div className="ml-auto flex items-center gap-2.5">
        <div className="hidden items-center gap-2 rounded-lg border border-hairline bg-white/[0.02] px-3 py-1.5 text-[0.76rem] text-mute md:flex">
          <Search className="size-3.5" />
          <span>Search location…</span>
        </div>

        <button className="hidden items-center gap-2 rounded-lg border border-hairline bg-white/[0.02] px-3 py-1.5 text-[0.76rem] text-frost transition hover:border-accent/30 sm:flex">
          <Calendar className="size-3.5 text-mute" />
          Last 30 days
          <ChevronDown className="size-3 text-mute" />
        </button>

        <button className="relative flex size-9 items-center justify-center rounded-lg border border-hairline bg-white/[0.02] text-mute transition hover:text-frost">
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-danger" />
        </button>

        <div className="flex items-center gap-2 rounded-lg border border-hairline bg-white/[0.02] py-1 pl-1 pr-2.5">
          <span className="flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-[#635bff] to-[#0073e6] text-[0.7rem] font-bold text-white">
            SP
          </span>
          <span className="hidden text-[0.76rem] font-medium text-frost sm:block">Analyst</span>
        </div>
      </div>
    </header>
  );
}
