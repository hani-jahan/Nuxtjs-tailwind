/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // --------------LIGHT COLORS--------------
      colors: {
        brandblue: {
          50: '#F3F4FC',
          100: '#EBECFA',
          200: '#D3D6F3',
          300: '#BBC0EC',
          400: '#9BA2E4',
          500: '#737DD9',
          600: '#3340BA',
          700: '#2D39A4',
          800: '#242E84',
          900: '#19205C',
          950: '#10153C',
        },
        brandorange: {
          50: '#FFF9F5',
          100: '#FEF2EB',
          200: '#FDDFCE',
          300: '#FCCFB5',
          400: '#FBB993',
          500: '#FAA370',
          600: '#F88646',
          700: '#F66009',
          800: '#CE5108',
          900: '#933A06',
          950: '#6C2A04',
        },
        brandgreen: {
          50: '#F1FDFA',
          100: '#DFFBF3',
          200: '#BBF7E5',
          300: '#92F2D5',
          400: '#56EBBE',
          500: '#1BDFA4',
          600: '#19D19A',
          700: '#16B686',
          800: '#139B72',
          900: '#0D6D50',
          950: '#094D39',
        },
        brandred: {
          50: '#FEF5F8',
          100: '#FEECF1',
          200: '#FDD8E3',
          300: '#FBC0D2',
          400: '#FAA4BD',
          500: '#F77DA2',
          600: '#F4457A',
          700: '#EC0E51',
          800: '#C10B42',
          900: '#8C0830',
          950: '#650623',
        },
        brandyellow: {
          50: '#FFFCF5',
          100: '#FFF9E5',
          200: '#FFF4D1',
          300: '#FFEDB8',
          400: '#FFE699',
          500: '#FFE085',
          600: '#FFD762',
          700: '#F5B800',
          800: '#CC9900',
          900: '#946F00',
          950: '#6B5000',
        },
        brandsky: {
          50: '#F5FBFF',
          100: '#EBF7FF',
          200: '#D6EEFF',
          300: '#BDE3FF',
          400: '#A3D9FF',
          500: '#85CCFF',
          600: '#62BDFF',
          700: '#29A6FF',
          800: '#0086E6',
          900: '#0065AD',
          950: '#00477A',
        },
      },
    },
    // --------------TYPOGRAPHY--------------
    fontFamily: {
      iranSans: ['IranSans'],
    },
  },
  plugins: [],
};
