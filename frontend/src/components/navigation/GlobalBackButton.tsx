"use client";

import { usePathname, useRouter } from "next/navigation";

export default function GlobalBackButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") {
    return null;
  }

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <div className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={handleBack}
          className="group inline-flex cursor-pointer items-center gap-3 border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-black text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400"
          aria-label="Go back to previous page"
        >
          <span className="text-lg transition-transform group-hover:-translate-x-1">
            ←
          </span>

          <span>Back</span>
        </button>
      </div>
    </div>
  );
}