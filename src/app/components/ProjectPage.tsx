import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "./hooks/useInView";
import { getProject, getNextProject } from "./projectData";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";
import {
  VeteransLobbyScreen,
  VeteransHubScreen,
  VeteransEligibilityScreen,
  JourneyMapDiagram,
  StakeholderMap,
  HeuristicHeatmap,
  BeforeAfterComparison,
  BankOnboardingScreen,
  BankDesktopScreen,
} from "./MockScreens";

/* ─── Section with fade-in ─── */
function FadeSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isInView } = useInView(0.1);
  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Detailed case study: Veterans ─── */
function VeteransCaseStudy() {
  const { theme } = useTheme();
  return (
    <div className="space-y-20">
      {/* Research */}
      <FadeSection>
        <p
          className="tracking-[0.1em] uppercase mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", color: theme.textFaint }}
        >
          Research
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <JourneyMapDiagram />
          <StakeholderMap />
        </div>
      </FadeSection>

      <FadeSection>
        <div className="grid md:grid-cols-3 gap-6">
          <HeuristicHeatmap />
          <div
            className="rounded-lg p-5"
            style={{ backgroundColor: theme.bgCard, border: `1px solid ${theme.border}` }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: theme.text,
              }}
            >
              User Quotes
            </span>
            <div className="mt-4 space-y-3">
              {[
                "I don't know where to start — every page leads somewhere else.",
                "I submitted my form but have no idea what happens next.",
                "The system treats me like I already know everything.",
              ].map((q, i) => (
                <div
                  key={i}
                  className="rounded p-3"
                  style={{
                    backgroundColor: theme.bgSubtle,
                    borderLeft: `2px solid ${theme.border}`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.75rem",
                      color: theme.textMuted,
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    "{q}"
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-lg p-5"
            style={{ backgroundColor: theme.bgCard, border: `1px solid ${theme.border}` }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: theme.text,
              }}
            >
              Personas
            </span>
            <div className="mt-4 space-y-4">
              {[
                { name: "David, 35", status: "Recently discharged, navigating benefits" },
                { name: "Sarah, 52", status: "Long-term veteran, complex medical case" },
                { name: "Yael, 28", status: "Family member seeking caregiver support" },
              ].map((p) => (
                <div key={p.name} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0"
                    style={{ backgroundColor: theme.bgElevated }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: theme.text,
                      }}
                    >
                      {p.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.6875rem",
                        color: theme.textMuted,
                      }}
                    >
                      {p.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeSection>

      {/* Problem */}
      <FadeSection>
        <p
          className="tracking-[0.1em] uppercase mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", color: theme.textFaint }}
        >
          Before & After
        </p>
        <BeforeAfterComparison
          beforeLabel="Confusing hierarchy, scattered information, no clear path"
          afterLabel="Scenario-based classification, clear visual hierarchy"
        />
      </FadeSection>

      {/* Solution Screens */}
      <FadeSection>
        <p
          className="tracking-[0.1em] uppercase mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", color: theme.textFaint }}
        >
          Solution
        </p>

        <div className="space-y-10">
          <div>
            <p
              className="mb-3"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: theme.textMuted }}
            >
              Topic Lobby — Desktop
            </p>
            <VeteransLobbyScreen variant="desktop" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p
                className="mb-3"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: theme.textMuted }}
              >
                Topic Lobby — Mobile
              </p>
              <div className="max-w-[260px] mx-auto">
                <div className="rounded-[20px] border-[3px] border-[#1a1a1a] overflow-hidden">
                  <VeteransLobbyScreen variant="mobile" />
                </div>
              </div>
            </div>
            <div>
              <p
                className="mb-3"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: theme.textMuted }}
              >
                Personal Hub
              </p>
              <VeteransHubScreen />
            </div>
          </div>

          <div>
            <p
              className="mb-3"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: theme.textMuted }}
            >
              Eligibility & Recommendations
            </p>
            <div className="max-w-2xl">
              <VeteransEligibilityScreen />
            </div>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}

