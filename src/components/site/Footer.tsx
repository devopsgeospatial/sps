import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-light bg-white px-6 py-10">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <Logo className="text-[1.15rem] text-ink" />
        <div className="text-center text-[0.8rem] text-gray sm:text-right">
          © {year} {site.legalName} · {site.location}
        </div>
      </div>
    </footer>
  );
}
