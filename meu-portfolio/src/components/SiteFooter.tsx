export function SiteFooter() {
  return (
    <footer className="border-t border-gray-800 py-6">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ricardo Matos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
