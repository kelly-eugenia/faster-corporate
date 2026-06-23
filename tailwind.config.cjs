module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C41E6",
        secondary: "#161630",
        accent: "#33A7E9",
        "primary-light": "#005dde",
        "primary-dark": "#001ea6",
        "text-primary": "#161630",
        "text-secondary": "#1C41E6",
        "muted-primary": "#434363",
        "muted-secondary": "#5A6079",
        "ink-light": "#8E93A8",
        "bg-primary": "#FCFDFF",
        "bg-secondary": "#EAEDF5",
        "border-default": "#D6DAE6",
        "border-subtle": "#E7EAF3",
        trustpilot: "#00b67a",
      },
      borderRadius: {
        card: "14px",
        "card-lg": "22px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,16,36,.04), 0 8px 24px -8px rgba(11,16,36,.08)",
        lift: "0 10px 30px -8px rgba(28,65,230,.18), 0 1px 2px rgba(11,16,36,.04)",
        float: "0 20px 50px -16px rgba(11,16,36,0.3)",
        quote: "0 10px 30px -8px rgba(11,16,36,0.18)",
        "btn-primary":
          "0 1px 0 rgba(255,255,255,0.18) inset, 0 8px 18px -6px rgba(28,65,230,0.55)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(1200px 600px at 85% -10%, rgba(59,86,255,0.6), transparent 60%), radial-gradient(900px 500px at 10% 100%, rgba(21,50,184,0.55), transparent 55%), linear-gradient(180deg, #050a2e 0%, #0b1a6b 50%, #1532b8 100%)",
        "fees-gradient":
          "radial-gradient(900px 500px at 10% 0%, rgba(59,86,255,0.5), transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(21,50,184,0.5), transparent 60%), linear-gradient(180deg, #0b1a6b 0%, #050a2e 100%)",
        "cta-gradient":
          "radial-gradient(900px 500px at -10% 100%, rgba(59,86,255,0.4), transparent 60%), radial-gradient(800px 400px at 110% 0%, rgba(21,50,184,0.45), transparent 55%), linear-gradient(135deg, #0b1a6b 0%, #1532b8 100%)",
        "footer-gradient":
          "linear-gradient(175deg,rgba(22, 22, 48, 1) 0%, rgba(26, 48, 157, 1) 80%, rgba(28, 65, 230, 1) 100%)",
        "final-gradient":
          "radial-gradient(900px 500px at 100% 0%, rgba(59,86,255,0.55), transparent 60%), linear-gradient(180deg, #050a2e 0%, #0b1a6b 100%)",
        "text-gradient": "linear-gradient(180deg, #fff 60%, #b8c4ff 100%)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
