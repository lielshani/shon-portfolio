import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../../../../../../Downloads/Portfolio PRD for Shon Hazan 2/src/app/components/ThemeContext";

// Local asset imports
import veteransPortal from "../../assets/8d77d6d48d737128804b0e92609e1e570d68c42c.png";
import veteransJourney from "../../assets/be47f4503e0093e4b423716c27f495a8a4ee9de7.png";
import veteransDashboard from "../../assets/992c9c67c6743a6d7dc5df34bc64b6ab92fe87d3.png";
import veteransEntertainment from "../../assets/e3799fd22d6122fea80517bd27114a65a9f2a5f8.png";
import bankWelcome from "../../assets/013aaf8fbb69a951051c2833ce17ec0d1c834458.png";
import bankVerification from "../../assets/136dd0ad5b82ceb26f6b6be70df4af5f8c5a9d53.png";
import polisaDriverMobile from "../../assets/fe6ec0ad236252a36e9ec6d06db435f3c850cdbe.png";
import polisaDriverDesktop from "../../assets/ab010cbfe0fe215ef79357a96cb8632b6df2fb60.png";
import polisaInsurance from "../../assets/d099e199fd70995e14d035e4b18ab4981ddd657c.png";
import polisaPersonal from "../../assets/563aeec4e3a1aa9ae0a2c2980d02f80f7ce40216.png";

interface ShowreelSlide {
  id: string;
  image: string;
  project: string;
  screen: string;
  type: "mobile" | "desktop" | "tablet";
}

const slides: ShowreelSlide[] = [
  {
    id: "v1",
    image: veteransPortal,
    project: "Veterans Rehabilitation",
    screen: "Main Portal",
    type: "desktop",
  },
  {
    id: "b1",
    image: bankWelcome,
    project: "Israel Post Bank",
    screen: "Onboarding Welcome",
    type: "mobile",
  },
  {
    id: "v2",
    image: veteransDashboard,
    project: "Veterans Rehabilitation",
    screen: "Patient Dashboard",
    type: "desktop",
  },
  {
    id: "p1",
    image: polisaInsurance,
    project: "Polisa Insurance",
    screen: "Coverage Selection",
    type: "desktop",
  },
  {
    id: "b2",
    image: bankVerification,
    project: "Israel Post Bank",
    screen: "Phone Verification",
    type: "mobile",
  },
  {
    id: "v3",
    image: veteransJourney,
    project: "Veterans Rehabilitation",
    screen: "Rehab Journey",
    type: "mobile",
  },
  {
    id: "p2",
    image: polisaDriverDesktop,
    project: "Polisa Insurance",
    screen: "Driver Details",
    type: "desktop",
  },
  {
    id: "v4",
    image: veteransEntertainment,
    project: "Veterans Rehabilitation",
    screen: "Entertainment Hub",
    type: "desktop",
  },
  {
    id: "p3",
    image: polisaDriverMobile,
    project: "Polisa Insurance",
    screen: "Driver Info — Mobile",
    type: "mobile",
  },
  {
    id: "p4",
    image: polisaPersonal,
    project: "Polisa Insurance",
    screen: "Personal Details",
    type: "desktop",
  },
];

const INTERVAL = 3500;

export function ShowreelCarousel() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance, isPaused]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main container */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        style={{
          border: `1px solid ${theme.border}`,
          backgroundColor: theme.bgSubtle,
          aspectRatio: "3/2",
        }}
      >
        {/* Animated images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={`${currentSlide.project} — ${currentSlide.screen}`}
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle gradient overlay at bottom for readability */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3"
              style={{
                background: `linear-gradient(to top, ${theme.bg}66 0%, transparent 100%)`,
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Floating label bubble */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id + "-label"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl backdrop-blur-xl shadow-lg"
              style={{
                backgroundColor:
                  theme.id === "noir" || theme.id === "midnight"
                    ? "rgba(0,0,0,0.7)"
                    : "rgba(255,255,255,0.85)",
                border: `1px solid ${
                  theme.id === "noir" || theme.id === "midnight"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.06)"
                }`,
              }}
            >
              {/* Device type indicator dot */}
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: theme.accent,
                }}
              />
              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color:
                      theme.id === "noir" || theme.id === "midnight"
                        ? "#f5f5f5"
                        : "#1a1a1a",
                    lineHeight: 1.3,
                  }}
                >
                  {currentSlide.project}
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.5625rem",
                    color:
                      theme.id === "noir" || theme.id === "midnight"
                        ? "rgba(255,255,255,0.6)"
                        : "rgba(0,0,0,0.5)",
                    lineHeight: 1.3,
                  }}
                >
                  {currentSlide.screen}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Device type badge */}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSlide.id + "-type"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="px-2 py-1 rounded-lg backdrop-blur-xl flex-shrink-0"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.5rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                backgroundColor:
                  theme.id === "noir" || theme.id === "midnight"
                    ? "rgba(0,0,0,0.6)"
                    : "rgba(255,255,255,0.8)",
                color:
                  theme.id === "noir" || theme.id === "midnight"
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(0,0,0,0.4)",
                border: `1px solid ${
                  theme.id === "noir" || theme.id === "midnight"
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(0,0,0,0.05)"
                }`,
              }}
            >
              {currentSlide.type}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(i)}
            className="relative p-0.5 group"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className="rounded-full transition-all duration-500"
              style={{
                width: i === currentIndex ? "20px" : "6px",
                height: "6px",
                backgroundColor:
                  i === currentIndex ? theme.accent : theme.textFaint + "40",
              }}
            />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="flex justify-center mt-2">
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.625rem",
            color: theme.textFaint,
            letterSpacing: "0.05em",
          }}
        >
          {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
