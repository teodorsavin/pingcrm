const path = require('path')
const mix = require('laravel-mix')
const cssImport = require('postcss-import')
const cssNesting = require('postcss-nesting')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.extend( 'i18n', new class {
  webpackRules() {
    return [
      {
        resourceQuery: /blockType=i18n/,
        type:          'javascript/auto',
        loader:        '@intlify/vue-i18n-loader',
      },
    ]
  }
}(),
)

mix.i18n()
  .js('resources/js/app.js', 'public/js')
  .vue({ runtimeOnly: true })
  .alias({ '@': 'resources/js' })
  .postCss('resources/css/app.css', 'public/css', [
    // prettier-ignore
    cssImport(),
    cssNesting(),
    require('tailwindcss'),
  ])
  .version()
  .sourceMaps()
