/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,xsl}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primary-bg-color)",
        secondaryBg: "var(--secondary-bg-color)",
        goldColor: "var(--gold-color)",
        primaryText: "hsl(var(--primary-text-color))",
        secondaryBg2: "var(--secondary-bg-color-2)",
        primaryCta: "var(--primary-cta-color)",
        // disabledColor: 'var(--disabled-gold-color)'
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [],
};
