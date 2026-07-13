import { useState } from "react";
import { AdminEditor } from "./AdminEditor";
import { AdminLoginDialog, useAdmin } from "./AdminBar";

export function FloatingAdminButton({ onPublished }: { onPublished?: () => void }) {
  const admin = useAdmin();
  const [loginOpen, setLoginOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);

  return (
    <>
      <div className="fixed right-4 top-4 z-50 flex flex-col items-end gap-2">
        <button
          onClick={() => (admin.isAdmin ? setEditorOpen(true) : setLoginOpen(true))}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-wide shadow-xl backdrop-blur transition hover:-translate-y-0.5 ${
            admin.isAdmin
              ? "border-primary/30 bg-primary text-primary-foreground shadow-emerald-950/20"
              : "border-emerald-200/80 bg-white/95 text-primary shadow-emerald-950/10 hover:bg-emerald-50"
          }`}
          aria-label="Abrir modo administrativo"
        >
          <span className="grid h-2 w-2 rounded-full bg-current" />
          {admin.isAdmin ? "Modo admin" : "Admin"}
        </button>
        {admin.isAdmin && (
          <button
            onClick={() => admin.logout()}
            className="rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-lg backdrop-blur hover:bg-muted"
          >
            Sair do admin
          </button>
        )}
      </div>
      <AdminLoginDialog
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoggedIn={() => setEditorOpen(true)}
      />
      {admin.token && (
        <AdminEditor
          token={admin.token}
          open={editorOpen}
          onClose={() => setEditorOpen(false)}
          onPublished={() => onPublished?.()}
        />
      )}
    </>
  );
}
