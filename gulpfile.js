const { src, dest, parallel, series, watch } = require("gulp");
const del = require("del");
const sass = require("gulp-sass")(require("sass"));
const includeFiles = require("gulp-include");
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");

function styles() {
  return src("./src/styles/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./public/css/"))
    .pipe(browserSync.stream());
}

function pugToHtml() {
  return src("./src/pages/*.pug")
    .pipe(
      pug().on("error", function (err) {
        console.error(err);
        this.emit("end");
      })
    )
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
}

function watch_dev() {
  watch(["./src/js/script.js", "./src/components/**/*.js"], scripts);
  watch(["./src/styles/style.scss", "./src/components/**/*.scss"], styles);
  watch(["./src/pages/*.pug", "./src/components/**/*.pug"], pugToHtml);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "./public/",
      serveStaticOptions: {
        extensions: ["html"],
      },
    },
    port: 8080,
    ui: { port: 8081 },
    open: false, // или true, если хотите, чтобы браузер открывался автоматически
  });
}

function pages() {
  return src("./src/pages/*.html")
    .pipe(
      includeFiles({
        includePaths: "./src/components/**/",
      })
    )
    .pipe(dest("./public/"))
    .pipe(browserSync.stream());
}

async function clean() {
  return del("./public/", { force: true });
}

function scripts() {
  return src("./src/js/script.js")
    .pipe(dest("./public/js/"))
    .pipe(browserSync.stream()); // Добавлено stream для перезагрузки
}

function copyResources() {
  return src("./src/resources/**/*").pipe(dest("./public/resources"));
}

exports.browsersync = browsersync;
exports.clean = clean;
exports.scripts = scripts;
exports.styles = styles;
exports.pages = pages;
exports.copyResources = copyResources;
exports.pugToHtml = pugToHtml;

exports.default = parallel(
  styles,
  scripts,
  copyResources,
  pugToHtml,
  browsersync,
  watch_dev
);

exports.build = series(clean, styles, scripts, copyResources, pugToHtml);
