import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { projects } from "./projectData";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";

/* ─── Project Card ─── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isInView } = useInView(0.1);
  const { theme } = useTheme();

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block"
      >
        {/* Image area */}
        <div
          className="aspect-[3/2] rounded-lg overflow-hidden mb-4 relative"
          style={{ backgroundColor: theme.bgSubtle }}
        >
          <ImageWithFallback
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              backgroundColor: theme.overlayLight,
            }}
          />
        </div>
        {/* Text */}
        <div className="flex items-start justify-between">
          <div>
            <h3
              className="transition-colors duration-300"
              style={{
                fontFamily: "Averia Serif Libre, serif",
                fontSize: "1.125rem",
                fontWeight: 400,
                lineHeight: 1.3,
                color: theme.text,
              }}
            >
              {project.title}
            </h3>
            <p
              className="mt-1"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                color: theme.textMuted,
              }}
            >
              {project.category} · {project.year}
            </p>
          </div>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-all duration-300 mt-1 flex-shrink-0"
            style={{ color: theme.textFaint }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Home Page ─── */
export function HomePage() {
  const { theme } = useTheme();

  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-[90vh] flex items-center pt-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full py-20 md:py-0">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p
                  className="mb-4 tracking-[0.12em] uppercase"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6875rem",
                    color: theme.textFaint,
                  }}
                >
                  Product Designer
                </p>
                <h1
                  className="tracking-[-0.02em]"
                  style={{
                    fontFamily: "Averia Serif Libre, serif",
                    fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                    lineHeight: 1.15,
                    fontWeight: 400,
                    color: theme.text,
                  }}
                >
                  Product Designer crafting clarity in complex{" "}
                  <span style={{ color: ["stark", "noir", "midnight"].includes(theme.id) ? theme.accent : theme.textFaint }}>systems</span>.
                </h1>
                {/* Accent line for themes with strong accent */}
                {["stark", "noir", "midnight"].includes(theme.id) && (
                  <div className="mt-4 w-12 h-[3px] rounded-full" style={{ backgroundColor: theme.accent }} />
                )}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-md"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: theme.textMuted,
                }}
              >
                Blending UX, research and AI-driven workflows to ship clarity at scale.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-5 pt-4"
              >
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("work")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all hover:gap-3"
                  style={{
                    backgroundColor: theme.text,
                    color: theme.bg,
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  View Work
                  <ArrowRight size={16} />
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors"
                  style={{
                    border: `1px solid ${theme.border}`,
                    color: theme.text,
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.bgSubtle;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  About Me
                </Link>
              </motion.div>
            </div>

            {/* Right — Showreel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block w-full"
            >

            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section id="work" className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="tracking-[0.12em] uppercase mb-10"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.6875rem",
              color: theme.textFaint,
            }}
          >
            Selected Work
          </motion.p>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}