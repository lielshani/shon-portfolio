import { AnimatePresence, motion } from "motion/react";
import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { ProjectPage } from "./components/ProjectPage";
import { AboutPage } from "./components/AboutPage";
import { Footer } from "./components/Footer";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useEffect } from "react";
import { Toaster } from "sonner";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Wrapper to pass useParams to ProjectPage
function ProjectPageWrapper() {
  const { id } = useParams();
  return <ProjectPage projectId={id || ""} />;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HomePage />
            </motion.main>
          }
        />
        <Route
          path="/about"
          element={
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AboutPage />
            </motion.main>
          }
        />
        <Route
          path="/project/:id"
          element={
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectPageWrapper />
            </motion.main>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AppShell() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors duration-700"
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: theme.bg,
        color: theme.text,
      }}
    >
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <ThemeSwitcher />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </BrowserRouter>
  );
}