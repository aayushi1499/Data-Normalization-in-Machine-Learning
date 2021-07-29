const gulp = require('gulp');
const connect = require('gulp-connect');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('connect', () => {
  connect.server({host: '0.0.0.0', root: './', port: 3000, livereload: true});
});

gulp.task('less', () => {
  return gulp
    .src('assets/less/*.less')
    .pipe(concat('main.css'))
    .pipe(less())
    .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'))
    .pipe(connect.reload());
});

gulp.task('html', () => {
  return gulp
    .src('index.html')
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch('index.html', ['html']);
  gulp.watch('assets/less/*.less', ['less']);
});

gulp.task('default', ['less', 'connect', 'watch']);
$(document).ready(function(){ 
 
  $(".primaryContained").on('click', function(){
  $(".comment").addClass("commentClicked");
});//end click
$("textarea").on('keyup.enter', function(){
  $(".comment").addClass("commentClicked");
});//end keyup
});//End Function

new Vue({
  el: "#app",
  data:{
     title: 'Add a comment',
    newItem: '',
    item: [],
  },
  methods:{
    addItem  (){
    this.item.push(this.newItem);
      this.newItem = "";
    }
}

});