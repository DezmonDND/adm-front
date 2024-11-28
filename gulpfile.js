const { src, dest, parallel, series, watch } = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const includeFiles = require('gulp-include');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const gulpIf = require('gulp-if');
const fs = require('fs');
const path = require('path');
const replace = require('gulp-replace');
const through2 = require('through2');
const config = require('./gulp.config.js');

function styles() {
    // Создаем массив с файлами для компиляции
    const scssFiles = [
        './src/assets/styles/template-styles.scss',
        './src/assets/styles/styles.scss',
        './src/assets/styles/other.scss',
    ];

    return src(scssFiles) // Загружаем все SCSS файлы из массива
        .pipe(sass().on('error', sass.logError)) // Компилируем SCSS в CSS
        .pipe(dest('./public/css/')) // Сохраняем скомпилированные файлы
        .pipe(browserSync.stream()); // Обновляем браузер
}

function pugToHtml() {
    return src('./src/pug/pages/*.pug')
        .pipe(
            pug().on('error', function (err) {
                console.error(err);
                this.emit('end');
            }),
        )
        .pipe(dest('./public'))
        .pipe(browserSync.stream());
}

function watch_dev() {
    watch(['./src/blocks/libs/**/*.js', './src/blocks/components/**/*.js'], scripts);
    watch(
        [
            './src/assets/styles/*.scss',
            './src/blocks/libs/**/*.scss',
            './src/blocks/components/**/*.scss',
        ],
        styles,
    );
    watch(
        ['./src/pug/pages/*.pug', './src/blocks/libs/**/*.pug', './src/blocks/components/**/*.pug'],
        pugToHtml,
    );
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: './public/',
            serveStaticOptions: {
                extensions: ['html'],
            },
        },
        port: 8080,
        ui: { port: 8081 },
        open: true, // или true, если хотите, чтобы браузер открывался автоматически
    });
}

function pages() {
    return src('./src/pages/*.html')
        .pipe(
            includeFiles({
                includePaths: './src/components/**/',
            }),
        )
        .pipe(dest('./public/'))
        .pipe(browserSync.stream());
}

async function clean() {
    return del(['./public/', './bitrix/'], { force: true });
}

function scripts() {
    return src([
        './src/assets/js/lib/*.js', // Все библиотеки
        './src/blocks/libs/**/*.js', // Все JS файлы из libs
        './src/blocks/components/**/*.js', // Все JS файлы из components
    ])
        .pipe(plumber({ errorHandler: (err) => console.error(err.message) })) // Обработка ошибок
        .pipe(concat('script.js')) // Объединяем все в один файл script.js
        .pipe(dest('./public/js/')); // Сохраняем результат в ./public/js/
}

function copyResources() {
    return src('./src/assets/resources/**/*').pipe(dest('./public/resources'));
}

function copyIcons() {
    return src('./src/assets/icons/**/*').pipe(dest('./public/icons'));
}

function copyImage() {
    return src('./src/assets/img/**/*').pipe(dest('./public/img'));
}

function copyFont() {
    return src('./src/assets/fonts/**/*').pipe(dest('./public/fonts'));
}

