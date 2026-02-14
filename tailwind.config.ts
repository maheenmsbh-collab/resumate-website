
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#7c3aed",
        },
        yellow: {
          400: "#facc15",
        },
      },
    },
  },

  // 👇 THIS IS IMPORTANT
  future: {
    hoverOnlyWhenSupported: true,
  },

  // 👇 DISABLE OKLCH COLOR SPACE
  experimental: {
    optimizeUniversalDefaults: false,
  },
};
