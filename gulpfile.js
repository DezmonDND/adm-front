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
    .pipe(pug())
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
}

function watch_dev() {
  watch(["./src/js/script.js", "./src/components/**/*.js"], scripts);
  watch(["./src/styles/style.scss", "./src/components/**/*.scss"], styles).on(
    "change",
    browserSync.reload
  );
  watch(["./src/pages/*.pug", "./src/components/**/*.pug"], pugToHtml).on(
    "change",
    browserSync.reload
  );
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
    open: true,
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
    .pipe(browserSync.reload({ stream: true }));
}

async function clean() {
  return del.sync("./public/", { force: true });
}

function scripts() {
  return src("./src/js/script.js").pipe(dest("./public/js/"));
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
  //   clean,
  styles,
  scripts,
  copyResources,
  pugToHtml,
  browsersync,
  watch_dev
);

exports.build = series(clean, styles, scripts, copyResources, pugToHtml);
