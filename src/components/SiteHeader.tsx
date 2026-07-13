import { Link } from "@tanstack/react-router";
import { AlphaLogo, KeevoLogo } from "./Brand";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="sticky top-0 z-30 border-b border-emerald-200/70 bg-white/90 shadow-sm shadow-emerald-950/5 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div
        className={`mx-auto flex items-center justify-between gap-4 px-4 ${compact ? "h-14" : "h-16"} max-w-7xl`}
      >
        <Link to="/" className="flex items-center gap-3">
          <span className="rounded-xl bg-slate-950 px-3 py-2 shadow-sm">
            <AlphaLogo className="h-6 w-auto" />
          </span>
          <span className="hidden sm:block h-6 w-px bg-border" />
          <span className="hidden sm:block text-sm font-semibold text-emerald-800">
            Capacitação
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-xs font-medium text-muted-foreground">por</span>
          <span className="rounded-xl bg-slate-950 px-3 py-2 shadow-sm">
            <KeevoLogo className="h-5 w-auto" />
          </span>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-50/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Keevo. Todos os direitos reservados.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-slate-950 px-2 py-1">
            <AlphaLogo className="h-4 w-auto" />
          </span>
          <span className="text-xs text-muted-foreground">×</span>
          <span className="rounded-lg bg-slate-950 px-2 py-1">
            <KeevoLogo className="h-4 w-auto" />
          </span>
        </div>
      </div>
    </footer>
  );
}
