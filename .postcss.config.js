module.exports = {
  plugins: [
    require('postcss-nested-props'),
    require('postcss-nested'),
    require('postcss-gridlover'),
    require('postcss-for'),
    require('postcss-mixins'),
    require('postcss-font-magician'),
    require('postcss-cssnext'),
  ],
  options: {parser: require('sugarss')}
}
