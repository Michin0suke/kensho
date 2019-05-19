var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var notify = require('gulp-notify')
var rename = require('gulp-rename')
var cleanCSS = require('gulp-clean-css')
var sftp = require('gulp-sftp-up4')
// var plumber = require('gulp-plumber');
var typescript = require('gulp-typescript')
// var debug = require('gulp-debug');

gulp.task('upload', function () {
  console.log('upload started')
  return gulp.src(global.filesrc, { base: './' })
    // .pipe(plumber())
    .pipe(sftp({
      host: '118.27.14.141',
      // port: 21,
      user: 'michinosuke',
      pass: 'patapon318',
      remotePath: global.remotepath
      // timeout:100000
    }))
    .pipe(notify({
      title: global.filetype + 'をアップロードしました',
      message: new Date(),
      sound: 'Pop',
      icon: 'icon.png'
    }))
})

// .min.cssを生成するタスクの設定
gulp.task('mincss', function () {
  return gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')// 上のタスクで出力したcssファイル
    .pipe(cleanCSS()) // cssを圧縮
    .pipe(rename({ extname: '.min.css' })) // 名前を.min.cssにする
    .pipe(gulp.dest('./dist/css')) // 出力
    .pipe(notify({
      title: 'bootstrap.cssとbootstrap.min.cssをコンパイルしました。',
      message: new Date(),
      sound: 'Pop',
      icon: 'icon.png'
    }))
})

// Sassをコンパイルするタスクの設定
gulp.task('sass', function () {
  return gulp.src('node_modules/bootstrap/scss/*.scss')// コンパイル対象のSassファイル
    .pipe(sass()) // コンパイル実行
    .pipe(autoprefixer()) // ベンダープレフィックスの付与
    .pipe(gulp.dest('node_modules/bootstrap/dist/css', 'src/bootstrap/css')) // 出力
})

gulp.task('ts', function () {
  // 出力オプション
  var options = {
    out: 'main.js',
    removeComments: true,
    noImplicitAny: true // 暗黙的にanyを使っているところでエラー
  }

  gulp.src('./src/typescript/*.ts')
  // '!./node_modules/**' //node_modules配下は除外する
    .pipe(typescript(options))
    .pipe(gulp.dest('./dest/js'))
})

gulp.task('default', function () {
  gulp.watch('./src/*.php',
    gulp.series(
      function () {
        global
          .filetype = 'php'
            .filesrc = 'src/*.php'
              .remotepath = '/var/www/kensho'
      },
      gulp.task('upload')
    ))

  gulp.watch('./src/*.html',
    gulp.series(
      function () {
        console.log('wwi')
        global
          .filetype = 'html'
            .filesrc = 'src/*.html'
              .remotepath = '/var/www/kensho'
      },
      gulp.task('upload')
    ))

  gulp.watch('./src/typescript/*.js',
    gulp.series(
      function () {
        global
          .filetype = 'ts'
            .filesrc = 'src/*.php'
              .remotepath = '/var/www/kensho'
      },
      gulp.task('ts'),
      gulp.task('upload')
    ))

  gulp.watch('./src/sass/*.scss',
    gulp.series(
      function () {
        global
          .filetype = 'css'
            .filesrc = 'src/css/*.css'
              .remotepath = '/var/www/kensho'
      },
      gulp.task('sass'),
      gulp.task('mincss'),
      gulp.task('upload')
    ))
})
