import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  ArrowUp,
  Send,
  Sparkles,
  Code2,
  Brain,
  Database,
  BarChart3,
  Wrench,
  GraduationCap,
  Briefcase,
  Award,
  ExternalLink,
  FileText,
  Bot,
  User,
} from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import {
  PROFILE,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
} from "./data";

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  "Programming Languages": Code2,
  "Machine Learning & Generative AI": Brain,
  "Data Analysis & Visualization": BarChart3,
  Databases: Database,
  "Tools & Technologies": Wrench,
};

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12 sm:mb-16 animate-fade-up">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs font-mono text-muted-foreground mb-4">
        <span className="w-1.5 h-1.5 rounded-full gradient-primary" />
        {kicker}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 gradient-hero opacity-90" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full gradient-primary opacity-20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary opacity-20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="gradient-text">Harshith Reddy</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-foreground/80 font-display">
            {PROFILE.title}
          </p>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {PROFILE.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl gradient-primary opacity-30 blur-2xl animate-glow" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-primary/40 shadow-glow">
              <img src={avatar} alt={PROFILE.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass border border-border rounded-xl px-4 py-3 shadow-card">
              <p className="text-xs font-mono text-muted-foreground">Currently</p>
              <p className="text-sm font-medium">Building AI/ML systems</p>
            </div>
            <div className="absolute -top-4 -right-4 glass border border-border rounded-xl px-4 py-3 shadow-card">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const stats = [
    { value: "4+", label: "AI/ML Projects" },
    { value: "98%", label: "Best Model Accuracy" },
    { value: "15+", label: "Technologies" },
    { value: "4+", label: "Certifications" },
  ];
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="01 — About" title="About Me" />
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85 animate-fade-up">
            <p>
              I'm a <span className="text-primary font-semibold">Computer Science graduate specializing in
              Artificial Intelligence & Machine Learning</span> from ACE Engineering College, with a strong
              foundation in Python, deep learning, generative AI, and data analytics.
            </p>
            <p>
              My work spans <span className="text-primary font-semibold">cloud infrastructure, cybersecurity,
              computer vision, and healthcare</span> — from an end-to-end AI-powered Infrastructure-as-Code
              drift detection platform, to stacked deep learning models for IoT botnet detection,
              YOLOv8-based crowd monitoring on CCTV networks, and CNN-based medical imaging classifiers.
            </p>
            <p>
              I love turning messy data into clean insights and intelligent products. I'm constantly learning
              — from new model architectures to scalable data pipelines — and I'm looking for roles where I
              can ship AI/ML systems that matter, whether as an{" "}
              <span className="text-primary font-semibold">AI/ML Engineer, Data Scientist, or Python Developer</span>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-up">
            {stats.map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-card border border-border hover-lift shadow-card">
                <p className="text-3xl sm:text-4xl font-bold gradient-text font-display">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="02 — Skills"
          title="Technical Skills"
          subtitle="A working toolkit built across AI, ML, data, and software engineering."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, i) => {
            const Icon = CATEGORY_ICONS[group.category] ?? Code2;
            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-card border border-border hover-lift shadow-card animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => {
                    const SkillIcon = s.icon;
                    return (
                      <span
                        key={s.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-muted border border-border text-foreground/80 hover:border-primary hover:text-primary transition-colors"
                      >
                        <SkillIcon className="w-3.5 h-3.5 text-primary" aria-hidden />
                        {s.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="03 — Projects"
          title="Featured Projects"
          subtitle="Selected AI, ML, and data science projects across cybersecurity, vision, and healthcare."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`group relative p-6 sm:p-7 rounded-2xl bg-card border border-border hover-lift shadow-card animate-fade-up ${
                p.highlight ? "md:col-span-2 ring-1 ring-primary/30" : ""
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {p.highlight && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full gradient-primary text-primary-foreground font-mono">
                  <Sparkles className="w-3 h-3" /> Featured
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.overview}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-foreground/80">
                    <span className="text-primary mt-1">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <ExternalLink className="w-4 h-4" /> Live Demo (coming soon)
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="04 — Experience" title="Experience & Activities" />
        <div className="relative">
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <div key={e.role} className="relative pl-12 sm:pl-16 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="absolute left-0 top-1 w-9 sm:w-11 h-9 sm:h-11 rounded-full gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover-lift">
                  <div className="flex flex-wrap justify-between gap-2 items-start">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">{e.role}</h3>
                      <p className="text-primary font-medium">{e.org}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground font-mono">
                      <p>{e.duration}</p>
                      <p>{e.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="relative pl-12 sm:pl-16 animate-fade-up">
              <div className="absolute left-0 top-1 w-9 sm:w-11 h-9 sm:h-11 rounded-full gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                <Award className="w-4 h-4" />
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover-lift">
                <h3 className="text-lg sm:text-xl font-bold">Certifications & Recognition</h3>
                <p className="text-primary font-medium">Continuous Learning</p>
                <ul className="mt-4 space-y-2">
                  {CERTIFICATIONS.map((c) => (
                    <li key={c} className="flex gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1">▸</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="05 — Education" title="Education" />
        <div className="grid gap-5">
          {EDUCATION.map((e, i) => (
            <div
              key={e.degree}
              className="p-6 rounded-2xl bg-card border border-border shadow-card hover-lift flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{e.degree}</h3>
                <p className="text-primary">{e.school}</p>
              </div>
              <div className="text-sm text-muted-foreground font-mono sm:text-right">
                <p>{e.duration}</p>
                <p>{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SUGGESTED = [
  "Tell me about Harshith.",
  "Explain the Botnet Detection project.",
  "What technologies does Harshith know?",
  "What are Harshith's AI/ML skills?",
  "Show Harshith's projects.",
];

type ChatTurn = { role: "user" | "assistant"; content: string };

export function AssistantSection() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatTurn[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Harshith's AI assistant. Ask me anything about his projects, skills, or experience.",
    },
  ]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setMessages((m) => [...m, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, message: trimmed }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        sessionId?: string;
        reply?: string;
        message?: string;
      };
      if (!res.ok) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content: data.message ?? "Sorry, something went wrong. Please try again.",
          },
        ]);
        return;
      }
      if (data.sessionId) setSessionId(data.sessionId);
      setMessages((m) => [...m, { role: "assistant", content: data.reply ?? "" }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="assistant" className="py-20 sm:py-28 bg-muted/20 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-primary opacity-10 blur-3xl" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          kicker="06 — AI Assistant"
          title="AI Portfolio Assistant"
          subtitle="Ask my AI Assistant about my projects, skills, education, experience, and technical expertise."
        />

        <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden animate-fade-up">
          <div className="px-5 py-3 border-b border-border flex items-center gap-3 bg-muted/30">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground">
              <Bot className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Harshith's AI Assistant</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Online
              </p>
            </div>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          <div
            ref={scrollRef}
            className="p-5 space-y-4 min-h-[320px] max-h-[480px] overflow-y-auto"
          >
            {messages.map((m, i) =>
              m.role === "assistant" ? (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="max-w-md px-4 py-3 rounded-2xl rounded-tl-sm bg-muted border border-border">
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.content}</p>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex gap-3 justify-end">
                  <div className="max-w-md px-4 py-3 rounded-2xl rounded-tr-sm gradient-primary text-primary-foreground">
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.content}</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                </div>
              ),
            )}
            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-muted border border-border">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:120ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:240ms]" />
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="px-5 py-3 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Suggested prompts</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  disabled={loading}
                  className="px-3 py-1.5 rounded-full text-xs border border-border bg-muted hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-border flex gap-2 bg-muted/20"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Harshith…"
              disabled={loading}
              className="flex-1 px-4 py-2.5 rounded-lg bg-input border border-border text-sm focus:outline-none focus:border-primary disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function ResumeSection() {
  const highlights = [
    "AI/ML Engineer with deep learning expertise (CNN, RNN, LSTM, ANN)",
    "Hands-on with Python, SQL, TensorFlow, Keras, Scikit-learn",
    "Built ML systems in cybersecurity, computer vision, healthcare",
    "Data analytics with Pandas, NumPy, Power BI dashboards",
    "Certified by IIT Guwahati, CISCO, Cambridge",
  ];
  return (
    <section id="resume" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker="07 — Resume" title="My Resume" />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-stretch">
          <div className="p-7 rounded-2xl bg-card border border-border shadow-card animate-fade-up">
            <h3 className="text-xl font-bold mb-2">Professional Summary</h3>
            <p className="text-muted-foreground mb-5">
              AI/ML and Data Science engineer skilled in Python, deep learning, and data analytics.
              Experienced building real-world solutions in cybersecurity, computer vision, and healthcare.
            </p>
            <h4 className="font-semibold mb-3">Key Highlights</h4>
            <ul className="space-y-2 mb-6">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-1">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" /> Download Resume (PDF)
            </a>
          </div>

          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noreferrer"
            className="group p-7 rounded-2xl bg-card border border-border shadow-card hover-lift animate-fade-up flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">HarshithReddy_Resume.pdf</p>
                <p className="text-xs text-muted-foreground">Click to preview · 2 pages</p>
              </div>
            </div>
            <div className="flex-1 rounded-xl border border-border bg-muted/40 p-6 flex flex-col gap-3 font-mono text-xs text-muted-foreground overflow-hidden">
              <p className="text-foreground font-bold text-sm">HARSHITH REDDY TADURI</p>
              <p>AI/ML & Data Science Engineer</p>
              <div className="h-px bg-border" />
              <p className="text-foreground font-semibold">CAREER SUMMARY</p>
              <p className="line-clamp-3">
                AI/ML and Data Science Engineer with hands-on experience in machine learning, deep learning, and data analysis…
              </p>
              <p className="text-foreground font-semibold mt-2">SKILLS</p>
              <p className="line-clamp-2">Python, SQL, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, Power BI…</p>
              <p className="text-foreground font-semibold mt-2">PROJECTS</p>
              <p className="line-clamp-2">Botnet Detection · Crowd Management · Neurofibroma Classification</p>
            </div>
            <p className="mt-4 text-sm text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Open full resume <ArrowRight className="w-4 h-4" />
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="08 — Contact"
          title="Let's Build Something"
          subtitle="Open to internships, full-time AI/ML, Data, and Software Engineering roles."
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4 animate-fade-up">
            {[
              { Icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { Icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
              { Icon: MapPin, label: "Location", value: PROFILE.location },
              { Icon: Linkedin, label: "LinkedIn", value: "harshithreddytaduri", href: PROFILE.linkedin },
              { Icon: Github, label: "GitHub", value: "Harshith-Reddy01", href: PROFILE.github },
            ].map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover-lift shadow-card">
                  <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-mono">{label}</p>
                    <p className="font-medium truncate">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
              (e.target as HTMLFormElement).reset();
            }}
            className="p-6 sm:p-7 rounded-2xl bg-card border border-border shadow-card space-y-4 animate-fade-up"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" required className="mt-1.5 w-full px-4 py-2.5 rounded-lg bg-input border border-border focus:outline-none focus:border-primary" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" type="email" required className="mt-1.5 w-full px-4 py-2.5 rounded-lg bg-input border border-border focus:outline-none focus:border-primary" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" required rows={5} className="mt-1.5 w-full px-4 py-2.5 rounded-lg bg-input border border-border focus:outline-none focus:border-primary resize-none" placeholder="Tell me about the opportunity…" />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
            >
              {sent ? "Message sent ✓" : (<>Send Message <Send className="w-4 h-4" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Harshith Reddy Taduri. Built with React, TanStack & Tailwind.
        </p>
        <div className="flex items-center gap-3">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors" aria-label="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full gradient-primary text-primary-foreground shadow-glow hover:scale-110 transition-transform animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
