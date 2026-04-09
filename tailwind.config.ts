import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#060911',
          2: '#0C1120',
          3: '#111828',
          4: '#192035',
        },
        red: {
          DEFAULT: '#8C1515',
          1: '#B01E1E',
          2: '#D42B2B',
          3: '#F04040',
          4: '#FF7070',
        },
        gold: {
          DEFAULT: '#A87820',
          1: '#C99028',
          2: '#E8AD36',
          3: '#F5C84A',
          4: '#FFE080',
        },
        jade: {
          DEFAULT: '#0E6040',
          1: '#128558',
          2: '#18B878',
          3: '#30E894',
          4: '#80FFB8',
        },
        sapph: {
          DEFAULT: '#0A3870',
          1: '#1255A0',
          2: '#2080D0',
          3: '#50A8F0',
          4: '#90CCF8',
        },
        muted: '#7080A0',
        dim: '#2A3550',
        divider: 'rgba(140, 21, 21, 0.16)',
        txt: '#ECF0FA',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': "radial-gradient(var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
};
export default config;
