var gulp = require('gulp')
var blok = require('gulp-blok')
var replace = require('gulp-replace')
var rename = require('gulp-rename')
var config = {
  blok: {
    apiVersion: 2,
    apiKey: require('./token'),
    basePath: 'deploy',
    environment: 'dev'
  }
}
var request = require('request')

gulp.task('copy:js', function () {
  return gulp.src('dist/_nuxt/*')
    .pipe(gulp.dest('deploy/assets/_nuxt'))
})

gulp.task('copy:html', function () {
  return gulp.src('dist/index.html')
    .pipe(replace(
      '<script data-n-head="true" src="//app.storyblok.com/f/storyblok-latest.js?t=qQTqOxTlxSrQiW7f9FANDwtt"></script>',
      '<script type="text/javascript">var StoryblokToken = \'{{ private_token }}\'</script><script src="//app.storyblok.com/f/storyblok-latest.js?t=\'{{ private_token }}\'" data-n-head="true"></script>'
    ))
    .pipe(replace('<script type="text/javascript" src="/_nuxt/', '<script src="{{ \'assets/_nuxt/'))
    .pipe(replace('<link rel="preload" href="/_nuxt/', '<link href="{{ \'assets/_nuxt/'))
    .pipe(replace('.js" as="script">', '.js\' | asset_url }}" as="script">'))
    .pipe(replace('.js">', '.js\' | asset_url }}">'))
    .pipe(replace('10s', '0s'))
    .pipe(replace('.js" type="text/javascript"></script>', '.js\' | asset_url }}" type="text/javascript"></script>'))
    .pipe(rename('page.liquid'))
    .pipe(gulp.dest('deploy/'))
})

gulp.task('deploy:live', ['copy:js', 'copy:html', 'storyblok:setup'], function () {
  config.blok.environment = 'live'

  return gulp.src('./deploy/**/*')
    .pipe(blok(config.blok))
})

gulp.task('storyblok:setup', function(cb) {
  request.get({
    url: 'https://mapi.storyblok.com/v1/get_space_info?token=' + config.blok.apiKey
  }, function(error, response, body) {
    if (error || !body) {
      throw error
    }
    let spaceInfo = JSON.parse(body)
    console.log('Deploying to', spaceInfo)
    config.blok.themeId = spaceInfo.space_id
    config.blok.domain = spaceInfo.hostname
    cb()
  })
})
