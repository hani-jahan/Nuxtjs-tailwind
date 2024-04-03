/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./**/*.{html,vue}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },

    colors: {
      surface: {
        light: 'var(--color-argent-5)',
        dark: 'var(--color-carbon-95)',
      },

      transparent: 'transparent',
      current: 'currentColor',

      primary: {
        main: {
          enable: 'var(--color-blue-500)',
          hover: 'var(--color-blue-700)',
          pressed: 'var(--color-blue-900)',
          disable: 'var(--color-argent-25)',
        },
        var: {
          enable: 'var(--color-argent-0)',
          hover: 'var(--color-blue-100)',
          pressed: 'var(--color-blue-300)',
          disable: 'var(--color-argent-0)',
        },
      },
      onPrimary: {
        main: {
          enable: 'var(--color-argent-0)',
          hover: 'var(--color-blue-100)',
          pressed: 'var(--color-argent-0)',
          disable: 'var(--color-argent-5)',
        },
        var: {
          enable: 'var(--color-blue-500)',
          hover: 'var(--color-blue-700)',
          pressed: 'var(--color-blue-900)',
          disable: 'var(--color-argent-45)',
        },
      },
      dark: {
        primary: {
          main: {
            enable: 'var(--color-blue-300)',
            hover: 'var(--color-blue-100)',
            pressed: 'var(--color-argent-0)',
            disable: 'var(--color-argent-25)',
          },
        },
        onPrimary: {
          main: {
            enable: 'var(--color-argent-0)',
            hover: 'var(--color-blue-500)',
            pressed: 'var(--color-blue-700)',
            disable: 'var(--color-argent-5)',
          },
        },
      },
    },

    fontFamily: {
      iranSans: ['IranSans'],
    },
  },
  plugins: [],
};
