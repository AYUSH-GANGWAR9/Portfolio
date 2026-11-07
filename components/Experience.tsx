"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  Download,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

type Metric = { label: string; value: string };

type TimelineItem = {
  kind: "work" | "edu";
  org: string;
  subtitle: string;
  role: string;
  period: string;
  color: string;
  latest?: boolean;
  summary: string;
  details: string[];
  tech: string[];
  metrics: Metric[];
  cgpa?: number;
};

// Newest first. Education sits between EY and GlobalLogic by date.
const items: TimelineItem[] = [
  {
    kind: "work",
    org: "EY",
    subtitle: "Medical Device Park, Sector 28, YEIDA",
    role: "Full-Stack Developer Intern",
    period: "Jul 2026 - Sep 2026",
    color: "#FFE600",
    latest: true,
    summary:
      "Replaced manual plot-allotment tracking with a full-stack dashboard used across departments.",
    details: [
      "Built the MDP Allotment Management Dashboard, a Flask and MySQL app (7 tables) with CRUD, schema-driven dynamic forms and automatic stage-to-stage progression.",
      "Implemented role-based access control with Werkzeug password hashing, CSRF protection, login lockout, session timeout and a searchable audit log.",
      "Added CSV/Excel bulk import with per-row validation, an interactive SVG park map, and stage-wise PDF/Excel reports.",
      "Automated compliance reminders as scheduled email jobs with run history, delivered through the Brevo API.",
      "Deployed on Render (Gunicorn) with MySQL on Railway; wrote technical reports and setup guides.",
    ],
    tech: ["Flask", "MySQL", "ReportLab", "openpyxl", "Brevo API", "Render", "Railway"],
    metrics: [
      { label: "DB Tables", value: "7" },
      { label: "Access Control", value: "RBAC" },
    ],
  },
  {
    kind: "edu",
    org: "IIIT Vadodara",
    subtitle: "Indian Institute of Information Technology",
    role: "B.Tech, Computer Science & Engineering",
    period: "Graduated May 2026",
    color: "#9D4EDD",
    summary:
      "Graduated with a CGPA of 7.91 / 10, alongside competitive programming and mentoring.",
    details: [
      "3-Star CodeChef (max rating 1721, top 15% of 500K+ users) with 450+ DSA problems solved.",
      "Sports Committee Head for 2 years, coordinating events for 200+ participants at the college tech fest.",
      "Mentored 50+ juniors through GDSC sessions on DSA, development and management skills.",
    ],
    tech: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "OOP",
      "Software Engineering",
    ],
    metrics: [],
    cgpa: 7.91,
  },
  {
    kind: "work",
    org: "CoolG Edu Solutions",
    subtitle: "CoolG Edu Solutions Pvt. Ltd.",
    role: "Software Engineer Intern",
    period: "Jan 2026 - May 2026",
    color: "#FF6B35",
    summary:
      "Gave educators an early signal for at-risk students with an ML pipeline that predicts student performance.",
    details: [
      "Built an ML pipeline predicting student performance from attendance, assignment, quiz, study-hours and engagement data, with preprocessing for missing values, normalization, encoding and outliers, plus engineered features like attendance ratio and performance trends.",
      "Trained and compared Logistic Regression, Random Forest and XGBoost on accuracy, precision, recall and F1; XGBoost performed best at 88% accuracy (Random Forest 84%, Logistic Regression 78%).",
      "Designed a recommendation engine mapping predicted performance to practice, revision or advanced content, and planned the backend API structure to support early intervention.",
    ],
    tech: ["Python", "XGBoost", "Random Forest", "Logistic Regression", "Feature Engineering"],
    metrics: [
      { label: "XGBoost Accuracy", value: "88%" },
      { label: "Models Compared", value: "3" },
    ],
  },
  {
    kind: "work",
    org: "GlobalLogic",
    subtitle: "A Hitachi Group Company | Noida, UP",
    role: "Software Engineering Intern",
    period: "May 2025 - Jul 2025",
    color: "#00D9FF",
    summary:
      "Made a slow, inaccurate document Q&A system faster and more accurate with a RAG pipeline.",
    details: [
      "Built a RAG pipeline with Python, LangChain, FAISS and OpenAI GPT-4, boosting response accuracy by 40% with query latency under 800ms.",
      "Rewrote ingestion with Python asyncio and a Redis caching layer (85% cache hit rate), cutting ingestion time by 35%.",
      "Containerized the app with Docker multi-stage builds (60% smaller images) and set up GitHub Actions CI/CD for automated testing and deployment.",
    ],
    tech: ["Python", "LangChain", "FAISS", "GPT-4", "Redis", "Docker", "GitHub Actions"],
    metrics: [
      { label: "Accuracy", value: "+40%" },
      { label: "Ingestion Time", value: "-35%" },
      { label: "Image Size", value: "-60%" },
    ],
  },
  {
    kind: "work",
    org: "Fast Conversion",
    subtitle: "Marketing Solutions | Remote",
    role: "Web Development Intern",
    period: "Mar 2024 - Jun 2024",
    color: "#6B8E23",
    summary:
      "Rebuilt a frontend with no reusable structure and fixed slow backend APIs.",
    details: [
      "Made 20+ responsive components with React.js, Redux and Tailwind CSS, improving Core Web Vitals (LCP, FID, CLS) by 30% and lifting mobile engagement by 25%.",
      "Designed 15+ RESTful endpoints with Node.js and Express.js; streamlined MongoDB queries with compound indexes and aggregation pipelines.",
      "Profiled and fixed API bottlenecks with query optimization and caching, cutting P95 latency from 480ms to 290ms.",
    ],
    tech: ["React.js", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    metrics: [
      { label: "Web Vitals", value: "+30%" },
      { label: "Mobile Engagement", value: "+25%" },
      { label: "API Latency", value: "-40%" },
    ],
  },
];

