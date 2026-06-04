import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "assistant", label: "AI Assistant" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", !dark);
    root.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground text-sm">
            HR
          </span>
          <span className="gradient-text">Harshith Reddy</span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`px-3 py-2 text-sm rounded-md transition-colors relative ${
                active === n.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              {active === n.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 gradient-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`text-left px-3 py-2 rounded-md text-sm ${
                  active === n.id ? "bg-muted text-foreground" : "text-muted-foreground"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
