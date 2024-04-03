/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './**/*.{html,vue}',
  ],
  theme: {
    extend: {},

    colors: {
      surface: {
        light: 'var(--color-gray-100)',
        dark: 'var(--color-gray-700)',
      },

      transparent: 'transparent',
      current: 'currentColor',

      primary: {
        mainSet: {
          enable: 'var(--color-blue-500)',
          hover: 'var(--color-blue-700)',
          pressed: 'var(--color-blue-900)',
          disable: 'var(--color-gray-300)',
        },
        varSet: {
          enable: 'var(--color-gray-000)',
          hover: 'var(--color-blue-100)',
          pressed: 'var(--color-blue-300)',
          disable: 'var(--color-gray-000)',
        },
      },
      onPrimary: {
        mainSet: {
          enable: 'var(--color-gray-000)',
          hover: 'var(--color-blue-100)',
          pressed: 'var(--color-gray-000)',
          disable: 'var(--color-gray-100)',
        },
        varSet: {
          enable: 'var(--color-blue-500)',
          hover: 'var(--color-blue-700)',
          pressed: 'var(--color-blue-900)',
          disable: 'var(--color-gray-500)',
        },
      },
      dark: {
        primary: {
          mainSet: {
            enable: 'var(--color-blue-300)',
            hover: 'var(--color-blue-100)',
            pressed: 'var(--color-gray-000)',
            disable: 'var(--color-gray-300)',
          },
        },
        onPrimary: {
          mainSet: {
            enable: 'var(--color-gray-000)',
            hover: 'var(--color-blue-500)',
            pressed: 'var(--color-blue-700)',
            disable: 'var(--color-gray-100)',
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
