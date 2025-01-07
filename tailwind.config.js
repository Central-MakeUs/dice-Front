/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './AppInner.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard-Medium', 'System'],
      },
      fontSize: {
        h1: ['24px', '120%'],
        h2: ['22px', '140%'],
        sub1: ['20px', '140%'],
        sub2: ['18px', '150%'],
        body1: ['16px', '150%'],
        body2: ['14px', '150%'],
        cap1: ['13px', '150%'],
        cap2: ['12px', '150%'],
        btn1: ['14px', '150%'],
      },
      fontWeight: {
        h1: '700',
        h2: '600',
        sub1: '700',
        sub2: '700',
        body1: '400',
        body2: '400',
        cap1: '600',
        cap2: '700',
        btn1: '600',
      },
      colors: {
        // Primary Color
        DEFAULT: 'black',

        // Gray Scale
        dark_gray: '#333333',
        deep_gray: '#666666',
        medium_gray: '#999999',
        light_gray: '#cccccc',

        // System Color
        purple: '#5B4FF4',
        green: '#4FF48E',
        yellow: '#FFD90C',
        red: '#FF357F',

        // Dim Color
        basic: 'rgba(0, 0, 0, 0.5)',
        light: 'rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