/* ---------- Count-up metric ---------- */

function parseMetric(value: string) {
  const m = value.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], num: Number(m[2]), suffix: m[3] };
}

function Counter({ value, color }: { value: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const parsed = parseMetric(value);
  const [shown, setShown] = useState(parsed && !reduce ? 0 : (parsed?.num ?? 0));

  useEffect(() => {
    if (!inView || !parsed || reduce) return;
    const controls = animate(0, parsed.num, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setShown(v),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="text-lg font-bold tabular-nums" style={{ color }}>
      {parsed ? `${parsed.prefix}${Math.round(shown)}${parsed.suffix}` : value}
    </span>
  );
}

/* ---------- CGPA ring (education card) ---------- */

function CgpaRing({ cgpa, color }: { cgpa: number; color: string }) {
  return (
    <div className="relative w-20 h-20 shrink-0" aria-label={`CGPA ${cgpa} out of 10`}>
      <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
        <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
        <motion.circle
          cx="40"
          cy="40"
          r="34"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: cgpa / 10 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-base font-bold text-[#F0F0F0] leading-none">{cgpa}</span>
        <span className="text-[10px] text-[#A0A0A0] mt-0.5">CGPA</span>
      </div>
    </div>
  );
}

/* ---------- One timeline entry ---------- */

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const [open, setOpen] = useState(Boolean(item.latest));
  const nodeRef = useRef<HTMLDivElement>(null);
  // Node lights up once the scroll line reaches roughly this point
  const reached = useInView(nodeRef, { once: true, margin: "0px 0px -45% 0px" });
  const reduce = useReducedMotion();
  const onRight = index % 2 === 1;

  // Cursor spotlight inside the card
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, ${item.color}1f, transparent 70%)`;

  const Icon = item.kind === "edu" ? GraduationCap : Briefcase;

  return (
    <div className="relative">
      {/* Timeline node */}
      <div className="absolute left-4 md:left-1/2 top-7 -translate-x-1/2 z-20">
        <div ref={nodeRef} className="relative">
          {reached && item.latest && !reduce && (
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: item.color }}
              animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <motion.div
            className="relative w-9 h-9 rounded-full flex items-center justify-center border-2 bg-[#0E0E15]"
            animate={{
              borderColor: reached ? item.color : "rgba(255,255,255,0.15)",
              boxShadow: reached ? `0 0 22px ${item.color}66` : "0 0 0 rgba(0,0,0,0)",
              scale: reached ? 1 : 0.8,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Icon size={16} style={{ color: reached ? item.color : "#6b6b78" }} />
          </motion.div>
        </div>
      </div>

      {/* Card */}
      <div className={`pl-14 md:pl-0 md:w-[calc(50%-2.75rem)] ${onRight ? "md:ml-auto" : ""}`}>
        <motion.div
          initial={reduce ? false : { opacity: 0, x: onRight ? 36 : -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            mx.set(e.clientX - r.left);
            my.set(e.clientY - r.top);
          }}
          onMouseLeave={() => {
            mx.set(-200);
            my.set(-200);
          }}
          className="group relative rounded-2xl p-6 md:p-7 overflow-hidden border bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] transition-[border-color,box-shadow] duration-300"
          style={{
            borderColor: reached ? `${item.color}55` : "rgba(255,255,255,0.08)",
            boxShadow: reached ? `0 0 40px ${item.color}14` : "none",
          }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: spotlight }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold" style={{ color: item.color }}>
                    {item.org}
                  </h3>
                  {item.latest && (
                    <span
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full border"
                      style={{ color: item.color, borderColor: `${item.color}66`, backgroundColor: `${item.color}14` }}
                    >
                      Latest
                    </span>
                  )}
                </div>
                <p className="text-[#A0A0A0] text-sm mb-1">{item.subtitle}</p>
                <p className="text-[#F0F0F0] font-medium text-lg leading-snug">{item.role}</p>
              </div>
              {item.cgpa && <CgpaRing cgpa={item.cgpa} color={item.color} />}
            </div>

            {/* Period */}
            <div className="flex items-center gap-2 text-sm text-[#A0A0A0] mt-4 mb-4 bg-[#0E0E15]/60 px-4 py-1.5 rounded-full w-fit">
              <Calendar size={14} />
              {item.period}
            </div>

            <p className="text-[#C8C8D0] text-sm leading-relaxed mb-5">{item.summary}</p>

            {/* Metrics */}
            {item.metrics.length > 0 && (
              <div className="flex flex-wrap gap-x-7 gap-y-3 pb-5 mb-5 border-b border-white/10">
                {item.metrics.map((m) => (
                  <div key={m.label}>
                    <Counter value={m.value} color={item.color} />
                    <p className="text-xs text-[#A0A0A0]">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full text-[#A0A0A0] bg-[#0E0E15]/60 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Expand */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="flex items-center gap-1.5 text-sm font-medium rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 transition-colors"
              style={{ color: item.color, outlineColor: item.color }}
            >
              {open ? "Hide details" : "Show details"}
              <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.ul
                  key="details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 pt-4">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#A0A0A0] text-sm leading-relaxed">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        {d}
                      </li>
                    ))}
                  </div>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const headTop = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9D4EDD]/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Experience <span className="text-[#6B8E23]">&amp; Education</span>
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-lg">
            From campus projects to shipping software for real teams
          </p>
        </div>

        <div ref={trackRef} className="relative max-w-6xl mx-auto">
          {/* Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10" />

          {/* Scroll-driven fill */}
          <motion.div
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 origin-top bg-gradient-to-b from-[#FFE600] via-[#00D9FF] to-[#6B8E23]"
          />

          {/* Glowing head */}
          <motion.div
            aria-hidden
            style={{ top: headTop }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_18px_6px_rgba(0,217,255,0.55)] z-10"
          />

          <div className="space-y-14 pb-2">
            {items.map((item, i) => (
              <TimelineEntry key={item.org} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto text-center rounded-2xl border border-[#6B8E23]/30 bg-gradient-to-br from-[#1a1a2e] to-[#0E0E15] p-8 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">Prefer a one-pager?</h3>
          <p className="text-[#A0A0A0] mb-7">
            Everything above, plus projects and skills, in a single PDF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Ayush_Gangwar_Resume.pdf"
              download="Ayush_Gangwar_Resume.pdf"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#6B8E23] to-[#8FBF3F] shadow-[0_0_30px_rgba(107,142,35,0.35)] hover:shadow-[0_0_45px_rgba(107,142,35,0.55)] transition-shadow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8FBF3F]"
            >
              <motion.span
                aria-hidden
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-150%" }}
                animate={{ x: "450%" }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
              />
              <Download size={18} className="relative" />
              <span className="relative">Download resume</span>
            </a>
            <a
              href="/Ayush_Gangwar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[#F0F0F0] border-2 border-[#6B8E23]/50 hover:border-[#6B8E23] hover:bg-[#6B8E23]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6B8E23]"
            >
              <ExternalLink size={18} />
              View in browser
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
