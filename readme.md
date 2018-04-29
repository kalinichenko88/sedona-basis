# Фундамент

Стартовый шаблон для верстки сайта.

## Быстрый старт

1. Скопировать в новый проект содержимое этого репозитория
2. Отредактировать или удалить файл `readme.md`
3. В файле `package.json` отредактировать значения:
  * `name` (название проекта или репозитория)
  * `version` (прописать `1.0.0`)
4. Установить зависимости командой `npm ci`
5. Запустить сервер разработки командой `gulp watch`
6. Начать кодить

## Таски

* `gulp` — запустить сборку
* `gulp watch` — запустить сборку, сервер и слежение за файлами
* `gulp build` — сборка версии проекта

## Структура папок и файлов

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

## Рекомендуемый лейаут

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
