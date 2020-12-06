module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      // 自动导入样式源文件
      // style: (name) => `${name}/style/less`,
      style: true
    }, 'vant']
  ]
}
