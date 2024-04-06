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

    // --------------LIGHT COLORS--------------
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      surface: {
        bright: 'var(--color-argent-5)',
        sur: 'var(--color-argent-15)',
        dim: 'var(--color-argent-25)',
      },

      container: {
        lowest: 'var(--color-argent-0)',
        low: 'var(--color-argent-10)',
        high: 'var(--color-argent-20)',
        highest: 'var(--color-argent-30)',
      },

      onSurfCont: {
        high: 'var(--color-carbon-90)',
        low: 'var(--color-carbon-70)',
      },

      primary: {
        DEFAULT: 'var(--color-blue-500)',
        hover: 'var(--color-blue-700)',
        active: 'var(--color-blue-900)',
        disable: 'var(--color-argent-25)',
        outline: {
          DEFAULT: 'var(--color-blue-100)',
          hover: 'var(--color-blue-300)',
          active: 'var(--color-blue-500)',
          disable: 'var(--color-argent-40)',
        },
      },
      onPrimary: {
        DEFAULT: 'var(--color-argent-0)',
        hover: 'var(--color-blue-100)',
        active: 'var(--color-blue-100)',
        disable: 'var(--color-argent-45)',
        outline: {
          DEFAULT: 'var(--color-blue-500)',
          hover: 'var(--color-blue-700)',
          active: 'var(--color-blue-900)',
          disable: 'var(--color-argent-45)',
        },
      },

      secondary: {
        DEFAULT: 'var(--color-orange-500)',
        hover: 'var(--color-orange-700)',
        active: 'var(--color-orange-900)',
        disable: 'var(--color-argent-40)',
        outline: {
          DEFAULT: 'var(--color-orange-100)',
          hover: 'var(--color-orange-300)',
          active: 'var(--color-orange-500)',
          disable: 'var(--color-argent-40)',
        },
      },
      onSecondary: {
        DEFAULT: 'var(--color-argent-5)',
        hover: 'var(--color-orange-100)',
        active: 'var(--color-argent-5)',
        disable: 'var(--color-argent-5)',
        outline: {
          DEFAULT: 'var(--color-orange-500)',
          hover: 'var(--color-orange-100)',
          active: 'var(--color-argent-5)',
          disable: 'var(--color-argent-5)',
        },
      },

      error: {
        DEFAULT: 'var(--color-red-500)',
        hover: 'var(--color-red-700)',
        active: 'var(--color-red-900)',
        disable: 'var(--color-argent-40)',
      },

      onError: {
        DEFAULT: 'var(--color-argent-5)',
        hover: 'var(--color-red-100)',
        active: 'var(--color-red-100)',
        disable: 'var(--color-argent-5)',
      },

      success: {
        DEFAULT: 'var(--color-green-500)',
        hover: 'var(--color-green-700)',
        active: 'var(--color-green-900)',
        disable: 'var(--color-argent-40)',
      },

      onSuccess: {
        DEFAULT: 'var(--color-argent-5)',
        hover: 'var(--color-green-100)',
        active: 'var(--color-argent-5)',
        disable: 'var(--color-argent-5)',
      },

      warning: 'var(--color-yellow-500)',
      onWarning: 'var(--color-argent-5)',

      info: 'var(--color-sky-500)',
      onInfo: 'var(--color-argent-5)',

      // --------------DARK COLORS--------------
      dark: {
        surface: {
          bright: 'var(--color-carbon-95)',
          sur: 'var(--color-carbon-85)',
          dim: 'var(--color-carbon-75)',
        },

        container: {
          lowest: 'var(--color-carbon-100)',
          low: 'var(--color-carbon-90)',
          high: 'var(--color-carbon-80)',
          highest: 'var(--color-carbon-70)',
        },

        onSurfCont: {
          high: 'var(--color-argent-10)',
          low: 'var(--color-argent-30)',
        },

        primary: {
          DEFAULT: 'var(--color-blue-500)',
          hover: 'var(--color-blue-100)',
          active: 'var(--color-argent-5)',
          disable: 'var(--color-argent-40)',
          outline: {
            DEFAULT: 'var(--color-argent-5)',
            hover: 'var(--color-blue-100)',
            active: 'var(--color-blue-300)',
            disable: 'var(--color-argent-40)',
          },
        },
        onPrimary: {
          DEFAULT: 'var(--color-argent-5)',
          hover: 'var(--color-blue-500)',
          active: 'var(--color-blue-700)',
          disable: 'var(--color-argent-10)',
          outline: {
            DEFAULT: 'var(--color-blue-500)',
            hover: 'var(--color-blue-500)',
            active: 'var(--color-argent-5)',
            disable: 'var(--color-argent-10)',
          },
        },

        secondary: {
          DEFAULT: 'var(--color-orange-300)',
          hover: 'var(--color-orange-100)',
          active: 'var(--color-argent-5)',
          disable: 'var(--color-argent-40)',
          outline: {
            DEFAULT: 'var(--color-argent-5)',
            hover: 'var(--color-orange-100)',
            active: 'var(--color-orange-300)',
            disable: 'var(--color-argent-40)',
          },
        },
        onSecondary: {
          DEFAULT: 'var(--color-argent-5)',
          hover: 'var(--color-orange-100)',
          active: 'var(--color-orange-700)',
          disable: 'var(--color-argent-10)',
          outline: {
            DEFAULT: 'var(--color-orange-500)',
            hover: 'var(--color-orange-500)',
            active: 'var(--color-argent-5)',
            disable: 'var(--color-argent-40)',
          },
        },

        error: {
          DEFAULT: 'var(--color-red-300)',
          hover: 'var(--color-red-100)',
          active: 'var(--color-argent-5)',
          disable: 'var(--color-argent-40)',
        },

        onError: {
          DEFAULT: 'var(--color-argent-5)',
          hover: 'var(--color-red-500)',
          active: 'var(--color-red-700)',
          disable: 'var(--color-argent-10)',
        },

        success: {
          DEFAULT: 'var(--color-green-300)',
          hover: 'var(--color-green-100)',
          active: 'var(--color-argent-5)',
          disable: 'var(--color-argent-40)',
        },

        onSuccess: {
          DEFAULT: 'var(--color-argent-5)',
          hover: 'var(--color-green-500)',
          active: 'var(--color-green-700)',
          disable: 'var(--color-argent-10)',
        },

        warning: 'var(--color-yellow-500)',
        onWarning: 'var(--color-argent-5)',

        info: 'var(--color-sky-500)',
        onInfo: 'var(--color-argent-5)',
      },
    },
    // --------------TYPOGRAPHY--------------
    fontFamily: {
      iranSans: ['IranSans'],
    },

    fontSize: {
      'lg-display-1': [
        '3rem',
        {
          lineHeight: '150%',
          // letterSpacing: '-0.01em',
          fontWeight: '950',
        },
      ],
      'lg-display-2': [
        '2.25rem',
        {
          lineHeight: '150%',
          // letterSpacing: '-0.01em',
          fontWeight: '950',
        },
      ],
      'sm-display-1': [
        '1.75rem',
        {
          lineHeight: '150%',
          // letterSpacing: '-0.01em',
          fontWeight: '950',
        },
      ],
      'sm-display-2': [
        '1.5rem',
        {
          lineHeight: '150%',
          // letterSpacing: '-0.01em',
          fontWeight: '950',
        },
      ],
    },
  },
  plugins: [],
};
