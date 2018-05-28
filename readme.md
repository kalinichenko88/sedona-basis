# Фундамент

Стартовый шаблон для вёрстки сайта.

### Содержание

* [Как работает](#Как-работает)
  * [Быстрый старт](#Быстрый-старт)
  * [Сборка](#Сборка)
  * [Структура папок и файлов](#Структура-папок-и-файлов)
  * [Рекомендуемый лейаут](#Рекомендуемый-лейаут)
* Настройка
  * Основное
  * Цвета
  * Типографика
  * Отступы
  * Сетка
* Стиль
  * Иконки

## Как работает

### Быстрый старт

1. Скопировать в новый проект содержимое этого репозитория
2. Отредактировать или удалить файл `readme.md`
3. В файле `package.json` отредактировать значения:
  * `name` (название проекта или репозитория)
  * `version` (прописать `1.0.0`)
4. Установить зависимости командой `npm ci`
5. Запустить сервер разработки командой `gulp watch`
6. Начать кодить

### Сборка

Сайт собирается с помощью Галпа, вот его основные таски:

* `gulp` — запустить сборку
* `gulp watch` — запустить сборку, сервер и слежение за файлами
* `gulp build` — сборка версии проекта

### Структура папок и файлов

```bash
build/              # Папка сборки версии проекта
dist/               # Папка сборки, здесь работает сервер автообновлений
src/                # Исходные файлы
  blocks/             # Блоки
  img/                # Медиафайлы
  inc/                # Подключаемые части разметки
    doc-end.html        # Конец разметки документа
    doc-start.html      # Начало разметки документа
    page-footer.html    # Нижняя часть лейаута
    page-header.html    # Верхняя часть лейаута
  js/                 # Скрипты
    app.js              # Файл для подключения скриптов из блоков
    global.js           # Общие скрипты для всего сайта
  less/               # Стили
    global.less         # Общие стили для всего сайта
    main.less           # Файл для подключения стилей из блоков
    variables.less      # Файл с переменными
  index.html          # Индексный файл
```

### Рекомендуемый лейаут

```html
<div class="page">
  <header class="header">
    
  </header>

  <main class="main">
    
  </main>

  <footer class="footer">
    
  </footer>
</div>
```

## Настройка

Вся настройка производится через переменные в файле [variables.less](https://github.com/constlab/sedona-basis/blob/master/src/less/variables.less). Если не хватает текущих настроек, то допускается создание новых переменных для конкретного сайта.

### Основное

Шаг от которого строятся все последующие размеры:

```less
@rhythm: 4px;
```

Радиус скругления углов:

```less
@radius: @rhythm; // 4px
```

### Типографика

#### Шрифт

Шрифт — системный. Вторичный шрифт служит для заголовков H1, H2 и H3:

```less
@font-family-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "NotoColorEmoji", "Segoe UI Emoji", "Segoe UI Symbol";
@font-family-secondary: @font-family-primary; // -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "NotoColorEmoji", "Segoe UI Emoji", "Segoe UI Symbol"
```

#### Кегль и интерлиньяж

```less
// Normal

@font-size: (@rhythm * 4); // 16px
@line-height: (@rhythm * 7); // 28px

// Small

@font-size-smaller: (@rhythm * 3); // 12px
@line-height-smaller: (@rhythm * 5); // 20px

// Large

@font-size-larger: (@rhythm * 6); // 24px
@line-height-larger: (@rhythm * 8); // 32px

// Headers

@font-size-h1: (@rhythm * 8); // 32px
@line-height-h1: (@rhythm * 10); // 40px

@font-size-h1-larger: (@rhythm * 9); // 36px
@line-height-h1-larger: (@rhythm * 11); // 44px

@font-size-h2: @font-size-h1; // 32px
@line-height-h2: @line-height-h1; // 40px

@font-size-h2-larger: @font-size-h1-larger; // 36px
@line-height-h2-larger: @line-height-h1-larger; // 44px

@font-size-h3: (@rhythm * 5); // 20px
@line-height-h3: (@rhythm * 7); // 28px

@font-size-h3-larger: @font-size-h3; // 20px
@line-height-h3-larger: @line-height-h3; // 28px
```

### Анимация

```less
@duration: 0.2s;
@timing-function: ease-out;
```

### Цвета

```less
@base-primary: @dark-primary;
@base-secondary: @dark-secondary;
@base-hint: @dark-hint;
@base-divider: @dark-divider;
```

```less
@brand-primary: #fec906;
@brand-secondary: #fe3b48;
```

```less
@dark-primary: lighten(#000, 12%);
@dark-secondary: lighten(#000, 54%);
@dark-hint: lighten(#000, 72%);
@dark-divider: lighten(#000, 88%);
```

```less
@light-primary: #fff;
@light-secondary: darken(#fff, 30%);
@light-hint: darken(#fff, 50%);
@light-divider: darken(#fff, 72%);
```

```less
@link-primary: #007aff;
```

```less
@button-primary: @link-primary;
```

```less
@alert-success: #4cd964;
@alert-warning: #fc0;
@alert-danger: #ff3b30;
```
