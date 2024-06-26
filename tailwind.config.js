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

      // --------------TYPOGRAPHY--------------
      fontFamily: {
        iranSans: ['IranSans'],
      },

      // --------------LIGHT COLORS--------------
      colors: {
        kgblue: {
          50: '#F3F4FC',
          100: '#E7E9F8',
          200: '#CBCFF1',
          300: '#ABB1E8',
          400: '#7B84DB',
          500: '#3340BA',
          600: '#2D39A4',
          700: '#293394',
          800: '#202874',
          900: '#19205C',
          950: '#10153C',
        },
        kgorange: {
          50: '#FEF5F0',
          100: '#FEECE2',
          200: '#FDD9C4',
          300: '#FBC3A2',
          400: '#FAA97A',
          500: '#F88646',
          600: '#F66A18',
          700: '#DD5608',
          800: '#BB4907',
          900: '#803205',
          950: '#622604',
        },
        kggreen: {
          50: '#EDFDF8',
          100: '#DBFBF1',
          200: '#A8F5DE',
          300: '#72EEC9',
          400: '#20E4A9',
          500: '#19D19A',
          600: '#17BF8D',
          700: '#14A479',
          800: '#108965',
          900: '#0C644A',
          950: '#094936',
        },
        kgred: {
          50: '#FEF5F8',
          100: '#FEE7EE',
          200: '#FCCFDC',
          300: '#FAADC4',
          400: '#F887A9',
          500: '#F4457A',
          600: '#F11859',
          700: '#D40D48',
          800: '#B20B3D',
          900: '#82082C',
          950: '#52051C',
        },
        kgyellow: {
          50: '#FFFBF0',
          100: '#FFF9E5',
          200: '#FFF1C7',
          300: '#FFE9A8',
          400: '#FFE28A',
          500: '#FFD762',
          600: '#FABB00',
          700: '#DBA400',
          800: '#B88A00',
          900: '#856300',
          950: '#614900',
        },
        kgsky: {
          50: '#F5FBFF',
          100: '#E5F4FF',
          200: '#CCEAFF',
          300: '#ADDDFF',
          400: '#8ACEFF',
          500: '#62BDFF',
          600: '#33AAFF',
          700: '#0092FA',
          800: '#0077CC',
          900: '#005694',
          950: '#004170',
        },
      },
    },
  },
  plugins: [],
};
