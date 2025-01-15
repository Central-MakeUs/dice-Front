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
        H1: ['Pretendard-Bold', 'System'],
        H2: ['Pretendard-SemiBold', 'System'],
        SUB1: ['Pretendard-SemiBold', 'System'],
        SUB2: ['Pretendard-SemiBold', 'System'],
        SUB3: ['Pretendard-Medium', 'System'],
        BODY1: ['Pretendard-Medium', 'System'],
        BODY2: ['Pretendard-Medium', 'System'],
        CAP1: ['Pretendard-SemiBold', 'System'],
        CAP2: ['Pretendard-Bold', 'System'],
        BTN1: ['Pretendard-SemiBold', 'System'],
        BTN2: ['Pretendard-Medium', 'System'],
      },
      fontSize: {
        H1: '24px',
        H2: '22px',
        SUB1: '20px',
        SUB2: '18px',
        SUB3: '16px',
        BODY1: '15px',
        BODY2: '14px',
        CAP1: '13px',
        CAP2: '12px',
        BTN1: '14px',
        BTN2: '12px',
      },
      lineHeight: {
        H1: '120%',
        H2: '140%',
        SUB1: '140%',
        SUB2: '150%',
        SUB3: '150%',
        BODY1: '160%',
        BODY2: '160%',
        CAP1: '150%',
        CAP2: '150%',
        BTN1: '150%',
        BTN2: '120%',
      },
      backgroundColor: {
        basic: 'rgba(0, 0, 0, 0.5)',
        light: 'rgba(0, 0, 0, 0.2)',
      },
      dropShadow: {
        basicShadow: '0px 0px 4px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        // Primary Color
        DEFAULT: 'black',

        // Gray Scale
        dark_gray: '#333333',
        deep_gray: '#666666',
        medium_gray: '#999999',
        semiLight_gray: '#AAAAAA',
        light_gray: '#cccccc',

        // System Color
        purple: '#5B4FF4',
        green: '#4FF48E',
        yellow: '#FFD90C',
        red: '#FF357F',

        // Background Color
        back_gray: '#F4F4F4',

        // Stroke Color
        stroke: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
