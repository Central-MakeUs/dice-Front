module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // nativewind(tailwind 설정)
    ['nativewind/babel'],
    ['react-native-reanimated/plugin'],
    // 절대경로 설정
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@assets': './src/assets',
          '@axios': './src/axios',
          '@components': './src/components',
          '@screens': './src/screens/',
          '@zustands': './src/zustands',
          '@server': './src/server',
          '@hooks': './src/hooks',
          '@layout': './src/layout',
          '@routes': './src/routes',
          '@type': './src/type',
          '@utils': './src/utils',
          '@config': './src/config',
          '@providers': './src/providers',
        },
      },
    ],
  ],
};
