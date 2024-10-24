const { src, dest, parallel, series, watch } = require("gulp");
const del = require("del");
const sass = require("gulp-sass")(require("sass"));
const includeFiles = require("gulp-include");
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const concat = require("gulp-concat");

function styles() {
  // Создаем массив с файлами для компиляции
  const scssFiles = [
    "./src/assets/styles/template-styles.scss",
    "./src/assets/styles/other.scss",
  ];

  return src(scssFiles) // Загружаем все SCSS файлы из массива
    .pipe(sass().on("error", sass.logError)) // Компилируем SCSS в CSS
    .pipe(dest("./public/css/")) // Сохраняем скомпилированные файлы
    .pipe(browserSync.stream()); // Обновляем браузер
}

function pugToHtml() {
  return src("./src/pug/pages/*.pug")
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
  watch(
    ["./src/blocks/libs/**/*.js", "./src/blocks/components/**/*.js"],
    scripts
  );
  watch(
    [
      "./src/assets/styles/*.scss",
      "./src/blocks/libs/**/*.scss",
      "./src/blocks/components/**/*.scss",
    ],
    styles
  );
  watch(
    [
      "./src/pug/pages/*.pug",
      "./src/blocks/libs/**/*.pug",
      "./src/blocks/components/**/*.pug",
    ],
    pugToHtml
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

/*function scripts() {
  return src("./src/assets/js/script.js")
    .pipe(dest("./public/js/"))
    .pipe(browserSync.stream()); // Добавлено stream для перезагрузки
}*/

function scripts() {
  return src([
    "./src/blocks/libs/**/*.js", // Все JS файлы из libs
    "./src/blocks/components/**/*.js", // Все JS файлы из components
  ])
    .pipe(plumber({ errorHandler: (err) => console.error(err.message) })) // Обработка ошибок
    .pipe(concat("script.js")) // Объединяем все в один файл script.js
    .pipe(dest("./public/js/")); // Сохраняем результат в ./public/js/
}

function copyResources() {
  return src("./src/assets/resources/**/*").pipe(dest("./public/resources"));
}

function copyIcons() {
  return src("./src/assets/icons/**/*").pipe(dest("./public/icons"));
}

function copyImage() {
  return src("./src/assets/img/**/*").pipe(dest("./public/img"));
}

function copyFont() {
  return src("./src/assets/fonts/**/*").pipe(dest("./public/fonts"));
}

exports.browsersync = browsersync;
exports.clean = clean;
exports.scripts = scripts;
exports.styles = styles;
exports.pages = pages;
exports.copyResources = copyResources;
exports.copyImage = copyImage;
exports.copyIcons = copyIcons;
exports.copyFont = copyFont;
exports.pugToHtml = pugToHtml;

exports.default = parallel(
  styles,
  scripts,
  copyResources,
  copyImage,
  copyIcons,
  copyFont,
  pugToHtml,
  browsersync,
  watch_dev
);

exports.build = series(clean, styles, scripts, copyResources, pugToHtml);

// Путь к компонентам
const componentsPath = "./src/blocks/components/";
const publicPath = "./bitrix/";

// Задача для компиляции SCSS
function compileStyles() {
  return src(`${componentsPath}/**/*.scss`) // Находим все SCSS файлы
    .pipe(plumber({ errorHandler: (err) => console.error(err.message) })) // Обработка ошибок
    .pipe(sass().on("error", sass.logError)) // Компилируем SCSS в CSS
    .pipe(rename({ basename: "style" }))
    .pipe(
      dest((file) => {
        const outputPath = publicPath;
        return outputPath; // Сохраняем в аналогичную структуру
      })
    );
}

// Задача для обработки build.pug
function compilePug() {
  return src(`${componentsPath}/**/build.pug`) // Находим все build.pug файлы
    .pipe(plumber({ errorHandler: (err) => console.error(err.message) })) // Обработка ошибок
    .pipe(pug())
    .pipe(
      dest((file) => {
        const outputPath = publicPath;
        return outputPath; // Сохраняем в аналогичную структуру
      })
    );
}

// Задача для обработки JavaScript
function processScripts() {
  return src(`${componentsPath}/**/*.js`) // Находим все JS файлы
    .pipe(plumber({ errorHandler: (err) => console.error(err.message) })) // Обработка ошибок
    .pipe(rename({ basename: "script" })) // Переименовываем файл в script.js
    .pipe(
      dest((file) => {
        const outputPath = publicPath;
        return outputPath; // Сохраняем в аналогичную структуру
      })
    );
}

// Задача по умолчанию
const bitrix = series(compileStyles, compilePug, processScripts);

// Экспортируем задачи
exports.styles = compileStyles;
exports.pug = compilePug;
exports.scripts = processScripts;

exports.bitrix = bitrix;
