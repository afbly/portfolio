module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1400px'
    },
    colors: {
      primary: '#FFF8F5',
      secondary: '#FFEFE8',
      tertiary: '#EC6D41',
      quaternary: '#2F2F2F',
      darkPrimary: '#592716'
    },
    fontFamily: {
      body: ['Avenir', 'sans-serif'],
      display: ['Avenir', 'sans-serif']
    },
    fontSize: {
      xxs: '.625rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    borderWidth: {
      DEFAULT: '.0625rem',
      0: '0',
      1.5: '1.5px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    extend: {
      spacing: {
        1.25: '0.3125rem',
        1.75: '0.4375rem',
        2.25: '0.5625rem',
        2.75: '0.6875rem',
        3.25: '0.8125rem',
        3.75: '0.9375rem',
      },
      inset: {
        '100%': '100%',
      }
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    extend: {
      backgroundColor: ['active', 'disabled', 'focus-visible'],
      backgroundOpacity: ['active', 'disabled', 'focus-visible'],
      borderColor: ['active', 'disabled', 'focus-visible'],
      borderOpacity: ['active', 'disabled', 'focus-visible'],
      borderStyle: [
        'hover',
        'disabled',
        'first',
        'focus',
        'focus-visible',
        'last',
      ],
      borderWidth: ['first', 'last'],
      boxShadow: ['active', 'focus-visible'],
      dropShadow: ['hover', 'focus'],
      margin: ['even', 'odd', 'first', 'last'],
      opacity: ['disabled', 'focus-visible'],
      outline: ['focus-visible'],
      padding: ['first', 'last'],
      placeholderColor: ['focus-visible'],
      placeholderOpacity: ['focus-visible'],
      ring: ['focus-visible'],
      ringColor: ['focus-visible'],
      ringOffsetColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringOpacity: ['focus-visible'],
      ringWidth: ['active', 'focus', 'focus-visible', 'hover'],
      textColor: ['active', 'disabled', 'focus-visible'],
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}

