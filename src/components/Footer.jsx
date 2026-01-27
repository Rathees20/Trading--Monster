export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Trading Monster AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-white transition" href="#">
              Privacy
            </a>
            <a className="hover:text-white transition" href="#">
              Terms
            </a>
            <a className="hover:text-white transition" href="#">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

