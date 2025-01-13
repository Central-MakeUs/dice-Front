module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // nativewind(tailwind 설정)
    ['nativewind/babel'],
    ['react-native-reanimated/plugin'],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
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