/* ─── Detailed case study: Bank ─── */
function BankCaseStudy() {
  const { theme } = useTheme();
  return (
    <div className="space-y-20">
      {/* Research */}
      <FadeSection>
        <p
          className="tracking-[0.1em] uppercase mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", color: theme.textFaint }}
        >
          Research
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div
            className="rounded-lg p-5"
            style={{ backgroundColor: theme.bgCard, border: `1px solid ${theme.border}` }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: theme.text,
              }}
            >
              Branch Flow
            </span>
            <div className="mt-4 space-y-0">
              {[
                "Customer arrives at branch",
                "Takes a number & waits",
                "Clerk verifies ID manually",
                "Clerk fills paper forms",
                "Customer signs documents",
                "Account created (30+ min)",
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: theme.bgSubtle,
                        border: `1px solid ${theme.border}`,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.5rem",
                          color: theme.textMuted,
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    {i < 5 && (
                      <div className="w-px h-3" style={{ backgroundColor: theme.border }} />
                    )}
                  </div>
                  <p
                    className="pb-1.5"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.75rem",
                      color: theme.textMuted,
                      lineHeight: 1.6,
                    }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-5"
            style={{ backgroundColor: theme.bgCard, border: `1px solid ${theme.border}` }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: theme.text,
              }}
            >
              Friction Points
            </span>
            <div className="mt-4 space-y-3">
              {[
                { area: "ID Verification", level: 85, color: "#e74c3c" },
                { area: "Terms Reading", level: 70, color: "#f39c12" },
                { area: "Address Input", level: 45, color: "#f39c12" },
                { area: "Account Type", level: 55, color: "#f39c12" },
              ].map((f) => (
                <div key={f.area} className="space-y-1">
                  <div className="flex justify-between">
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.6875rem",
                        color: theme.textMuted,
                      }}
                    >
                      {f.area}
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.6875rem",
                        color: f.color,
                      }}
                    >
                      {f.level}%
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ backgroundColor: theme.bgElevated }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${f.level}%`,
                        backgroundColor: f.color + "25",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-lg p-5"
            style={{ backgroundColor: theme.bgCard, border: `1px solid ${theme.border}` }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: theme.text,
              }}
            >
              User Questions
            </span>
            <div className="mt-4 space-y-2">
              {[
                "How long will this take?",
                "What documents do I need?",
                "Can I save and come back?",
                "Is my information secure?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="rounded p-2.5 flex items-center gap-2"
                  style={{ backgroundColor: theme.bgSubtle }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.625rem",
                      color: theme.textFaint,
                    }}
                  >
                    Q{i + 1}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.75rem",
                      color: theme.textMuted,
                    }}
                  >
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeSection>

      {/* Before / After */}
      <FadeSection>
        <p
          className="tracking-[0.1em] uppercase mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", color: theme.textFaint }}
        >
          Before & After
        </p>
        <BeforeAfterComparison
          beforeLabel="Manual paper path, 30+ min process, human-mediation dependent"
          afterLabel="Digital self-service, 5-minute completion, full compliance"
        />
      </FadeSection>

      {/* Solution Screens */}
      <FadeSection>
        <p
          className="tracking-[0.1em] uppercase mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", color: theme.textFaint }}
        >
          Solution
        </p>

        <div className="space-y-10">
          <div>
            <p
              className="mb-3"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: theme.textMuted }}
            >
              Desktop — Full Form View
            </p>
            <BankDesktopScreen />
          </div>

          <div>
            <p
              className="mb-3"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: theme.textMuted }}
            >
              Mobile Onboarding Flow
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { step: 0, label: "Welcome" },
                { step: 1, label: "ID Verify" },
                { step: 2, label: "Details" },
                { step: 2, label: "Address" },
                { step: 6, label: "Complete" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-full max-w-[160px] rounded-[16px] border-[3px] border-[#1a1a1a] overflow-hidden">
                    <BankOnboardingScreen step={item.step} />
                  </div>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.625rem",
                      color: theme.textFaint,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeSection>
    </div>
  );
}

/* ─── Generic project content for non-detailed projects ─── */
function GenericProjectContent({ projectId }: { projectId: string }) {
  const project = getProject(projectId);
  const { theme } = useTheme();
  if (!project) return null;

  return (
    <div className="space-y-20">
      <FadeSection>
        <div
          className="aspect-[16/9] rounded-lg overflow-hidden"
          style={{ backgroundColor: theme.bgSubtle }}
        >
          <ImageWithFallback
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </FadeSection>

      <FadeSection>
        <p
          className="tracking-[0.1em] uppercase mb-6"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.6875rem", color: theme.textFaint }}
        >
          Process
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {["Discovery", "Research", "Design", "Validation"].map((phase, i) => (
            <div
              key={phase}
              className="rounded-lg p-5"
              style={{
                backgroundColor: theme.bgSubtle,
                border: `1px solid ${theme.border}`,
              }}
            >
              <span
                className="block mb-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.6875rem",
                  color: theme.textFaint,
                }}
              >
                0{i + 1}
              </span>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: theme.text,
                }}
              >
                {phase}
              </p>
            </div>
          ))}
        </div>
      </FadeSection>
    </div>
  );
}

/* ─── Main Project Page ─── */
export function ProjectPage({ projectId }: { projectId: string }) {
  const project = getProject(projectId);
  const nextProject = getNextProject(projectId);
  const { theme } = useTheme();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-14">
        <div className="text-center">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: theme.textMuted }}>
            Project not found
          </p>
          <Link
            to="/"
            className="mt-2 inline-block"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: theme.text }}
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const isDetailed = projectId === "veterans" || projectId === "bank";

  return (
    <div className="pt-14">
      {/* ── Hero ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 transition-colors mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8125rem",
                color: theme.textFaint,
              }}
            >
              <ArrowLeft size={14} />
              All Projects
            </Link>
          </motion.div>

          {/* Title */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="tracking-[0.1em] uppercase mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.6875rem",
                color: theme.textFaint,
              }}
            >
              {project.category} · {project.year}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="tracking-[-0.02em] mb-4"
              style={{
                fontFamily: "Averia Serif Libre, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.15,
                fontWeight: 400,
                color: theme.text,
              }}
            >
              {project.subtitle}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 mt-5"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6875rem",
                    border: `1px solid ${theme.tagBorder}`,
                    color: theme.tagText,
                    backgroundColor: theme.tagBg,
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Metadata ── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            style={{ borderTop: `1px solid ${theme.border}` }}
          >
            {[
              { label: "Role", value: project.role },
              { label: "Duration", value: project.duration },
              { label: "Category", value: project.category },
              { label: "Year", value: project.year },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: theme.textFaint,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    color: theme.text,
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <FadeSection>
              <p
                className="tracking-[0.1em] uppercase mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.6875rem",
                  color: theme.textFaint,
                }}
              >
                Overview
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: theme.textSecondary,
                }}
              >
                {project.overview}
              </p>
            </FadeSection>
            <FadeSection delay={0.1}>
              <p
                className="tracking-[0.1em] uppercase mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.6875rem",
                  color: theme.textFaint,
                }}
              >
                Challenge
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: theme.textSecondary,
                }}
              >
                {project.challenge}
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── Case Study Content ── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {projectId === "veterans" && <VeteransCaseStudy />}
          {projectId === "bank" && <BankCaseStudy />}
          {!isDetailed && <GenericProjectContent projectId={projectId} />}
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section
        className="py-16 md:py-24 transition-colors duration-700"
        style={{ backgroundColor: theme.bgSubtle }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <FadeSection>
            <p
              className="tracking-[0.1em] uppercase mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.6875rem",
                color: theme.textFaint,
              }}
            >
              Outcomes
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {project.outcomes.map((o) => (
                <div key={o.label}>
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "Averia Serif Libre, serif",
                      fontSize: "2rem",
                      fontWeight: 400,
                      color: theme.text,
                    }}
                  >
                    {o.metric}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.875rem",
                      color: theme.textMuted,
                    }}
                  >
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Next Project ── */}
      {nextProject && (
        <section className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <FadeSection>
              <Link to={`/project/${nextProject.id}`} className="block group">
                <p
                  className="tracking-[0.1em] uppercase mb-4"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6875rem",
                    color: theme.textFaint,
                  }}
                >
                  Next Project
                </p>
                <div className="flex items-center justify-between">
                  <h2
                    className="transition-colors"
                    style={{
                      fontFamily: "Averia Serif Libre, serif",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      lineHeight: 1.1,
                      fontWeight: 400,
                      color: theme.text,
                    }}
                  >
                    {nextProject.title}
                  </h2>
                  <ArrowRight
                    size={32}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: theme.text }}
                  />
                </div>
              </Link>
            </FadeSection>
          </div>
        </section>
      )}
    </div>
  );
}
