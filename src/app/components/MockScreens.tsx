/* ─── Auto-generated UI Mockup Screens ─── */

export function VeteransLobbyScreen({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const isMobile = variant === "mobile";
  return (
    <div className="w-full rounded-lg overflow-hidden bg-[#fafaf8] border border-[#eee] shadow-sm">
      {!isMobile && <BrowserChrome title="veterans-portal.gov.il" />}
      {isMobile && <MobileStatusBar />}
      <div className={`${isMobile ? "p-3" : "p-5"} space-y-4`}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 bg-[#1a1a1a]/10 rounded w-24 mb-1.5" />
            <div className="h-3.5 bg-[#1a1a1a]/15 rounded w-48" />
          </div>
          <div className="w-8 h-8 rounded-full bg-[#e8e6e0]" />
        </div>
        {/* Stage selector */}
        <div className="flex gap-2">
          {["All Topics", "Eligible", "In Progress", "Completed"].map((t, i) => (
            <div
              key={t}
              className={`px-3 py-1.5 rounded-full ${
                i === 0 ? "bg-[#1a1a1a] text-white" : "bg-white border border-[#e0e0e0]"
              }`}
              style={{ fontFamily: "Inter", fontSize: "0.5625rem", fontWeight: i === 0 ? 500 : 400, color: i === 0 ? "white" : "#999" }}
            >
              {t}
            </div>
          ))}
        </div>
        {/* Topic cards */}
        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-3`}>
          {[
            { title: "Housing Assistance", status: "Eligible", statusColor: "#28a745" },
            { title: "Rehabilitation Program", status: "In Progress", statusColor: "#f0ad4e" },
            { title: "Education Benefits", status: "Eligible", statusColor: "#28a745" },
            { title: "Medical Coverage", status: "Active", statusColor: "#007bff" },
            { title: "Career Transition", status: "Not Started", statusColor: "#999" },
            { title: "Family Support", status: "Eligible", statusColor: "#28a745" },
          ].slice(0, isMobile ? 3 : 6).map((card) => (
            <div key={card.title} className="bg-white rounded-lg p-3.5 border border-[#f0f0ee] shadow-sm space-y-2">
              <div className="flex items-start justify-between">
                <div className="w-6 h-6 rounded bg-[#f0f0ee]" />
                <span
                  className="px-2 py-0.5 rounded-full"
                  style={{ fontFamily: "Inter", fontSize: "0.5rem", color: card.statusColor, backgroundColor: card.statusColor + "12" }}
                >
                  {card.status}
                </span>
              </div>
              <div className="h-2.5 bg-[#1a1a1a]/10 rounded w-3/4" />
              <div className="h-1.5 bg-[#1a1a1a]/5 rounded w-full" />
              <div className="h-1.5 bg-[#1a1a1a]/5 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VeteransHubScreen() {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-[#fafaf8] border border-[#eee] shadow-sm">
      <BrowserChrome title="veterans-portal.gov.il/my-area" />
      <div className="p-5 space-y-4">
        {/* Welcome */}
        <div>
          <div className="h-2 bg-[#1a1a1a]/6 rounded w-20 mb-1" />
          <div className="h-4 bg-[#1a1a1a]/12 rounded w-40" />
        </div>
        {/* Status cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Pending", count: "3", color: "#f0ad4e" },
            { label: "Approved", count: "7", color: "#28a745" },
            { label: "In Review", count: "2", color: "#007bff" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-lg p-3 border border-[#f0f0ee] text-center">
              <div
                className="mx-auto w-8 h-8 rounded-full flex items-center justify-center mb-1"
                style={{ backgroundColor: s.color + "15", color: s.color, fontFamily: "Inter", fontSize: "0.875rem", fontWeight: 600 }}
              >
                {s.count}
              </div>
              <span style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#999" }}>{s.label}</span>
            </div>
          ))}
        </div>
        {/* Timeline */}
        <div className="bg-white rounded-lg p-4 border border-[#f0f0ee] space-y-3">
          <div className="h-2.5 bg-[#1a1a1a]/8 rounded w-24" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${i === 1 ? "bg-[#28a745]" : i === 2 ? "bg-[#f0ad4e]" : "bg-[#e0e0e0]"}`} />
                {i < 3 && <div className="w-px h-6 bg-[#e0e0e0]" />}
              </div>
              <div className="space-y-1 pb-2">
                <div className="h-2 bg-[#1a1a1a]/8 rounded w-32" />
                <div className="h-1.5 bg-[#1a1a1a]/4 rounded w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VeteransEligibilityScreen() {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-[#fafaf8] border border-[#eee] shadow-sm">
      <BrowserChrome title="veterans-portal.gov.il/eligibility" />
      <div className="p-5 space-y-4">
        <div className="h-3.5 bg-[#1a1a1a]/12 rounded w-48" />
        <div className="h-2 bg-[#1a1a1a]/5 rounded w-72" />
        {/* Eligibility checklist */}
        <div className="bg-white rounded-lg p-4 border border-[#f0f0ee] space-y-3">
          {[
            { label: "Service period verified", checked: true },
            { label: "Medical documentation", checked: true },
            { label: "Financial assessment", checked: false },
            { label: "Interview scheduled", checked: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded flex items-center justify-center ${item.checked ? "bg-[#28a745]" : "border-2 border-[#ddd]"}`}>
                {item.checked && <span className="text-white" style={{ fontSize: "0.625rem" }}>✓</span>}
              </div>
              <span style={{ fontFamily: "Inter", fontSize: "0.6875rem", color: item.checked ? "#1a1a1a" : "#999" }}>{item.label}</span>
            </div>
          ))}
        </div>
        {/* Recommendation */}
        <div className="bg-[#f0f7ff] rounded-lg p-4 border border-[#d0e3f7]">
          <div className="h-2.5 bg-[#007bff]/15 rounded w-32 mb-2" />
          <div className="h-1.5 bg-[#007bff]/8 rounded w-full mb-1" />
          <div className="h-1.5 bg-[#007bff]/8 rounded w-3/4" />
        </div>
      </div>
    </div>
  );
}

export function BankOnboardingScreen({ step = 0 }: { step?: number }) {
  const steps = ["Welcome", "ID Verify", "Personal", "Address", "Terms", "Purpose", "Complete"];
  return (
    <div className="w-full rounded-lg overflow-hidden bg-white border border-[#eee] shadow-sm">
      <MobileStatusBar />
      <div className="p-4 space-y-4">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#999" }}>Step {step + 1} of {steps.length}</span>
            <span style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#999" }}>{Math.round(((step + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="h-1 bg-[#f0f0f0] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1a1a1a] rounded-full transition-all"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {step === 0 && (
          <div className="text-center space-y-3 py-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f0f0ee] mx-auto" />
            <div className="h-3 bg-[#1a1a1a]/12 rounded w-40 mx-auto" />
            <div className="h-2 bg-[#1a1a1a]/6 rounded w-56 mx-auto" />
            <div className="bg-[#f7f7f5] rounded-lg p-3 space-y-1.5 text-left">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#1a1a1a]/8" />
                <span style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#666" }}>~5 minutes to complete</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#1a1a1a]/8" />
                <span style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#666" }}>You'll need your ID card</span>
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4 py-2">
            <div className="h-3 bg-[#1a1a1a]/12 rounded w-36" />
            <div className="aspect-[3/2] bg-[#f5f5f0] rounded-xl border-2 border-dashed border-[#ddd] flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#e0e0e0] mx-auto flex items-center justify-center">
                  <span style={{ fontSize: "1rem" }}>📷</span>
                </div>
                <span style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#999" }}>Scan your ID</span>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3 py-2">
            <div className="h-3 bg-[#1a1a1a]/12 rounded w-32" />
            {["Full Name", "Date of Birth", "Phone Number"].map((field) => (
              <div key={field} className="space-y-1">
                <span style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#999" }}>{field}</span>
                <div className="h-9 bg-[#f5f5f5] rounded-lg border border-[#e8e8e8]" />
              </div>
            ))}
          </div>
        )}

        {step === 6 && (
          <div className="text-center space-y-3 py-6">
            <div className="w-14 h-14 rounded-full bg-[#e8f5e9] mx-auto flex items-center justify-center">
              <span className="text-[#28a745]" style={{ fontSize: "1.25rem" }}>✓</span>
            </div>
            <div className="h-3.5 bg-[#1a1a1a]/12 rounded w-40 mx-auto" />
            <div className="h-2 bg-[#1a1a1a]/6 rounded w-56 mx-auto" />
            <div className="h-2 bg-[#1a1a1a]/4 rounded w-44 mx-auto" />
          </div>
        )}

        {/* CTA */}
        <div className="h-10 bg-[#1a1a1a] rounded-xl" />
      </div>
    </div>
  );
}

export function BankDesktopScreen() {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-white border border-[#eee] shadow-sm">
      <BrowserChrome title="postbank.co.il/open-account" />
      <div className="p-5">
        <div className="grid grid-cols-[200px_1fr] gap-6">
          {/* Left sidebar steps */}
          <div className="space-y-1">
            {["Welcome", "Identity", "Personal Info", "Address", "Terms", "Purpose", "Review"].map((s, i) => (
              <div
                key={s}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                  i === 2 ? "bg-[#1a1a1a] text-white" : i < 2 ? "bg-[#f0f0ee]" : ""
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    i < 2 ? "bg-[#28a745] text-white" : i === 2 ? "bg-white text-[#1a1a1a]" : "border border-[#ddd] text-[#ccc]"
                  }`}
                  style={{ fontFamily: "Inter", fontSize: "0.5rem", fontWeight: 600 }}
                >
                  {i < 2 ? "✓" : i + 1}
                </div>
                <span style={{ fontFamily: "Inter", fontSize: "0.625rem", fontWeight: i === 2 ? 500 : 400, color: i === 2 ? "white" : i < 2 ? "#666" : "#bbb" }}>
                  {s}
                </span>
              </div>
            ))}
          </div>
          {/* Form area */}
          <div className="space-y-4">
            <div className="h-4 bg-[#1a1a1a]/12 rounded w-40" />
            <div className="h-2 bg-[#1a1a1a]/5 rounded w-64" />
            <div className="grid grid-cols-2 gap-4">
              {["First Name", "Last Name", "Email", "Phone"].map((f) => (
                <div key={f} className="space-y-1">
                  <span style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#999" }}>{f}</span>
                  <div className="h-9 bg-[#f5f5f5] rounded-lg border border-[#e8e8e8]" />
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <div className="px-6 py-2 rounded-lg border border-[#e0e0e0]">
                <span style={{ fontFamily: "Inter", fontSize: "0.625rem", color: "#999" }}>Back</span>
              </div>
              <div className="px-6 py-2 rounded-lg bg-[#1a1a1a]">
                <span style={{ fontFamily: "Inter", fontSize: "0.625rem", color: "white" }}>Continue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared Chrome ─── */

function BrowserChrome({ title }: { title: string }) {
  return (
    <div className="h-7 bg-[#f5f5f3] flex items-center gap-1.5 px-3 border-b border-[#e8e8e6]">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <div className="flex-1 mx-6 h-4 bg-white rounded-full flex items-center justify-center">
        <span style={{ fontFamily: "Inter", fontSize: "0.5rem", color: "#bbb" }}>{title}</span>
      </div>
    </div>
  );
}

function MobileStatusBar() {
  return (
    <div className="h-6 bg-[#fafafa] flex items-center justify-between px-4 border-b border-[#f0f0f0]">
      <span style={{ fontFamily: "Inter", fontSize: "0.5rem", fontWeight: 600, color: "#1a1a1a" }}>9:41</span>
      <div className="flex gap-1">
        <div className="w-3 h-2 rounded-sm bg-[#1a1a1a]/30" />
        <div className="w-3 h-2 rounded-sm bg-[#1a1a1a]/30" />
        <div className="w-4 h-2 rounded-sm bg-[#1a1a1a]/40" />
      </div>
    </div>
  );
}

/* ─── Research Artifacts ─── */

export function JourneyMapDiagram() {
  const phases = ["Awareness", "Research", "Application", "Waiting", "Onboarding"];
  const emotions = [3, 2, 1, 0, 2, 3];
  return (
    <div className="w-full bg-white rounded-lg p-4 border border-[#f0f0ee] shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span style={{ fontFamily: "Inter", fontSize: "0.6875rem", fontWeight: 500, color: "#1a1a1a" }}>User Journey Map</span>
        <span style={{ fontFamily: "Inter", fontSize: "0.5rem", color: "#bbb" }}>Research Artifact</span>
      </div>
      <div className="flex items-end gap-1 h-16 mb-2">
        {emotions.map((e, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-sm"
              style={{
                height: `${(e + 1) * 12}px`,
                backgroundColor: e >= 2 ? "#28a74520" : e === 1 ? "#f0ad4e20" : "#ff5f5720",
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-1">
        {phases.map((p) => (
          <div key={p} className="flex-1 text-center">
            <span style={{ fontFamily: "Inter", fontSize: "0.4375rem", color: "#999" }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StakeholderMap() {
  return (
    <div className="w-full bg-white rounded-lg p-4 border border-[#f0f0ee] shadow-sm">
      <span style={{ fontFamily: "Inter", fontSize: "0.6875rem", fontWeight: 500, color: "#1a1a1a" }}>Stakeholder Map</span>
      <div className="mt-3 relative flex items-center justify-center h-32">
        <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center">
          <span style={{ fontFamily: "Inter", fontSize: "0.5rem", color: "white", fontWeight: 500 }}>Veteran</span>
        </div>
        {["Case Worker", "Medical", "Legal", "Family", "Admin"].map((s, i) => {
          const angle = (i * 72 - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * 50;
          const y = Math.sin(angle) * 45;
          return (
            <div
              key={s}
              className="absolute w-12 h-12 rounded-full bg-[#f5f5f0] border border-[#e8e8e4] flex items-center justify-center"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <span style={{ fontFamily: "Inter", fontSize: "0.4375rem", color: "#666", textAlign: "center" }}>{s}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function HeuristicHeatmap() {
  const categories = ["Visibility", "Match", "Control", "Consistency", "Error Prev."];
  const scores = [2, 1, 3, 1, 2];
  return (
    <div className="w-full bg-white rounded-lg p-4 border border-[#f0f0ee] shadow-sm">
      <span style={{ fontFamily: "Inter", fontSize: "0.6875rem", fontWeight: 500, color: "#1a1a1a" }}>Heuristic Evaluation</span>
      <div className="mt-3 space-y-2">
        {categories.map((c, i) => (
          <div key={c} className="flex items-center gap-2">
            <span className="w-20 text-right" style={{ fontFamily: "Inter", fontSize: "0.5rem", color: "#999" }}>{c}</span>
            <div className="flex-1 h-4 bg-[#f5f5f5] rounded overflow-hidden">
              <div
                className="h-full rounded"
                style={{
                  width: `${(scores[i] / 3) * 100}%`,
                  backgroundColor: scores[i] >= 3 ? "#28a74540" : scores[i] === 2 ? "#f0ad4e40" : "#ff5f5740",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BeforeAfterComparison({ beforeLabel, afterLabel }: { beforeLabel: string; afterLabel: string }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <span className="inline-block px-2 py-0.5 rounded bg-[#ff5f57]/10 text-[#ff5f57]" style={{ fontFamily: "Inter", fontSize: "0.5625rem" }}>Before</span>
        <div className="rounded-lg bg-[#faf5f5] border border-[#f0e8e8] p-3 space-y-2">
          <div className="h-2 bg-[#1a1a1a]/6 rounded w-full" />
          <div className="h-2 bg-[#1a1a1a]/4 rounded w-3/4" />
          <div className="h-2 bg-[#1a1a1a]/6 rounded w-full" />
          <div className="h-2 bg-[#1a1a1a]/3 rounded w-1/2" />
          <div className="h-2 bg-[#1a1a1a]/6 rounded w-5/6" />
          <div className="h-2 bg-[#1a1a1a]/4 rounded w-2/3" />
          <p className="mt-2" style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#cc4444" }}>{beforeLabel}</p>
        </div>
      </div>
      <div className="space-y-2">
        <span className="inline-block px-2 py-0.5 rounded bg-[#28a745]/10 text-[#28a745]" style={{ fontFamily: "Inter", fontSize: "0.5625rem" }}>After</span>
        <div className="rounded-lg bg-[#f5faf5] border border-[#e8f0e8] p-3 space-y-2">
          <div className="h-3 bg-[#1a1a1a]/10 rounded w-1/2 mb-1" />
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-8 bg-white rounded border border-[#e8e8e8]" />
            <div className="h-8 bg-white rounded border border-[#e8e8e8]" />
          </div>
          <div className="h-6 bg-[#28a745]/10 rounded" />
          <p className="mt-2" style={{ fontFamily: "Inter", fontSize: "0.5625rem", color: "#28a745" }}>{afterLabel}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── AI & Tools Visuals ─── */

export function ToolsGrid() {
  const tools = [
    { name: "Figma", color: "#F24E1E" },
    { name: "Framer", color: "#0055FF" },
    { name: "Cursor", color: "#000000" },
    { name: "Claude", color: "#D97757" },
    { name: "Midjourney", color: "#FFFFFF", bg: "#000" },
    { name: "Make", color: "#6F3FF5" },
    { name: "Miro", color: "#FFD02F" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
      {tools.map((t) => (
        <div
          key={t.name}
          className="aspect-square rounded-xl border border-[#e8e8e6] bg-white flex flex-col items-center justify-center gap-2 shadow-sm transition-transform hover:scale-105"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: t.bg || t.color + "15" }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: t.bg ? t.color : t.color }}
            />
          </div>
          <span style={{ fontFamily: "Inter", fontSize: "0.625rem", color: "#666" }}>
            {t.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function AIWorkflowDiagram() {
  const steps = [
    { label: "Research", icon: "🔍" },
    { label: "AI Structuring", icon: "🤖" },
    { label: "Insights", icon: "💡" },
    { label: "UX Decisions", icon: "✨" },
    { label: "Prototypes", icon: "📱" },
  ];

  return (
    <div className="w-full bg-[#fafaf8] rounded-xl p-6 border border-[#eee]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
        {/* Connection Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#e0e0e0] md:w-full md:h-0.5 md:left-0 md:top-1/2 transform -z-0 hidden md:block" />
        
        {steps.map((step, i) => (
          <div key={step.label} className="relative z-10 flex flex-col items-center gap-3 bg-[#fafaf8] px-2">
            <div className="w-12 h-12 rounded-full bg-white border border-[#e0e0e0] flex items-center justify-center shadow-sm">
              <span style={{ fontSize: "1.25rem" }}>{step.icon}</span>
            </div>
            <span
              className="text-center"
              style={{
                fontFamily: "Inter",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#1a1a1a",
              }}
            >
              {step.label}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#e0e0e0] md:hidden" />
          </div>
        ))}
      </div>
      
      {/* Cards below */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          "Insight Clustering",
          "Nav Models",
          "Pattern Synthesis",
          "Content Reframing",
        ].map((card) => (
          <div key={card} className="bg-white p-3 rounded-lg border border-[#eee] shadow-sm">
            <div className="w-6 h-6 rounded bg-[#f5f5f5] mb-2" />
            <div className="h-1.5 bg-[#f0f0f0] w-3/4 rounded mb-1" />
            <div className="h-1.5 bg-[#f0f0f0] w-1/2 rounded" />
            <p className="mt-2" style={{ fontFamily: "Inter", fontSize: "0.625rem", color: "#999" }}>{card}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
