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

Вся настройка производится через переменные в файле `variables.less`.

### Основное

```less
@rhythm: 4px;
```

Шаг от которого строятся все последующие размеры.

```less
@radius: @rhythm;
```

Радиус скругления углов равен основному шагу.

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
