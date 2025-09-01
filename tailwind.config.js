/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F9FF',
          500: '#3C83F6',
          600: '#4B73FF',
          700: '#4F46E5',
        },
        success: {
          50: '#F3FAF6',
          500: '#21C45D',
          600: '#16A249',
        },
        warning: {
          500: '#FCAA1C',
          600: '#F59F0A',
        },
        danger: {
          500: '#EF4444',
          600: '#FF0105',
        },
        neutral: {
          25: '#FAFBFC',
          50: '#F9FAFB',
          100: '#F5F5F7',
          200: '#EBEBEF',
          300: '#E5E7EB',
          400: '#9C9CA4',
          500: '#737791',
          600: '#3A3734',
          700: '#27272B',
          800: '#1E293B',
          900: '#141522',
        },
        orange: {
          500: '#FF7F00',
        },
        rating: {
          0: '#B72224',
          1: '#D52029', 
          2: '#E95223',
          3: '#EA6F22',
          4: '#F6A726',
          5: '#FDC729',
          6: '#EBDB0A',
          7: '#E5E044',
          8: '#C2D234',
          9: '#AEC93C',
          10: '#66B44E'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 21.6px 0 rgba(147, 147, 147, 0.51)',
        'light': '0 4px 16px 0 #E2EEFD',
        'dropdown': '0 20px 50px 0 rgba(55, 69, 87, 0.10)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      }
    },
  },
  plugins: [],
}