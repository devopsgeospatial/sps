import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({
  size = 28,
  className = "",
  idSuffix = "nav",
}: {
  size?: number;
  className?: string;
  idSuffix?: string;
}) {
  const gid = `sps-logo-${idSuffix}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#635bff" />
          <stop offset="100%" stopColor="#0073e6" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="68" height="68" rx="16" fill={`url(#${gid})`} />
      <path
        d="M24 22C24 22 28 17 36 17C44 17 49 21 49 26C49 31 44 34 36 36C28 38 23 41 23 46C23 51 28 55 36 55C44 55 48 50 48 50"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  wordmark = true,
  href = "/",
}: {
  className?: string;
  wordmark?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-extrabold tracking-[-0.04em] ${className}`}
      aria-label={`${site.name} home`}
    >
      <span className="inline-flex overflow-hidden rounded-[7px]">
        <LogoMark />
      </span>
      {wordmark && <span className="whitespace-nowrap">{site.shortName}</span>}
    </Link>
  );
}
