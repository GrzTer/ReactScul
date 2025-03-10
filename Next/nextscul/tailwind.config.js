// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",     // Next.js Pages (jeśli używasz Pages Router)
    "./components/**/*.{js,ts,jsx,tsx}",// Wspólne komponenty
    "./app/**/*.{js,ts,jsx,tsx}"        // Next.js App Router (jeśli używasz /app)
  ],
  theme: { extend: {} },
  plugins: []
}
