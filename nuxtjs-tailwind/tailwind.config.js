/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {},

    colors: {
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
}