function copyJS() {
    return src('./src/assets/js/**/*').pipe(dest('./public/js/'));
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
exports.copyJS = copyJS;
exports.pugToHtml = pugToHtml;

exports.default = parallel(
    styles,
    scripts,
    copyResources,
    copyImage,
    copyIcons,
    copyFont,
    copyJS,
    pugToHtml,
    browsersync,
    watch_dev,
);

exports.build = series(clean, styles, scripts, copyResources, pugToHtml);

class BitrixBuilder {
    constructor() {
        this.componentsPath = './src/blocks/components/';
        this.publicComponentsPath = './bitrix/components';
        this.publicTemplatePath = './bitrix/template';
        this.publicPagePath = './bitrix';
        this.templatePath = config.templatePath;

        this.paths = {
            resources: {
                src: './src/assets/resources/**/*',
                dest: './bitrix/resources',
            },
            icons: {
                src: './src/assets/icons/**/*',
                dest: './bitrix/template/icons',
            },
            img: { src: './src/assets/img/**/*', dest: './bitrix/template/img' },
            fonts: {
                src: './src/assets/fonts/**/*',
                dest: './bitrix/template/fonts',
            },
            js: {
                src: './src/assets/js/*',
                dest: './bitrix/template/js',
            },
            js_lib: {
                src: './src/assets/js/lib/**/*',
                dest: './bitrix/template/js/lib',
            },
        };
    }

    // Универсальная функция копирования
    copyAssets(done) {
        Object.values(this.paths).forEach(({ src: source, dest: destination }) => {
            src(source).pipe(dest(destination));
        });
        done();
    }

    // Проверка на наличие build.pug в папке
    hasBuildPug(file) {
        const directory = path.dirname(file.path);
        return fs.existsSync(path.join(directory, 'build.pug'));
    }

    // Компиляция SCSS с фильтрацией
    compileStylesComponents() {
        return src(`${this.componentsPath}/**/*.scss`)
            .pipe(plumber({ errorHandler: (err) => console.error(err.message) }))
            .pipe(
                // Проверка наличия build.pug с помощью через поток
                through2.obj((file, _, cb) => {
                    if (this.hasBuildPug(file)) {
                        cb(null, file); // Пропускаем файл, если build.pug существует
                    } else {
                        cb(); // Пропускаем файл, если build.pug не существует
                    }
                }),
            )
            .pipe(sass().on('error', sass.logError)) // Компилируем SCSS в CSS
            .pipe(rename({ basename: 'style' }))
            .pipe(dest(this.publicComponentsPath)); // Сохраняем в целевую папку
    }

    // Компиляция Pug файлов
    compilePugComponents() {
        return src(`${this.componentsPath}/**/build.pug`)
            .pipe(plumber({ errorHandler: (err) => console.error(err.message) }))
            .pipe(pug({ pretty: true }))
            .pipe(replace(/\.\/resources/g, '/resources')) // Заменяем ./resources на /resources
            .pipe(
                replace(
                    /(<img[^>]+src=["'])(\.\/|\.\.\/)*?(icons|img)\//g,
                    (match, prefix, p1, folder) => {
                        return `${prefix}${this.templatePath}/${folder}/`;
                    },
                ),
            )
            .pipe(rename({ basename: 'template', extname: '.html.php' })) // Переименовываем в template.html.php
            .pipe(dest(this.publicComponentsPath));
    }

    // Обработка JavaScript с фильтрацией
    processScriptsComponents() {
        return src(`${this.componentsPath}/**/*.js`)
            .pipe(plumber({ errorHandler: (err) => console.error(err.message) }))
            .pipe(gulpIf(this.hasBuildPug.bind(this), rename({ basename: 'script' })))
            .pipe(
                dest((file) => {
                    return this.publicComponentsPath;
                }),
            );
    }

    // Сборка страниц
    pugPages() {
        return src('./src/pug/pages/*.pug')
            .pipe(
                pug({ pretty: true }).on('error', function (err) {
                    console.error(err);
                    this.emit('end');
                }),
            )
            .pipe(replace(/\.\/resources/g, '/resources')) // Заменяем ./resources на /resources
            .pipe(
                replace(
                    /(<img[^>]+src=["'])(\.\/|\.\.\/)*?(icons|img)\//g,
                    (match, prefix, p1, folder) => {
                        return `${prefix}${this.templatePath}/${folder}/`;
                    },
                ),
            )
            .pipe(dest(this.publicPagePath));
    }

    templateScripts() {
        return src([
            './src/blocks/libs/**/*.js', // Все JS файлы из libs
        ])
            .pipe(plumber({ errorHandler: (err) => console.error(err.message) })) // Обработка ошибок
            .pipe(concat('script.js')) // Объединяем все в один файл script.js
            .pipe(dest(this.publicTemplatePath + '/js')); // Сохраняем результат в ./public/js/
    }

    templateStyles() {
        // Создаем массив с файлами для компиляции
        const scssFiles = [
            './src/assets/styles/template-styles.scss',
            './src/assets/styles/styles.scss',
        ];

        return src(scssFiles) // Загружаем все SCSS файлы из массива
            .pipe(sass().on('error', sass.logError)) // Компилируем SCSS в CSS
            .pipe(replace(/url\(\s*['"]?(\.\.\/)+([^'")]+)['"]?\s*\)/g, 'url("./$2")'))
            .pipe(
                rename((path) => {
                    // Переименовываем файл
                    if (path.basename === 'template-styles') {
                        path.basename = 'template_styles'; // Изменяем базовое имя
                    }
                }),
            )
            .pipe(dest(this.publicTemplatePath)); // Сохраняем скомпилированные файлы
    }

    // Сборка всех задач
    get buildTasks() {
        return series(
            this.copyAssets.bind(this),

            this.pugPages.bind(this),
            this.templateScripts.bind(this),
            this.templateStyles.bind(this),

            this.compileStylesComponents.bind(this),
            this.compilePugComponents.bind(this),
            this.processScriptsComponents.bind(this),
        );
    }
}

const bitrixBuilder = new BitrixBuilder();

// Экспортируем задачи
exports.styles = series(
    bitrixBuilder.compileStylesComponents.bind(bitrixBuilder),
    bitrixBuilder.templateStyles.bind(bitrixBuilder),
);
exports.copyAssets = bitrixBuilder.copyAssets.bind(bitrixBuilder);
exports.pug = series(
    bitrixBuilder.compilePugComponents.bind(bitrixBuilder),
    bitrixBuilder.pugPages.bind(bitrixBuilder),
);
exports.scripts = series(
    bitrixBuilder.templateScripts.bind(bitrixBuilder),
    bitrixBuilder.processScriptsComponents.bind(bitrixBuilder),
);
exports.bitrix = bitrixBuilder.buildTasks;
