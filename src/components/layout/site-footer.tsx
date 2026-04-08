import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-cyan-900/10 bg-(--ag-surface) px-4 py-8">
      <div className="mx-auto max-w-6xl text-center text-sm text-slate-600">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
