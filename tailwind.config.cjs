module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C41E6",
        secondary: "#161630",
        accent: "#33A7E9",
        "text-primary": "#161630",
        "text-secondary": "#1C41E6",
        "muted-primary": "#434363",
        "bg-primary": "#FCFDFF",
        "bg-secondary": "#EAEDF5",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
