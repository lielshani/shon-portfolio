import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, X, Check } from "lucide-react";
import { themes, useTheme } from "./ThemeContext";

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { themeId, setThemeId, theme } = useTheme();

  return (
    <>
      {/* Toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer border-none transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: theme.btnBg,
          color: theme.btnText,
          boxShadow: `0 4px 24px ${theme.accent}30`,
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={18} />
            </motion.div>
          ) : (
            <motion.div key="palette" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Palette size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-6 z-[100] w-[300px] rounded-2xl overflow-hidden"
            style={{
              backgroundColor: theme.bgCard,
              border: `1px solid ${theme.border}`,
              boxShadow: `0 24px 80px -12px rgba(0,0,0,0.25), 0 0 0 1px ${theme.border}`,
            }}
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-3">
              <p
                style={{
                  fontFamily: "Averia Serif Libre, serif",
                  fontSize: "0.9375rem",
                  fontWeight: 400,
                  color: theme.text,
                  lineHeight: 1.3,
                }}
              >
                Design Style
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.6875rem",
                  color: theme.textMuted,
                  marginTop: "4px",
                }}
              >
                Browse 5 premium options
              </p>
            </div>

            {/* Theme list */}
            <div className="px-3 pb-3 space-y-1">
              {themes.map((t, i) => {
                const isActive = t.id === themeId;
                return (
                  <motion.button
                    key={t.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => setThemeId(t.id)}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer border-none transition-all duration-200 text-left"
                    style={{
                      backgroundColor: isActive ? theme.accentMuted : "transparent",
                    }}
                  >
                    {/* Color preview */}
                    <div
                      className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                      style={{
                        backgroundColor: t.preview.bg,
                        border: `1.5px solid ${t.preview.bg === "#ffffff" ? "#e0e0e0" : t.preview.bg === "#f8f4ef" ? "#d8d0c6" : "transparent"}`,
                      }}
                    >
                      {/* Mini preview dots */}
                      <div className="flex gap-[3px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: t.preview.text }} />
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: t.preview.accent }} />
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: t.preview.text, opacity: 0.3 }} />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.8125rem",
                          fontWeight: isActive ? 500 : 400,
                          color: theme.text,
                          lineHeight: 1.3,
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="truncate"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.625rem",
                          color: theme.textMuted,
                          lineHeight: 1.4,
                          marginTop: "1px",
                        }}
                      >
                        {t.description}
                      </p>
                    </div>

                    {/* Check */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: theme.accent }}
                      >
                        <Check size={11} style={{ color: theme.id === "stark" || theme.id === "ethereal" ? "#fff" : theme.bg }} />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Footer hint */}
            <div
              className="px-5 py-3"
              style={{ borderTop: `1px solid ${theme.border}` }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.5625rem",
                  color: theme.textFaint,
                  textAlign: "center",
                  letterSpacing: "0.03em",
                }}
              >
                Theme applies across all pages
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
