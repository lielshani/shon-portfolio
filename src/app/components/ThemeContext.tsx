import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface ThemeTokens {
  id: string;
  name: string;
  description: string;
  preview: { bg: string; accent: string; text: string };
  // Core
  bg: string;
  bgSubtle: string;
  bgCard: string;
  bgElevated: string;
  // Text
  text: string;
  textSecondary: string;
  textMuted: string;
  textFaint: string;
  // Borders
  border: string;
  borderSubtle: string;
  // Interactive
  accent: string;
  accentMuted: string;
  btnBg: string;
  btnText: string;
  btnHover: string;
  // Input
  inputBg: string;
  inputBorder: string;
  inputFocus: string;
  // Nav
  navBgScroll: string;
  navBorder: string;
  // Overlay
  overlayLight: string;
  overlayDark: string;
  // Tags
  tagBg: string;
  tagBorder: string;
  tagText: string;
  // Showreel
  heroImage: string;
}

export const themes: ThemeTokens[] = [
  {
    id: "ethereal",
    name: "Ethereal Minimal",
    description: "Swiss precision, clean whites, whisper-light",
    preview: { bg: "#ffffff", accent: "#e8e8e8", text: "#1a1a1a" },
    bg: "#ffffff",
    bgSubtle: "#fafafa",
    bgCard: "#ffffff",
    bgElevated: "#fafafa",
    text: "#1a1a1a",
    textSecondary: "#666666",
    textMuted: "#999999",
    textFaint: "#bbbbbb",
    border: "#f0f0f0",
    borderSubtle: "#f5f5f5",
    accent: "#1a1a1a",
    accentMuted: "#e0e0e0",
    btnBg: "#1a1a1a",
    btnText: "#ffffff",
    btnHover: "#333333",
    inputBg: "#fafafa",
    inputBorder: "#eeeeee",
    inputFocus: "#cccccc",
    navBgScroll: "rgba(255,255,255,0.92)",
    navBorder: "#f0f0f0",
    overlayLight: "rgba(26,26,26,0)",
    overlayDark: "rgba(26,26,26,0.05)",
    tagBg: "#ffffff",
    tagBorder: "#eeeeee",
    tagText: "#999999",
    heroImage: "https://images.unsplash.com/photo-1625225229087-3ccadd1574fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduZXIlMjBwb3J0Zm9saW8lMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDM3OTkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "noir",
    name: "Noir Atelier",
    description: "Dark luxury, warm gold, cinematic depth",
    preview: { bg: "#0a0a0a", accent: "#c8a97e", text: "#f5f0e8" },
    bg: "#0a0a0a",
    bgSubtle: "#111111",
    bgCard: "#141414",
    bgElevated: "#1a1a1a",
    text: "#f5f0e8",
    textSecondary: "#b8b0a4",
    textMuted: "#8a8278",
    textFaint: "#5a5550",
    border: "#222222",
    borderSubtle: "#1c1c1c",
    accent: "#c8a97e",
    accentMuted: "#3a3228",
    btnBg: "#c8a97e",
    btnText: "#0a0a0a",
    btnHover: "#dfc4a0",
    inputBg: "#141414",
    inputBorder: "#2a2a2a",
    inputFocus: "#c8a97e",
    navBgScroll: "rgba(10,10,10,0.95)",
    navBorder: "#1a1a1a",
    overlayLight: "rgba(200,169,126,0)",
    overlayDark: "rgba(200,169,126,0.06)",
    tagBg: "#141414",
    tagBorder: "#2a2a2a",
    tagText: "#8a8278",
    heroImage: "https://images.unsplash.com/photo-1671722294182-ed01cbe66bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwd29ya3NwYWNlJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc3MDM3OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "editorial",
    name: "Warm Editorial",
    description: "Cream tones, terracotta accents, magazine feel",
    preview: { bg: "#f8f4ef", accent: "#c47d5a", text: "#2a2520" },
    bg: "#f8f4ef",
    bgSubtle: "#f0ebe4",
    bgCard: "#fdfbf8",
    bgElevated: "#f0ebe4",
    text: "#2a2520",
    textSecondary: "#6e635a",
    textMuted: "#8a7e72",
    textFaint: "#b5a99c",
    border: "#e4ddd4",
    borderSubtle: "#ede7df",
    accent: "#c47d5a",
    accentMuted: "#f0ddd0",
    btnBg: "#2a2520",
    btnText: "#f8f4ef",
    btnHover: "#483e38",
    inputBg: "#f0ebe4",
    inputBorder: "#ddd5cb",
    inputFocus: "#c47d5a",
    navBgScroll: "rgba(248,244,239,0.95)",
    navBorder: "#e4ddd4",
    overlayLight: "rgba(42,37,32,0)",
    overlayDark: "rgba(42,37,32,0.04)",
    tagBg: "#fdfbf8",
    tagBorder: "#e4ddd4",
    tagText: "#8a7e72",
    heroImage: "https://images.unsplash.com/photo-1667929048193-4fef49b0ba0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwYmVpZ2UlMjBlZGl0b3JpYWwlMjBkZXNpZ24lMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzcwMzc5OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "stark",
    name: "Stark Contrast",
    description: "Bold black & white, red punctuation, Bauhaus edge",
    preview: { bg: "#ffffff", accent: "#e63022", text: "#000000" },
    bg: "#ffffff",
    bgSubtle: "#f2f2f2",
    bgCard: "#ffffff",
    bgElevated: "#f5f5f5",
    text: "#000000",
    textSecondary: "#444444",
    textMuted: "#777777",
    textFaint: "#aaaaaa",
    border: "#e0e0e0",
    borderSubtle: "#eeeeee",
    accent: "#e63022",
    accentMuted: "#fde8e6",
    btnBg: "#000000",
    btnText: "#ffffff",
    btnHover: "#222222",
    inputBg: "#f5f5f5",
    inputBorder: "#d0d0d0",
    inputFocus: "#000000",
    navBgScroll: "rgba(255,255,255,0.96)",
    navBorder: "#e0e0e0",
    overlayLight: "rgba(0,0,0,0)",
    overlayDark: "rgba(0,0,0,0.06)",
    tagBg: "#ffffff",
    tagBorder: "#000000",
    tagText: "#000000",
    heroImage: "https://images.unsplash.com/photo-1758846946040-6fbf978f8038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xkJTIwY29udHJhc3QlMjBibGFjayUyMHdoaXRlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDM3OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "midnight",
    name: "Midnight Deep",
    description: "Navy depth, cool blue glow, premium corporate",
    preview: { bg: "#0d1117", accent: "#58a6ff", text: "#e6edf3" },
    bg: "#0d1117",
    bgSubtle: "#161b22",
    bgCard: "#161b22",
    bgElevated: "#1c2128",
    text: "#e6edf3",
    textSecondary: "#a8b5c4",
    textMuted: "#8b949e",
    textFaint: "#484f58",
    border: "#30363d",
    borderSubtle: "#21262d",
    accent: "#58a6ff",
    accentMuted: "#162944",
    btnBg: "#58a6ff",
    btnText: "#0d1117",
    btnHover: "#79bbff",
    inputBg: "#161b22",
    inputBorder: "#30363d",
    inputFocus: "#58a6ff",
    navBgScroll: "rgba(13,17,23,0.95)",
    navBorder: "#21262d",
    overlayLight: "rgba(88,166,255,0)",
    overlayDark: "rgba(88,166,255,0.05)",
    tagBg: "#161b22",
    tagBorder: "#30363d",
    tagText: "#8b949e",
    heroImage: "https://images.unsplash.com/photo-1710708953374-fb8d75fe4782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwbmF2eSUyMGJsdWUlMjBhYnN0cmFjdCUyMHRleHR1cmUlMjBwcmVtaXVtfGVufDF8fHx8MTc3MDM3OTkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

interface ThemeContextType {
  theme: ThemeTokens;
  themeId: string;
  setThemeId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes[0],
  themeId: "ethereal",
  setThemeId: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function applyThemeVars(t: ThemeTokens) {
  const root = document.documentElement;
  root.style.setProperty("--sh-bg", t.bg);
  root.style.setProperty("--sh-bg-subtle", t.bgSubtle);
  root.style.setProperty("--sh-bg-card", t.bgCard);
  root.style.setProperty("--sh-bg-elevated", t.bgElevated);
  root.style.setProperty("--sh-text", t.text);
  root.style.setProperty("--sh-text-secondary", t.textSecondary);
  root.style.setProperty("--sh-text-muted", t.textMuted);
  root.style.setProperty("--sh-text-faint", t.textFaint);
  root.style.setProperty("--sh-border", t.border);
  root.style.setProperty("--sh-border-subtle", t.borderSubtle);
  root.style.setProperty("--sh-accent", t.accent);
  root.style.setProperty("--sh-accent-muted", t.accentMuted);
  root.style.setProperty("--sh-btn-bg", t.btnBg);
  root.style.setProperty("--sh-btn-text", t.btnText);
  root.style.setProperty("--sh-btn-hover", t.btnHover);
  root.style.setProperty("--sh-input-bg", t.inputBg);
  root.style.setProperty("--sh-input-border", t.inputBorder);
  root.style.setProperty("--sh-input-focus", t.inputFocus);
  root.style.setProperty("--sh-nav-bg-scroll", t.navBgScroll);
  root.style.setProperty("--sh-nav-border", t.navBorder);
  root.style.setProperty("--sh-overlay-light", t.overlayLight);
  root.style.setProperty("--sh-overlay-dark", t.overlayDark);
  root.style.setProperty("--sh-tag-bg", t.tagBg);
  root.style.setProperty("--sh-tag-border", t.tagBorder);
  root.style.setProperty("--sh-tag-text", t.tagText);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState(() => {
    try {
      const stored = localStorage.getItem("sh-theme");
      if (stored && themes.some((t) => t.id === stored)) return stored;
    } catch {}
    return "ethereal";
  });
  const theme = themes.find((t) => t.id === themeId) || themes[0];

  useEffect(() => {
    applyThemeVars(theme);
    try {
      localStorage.setItem("sh-theme", theme.id);
    } catch {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}