import { motion } from "motion/react";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTheme } from "./ThemeContext";

export function Footer() {
  const { register, handleSubmit, reset } = useForm();
  const { theme } = useTheme();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <footer
      className="pt-24 pb-12 transition-colors duration-700"
      id="contact"
      style={{
        backgroundColor: theme.bg,
        borderTop: `1px solid ${theme.border}`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Contact Info */}
          <div>
            <p
              className="tracking-[0.12em] uppercase mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.6875rem",
                color: theme.textFaint,
              }}
            >
              Contact
            </p>
            <h2
              className="tracking-[-0.02em] mb-6"
              style={{
                fontFamily: "Averia Serif Libre, serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                lineHeight: 1.25,
                fontWeight: 400,
                color: theme.text,
              }}
            >
              Let's work together
            </h2>
            <p
              className="mb-8 max-w-md"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: theme.textMuted,
              }}
            >
              Open to discussing product design challenges, collaboration
              opportunities, or exchanging ideas.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:shon@example.com"
                className="inline-flex items-center gap-2 transition-colors group w-fit"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  color: theme.text,
                }}
              >
                <Mail size={16} style={{ color: theme.textFaint }} />
                shon@example.com
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  style={{ color: theme.textFaint }}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors group w-fit"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  color: theme.text,
                }}
              >
                <Linkedin size={16} style={{ color: theme.textFaint }} />
                LinkedIn
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  style={{ color: theme.textFaint }}
                />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  backgroundColor: theme.inputBg,
                  border: `1px solid ${theme.inputBorder}`,
                  color: theme.text,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = theme.inputFocus)}
                onBlur={(e) => (e.currentTarget.style.borderColor = theme.inputBorder)}
              />
            </div>
            <div>
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                type="email"
                className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  backgroundColor: theme.inputBg,
                  border: `1px solid ${theme.inputBorder}`,
                  color: theme.text,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = theme.inputFocus)}
                onBlur={(e) => (e.currentTarget.style.borderColor = theme.inputBorder)}
              />
            </div>
            <div>
              <textarea
                {...register("message", { required: true })}
                placeholder="Message"
                rows={4}
                className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors resize-none"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.875rem",
                  backgroundColor: theme.inputBg,
                  border: `1px solid ${theme.inputBorder}`,
                  color: theme.text,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = theme.inputFocus)}
                onBlur={(e) => (e.currentTarget.style.borderColor = theme.inputBorder)}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.875rem",
                backgroundColor: theme.btnBg,
                color: theme.btnText,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.btnHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.btnBg)}
            >
              Send Message
            </button>
          </form>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: `1px solid ${theme.border}` }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              color: theme.textFaint,
            }}
          >
            &copy; 2026 Shon Hazan
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                color: theme.textFaint,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.textFaint)}
            >
              Home
            </a>
            <a
              href="/about"
              className="transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                color: theme.textFaint,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.textFaint)}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}