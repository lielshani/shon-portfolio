import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";
import { ToolsGrid, AIWorkflowDiagram } from "./MockScreens";

export function AboutPage() {
  const { theme } = useTheme();

  return (
    <section
      className="py-24 md:py-32 min-h-screen transition-colors duration-700"
      style={{ backgroundColor: theme.bgSubtle }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="tracking-[0.12em] uppercase mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.6875rem",
              color: theme.textFaint,
            }}
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="tracking-[-0.02em] mb-8"
            style={{
              fontFamily: "Averia Serif Libre, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              lineHeight: 1.25,
              fontWeight: 400,
              color: theme.text,
            }}
          >
            Shon Hazan is a product designer specializing in systems clarity,
            complex services, research-driven UX, and AI-assisted product creation.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: theme.textSecondary,
              }}
            >
              He works end-to-end across research, IA, UX, UI, prototyping, and delivery.
              His workflow integrates advanced AI tools to accelerate exploration,
              structure insights, and design with precision.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "User Research",
                "Product Thinking",
                "Interaction Design",
                "Design Systems",
                "AI Workflows",
                "Prototyping",
                "Accessibility",
                "Data-Driven UX",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full transition-colors duration-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    border: `1px solid ${theme.tagBorder}`,
                    color: theme.tagText,
                    backgroundColor: theme.tagBg,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 max-w-4xl"
        >
          <p
            className="tracking-[0.12em] uppercase mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.6875rem",
              color: theme.textFaint,
            }}
          >
            Tools & Stack
          </p>
          <ToolsGrid />
        </motion.div>

        {/* AI Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 max-w-5xl"
        >
           <p
            className="tracking-[0.12em] uppercase mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.6875rem",
              color: theme.textFaint,
            }}
          >
            AI In My Workflow
          </p>
          
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div>
              <h3
                className="mb-6"
                style={{
                  fontFamily: "Averia Serif Libre, serif",
                  fontSize: "1.5rem",
                  color: theme.text,
                }}
              >
                AI is an integrated layer in my process — not an add-on.
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: theme.textSecondary,
                }}
              >
                I use AI for structuring research, generating UX variants, validating flows,
                simplifying content, accelerating ideation, and producing high-fidelity prototypes faster.
              </p>
            </div>
            
            <AIWorkflowDiagram />
          </div>
        </motion.div>
      </div>
    </section>
  );
}