# Сетка

## Особенности

* Может располагаться только внутри `.scene`;
* Может идти только на одном уровне, вкладывать друг в друга нельзя;
* По-умолчанию имеет максимальную ширину `@grid-breakpoints-xl`;
* По-умолчанию имеет 12-колоночную сетку. Изменяется в переменной `@grid-columns`;
* Колонки имеют внутренние отступы в половину `@grid-gutter`.

## Разметка

```html
<div class="grid">
  <div class="grid__col">
    …
  </div>
  
  <div class="grid__col">
    …
  </div>
  
  …
</div>
```

## Модификаторы

### `grid`

#### Горизонтальное выравнивание

* `grid--jc-fs`
* `grid--jc-c`
* `grid--jc-fe`
* `grid--jc-sb`
* `grid--jc-sa`

#### Вертикальное выравнивание

* `grid--ai-fs`
* `grid--ai-c`
* `grid--ai-fe`
* `grid--ai-s`
* `grid--ai-b`

#### Без максимальной ширины

* `grid--fluid`

#### Больший отступ между колонками по вертикали

* `grid--diff`

### `grid__col`

#### Ширины для разных экранов

* `grid__col--1`, `grid__col--2`, `grid__col--3`, …
* `grid__col--sm-1`, `grid__col--sm-2`, `grid__col--sm-3`, …
* `grid__col--md-1`, `grid__col--md-2`, `grid__col--md-3`, …
* `grid__col--lg-1`, `grid__col--lg-2`, `grid__col--lg-3`, …
* `grid__col--xl-1`, `grid__col--xl-2`, `grid__col--xl-3`, …

#### Отступ слева кратный размеру колонки

* `grid__col--offset-0`, `grid__col--offset-1`, `grid__col--offset-2`, …
* `grid__col--sm-offset-0`, `grid__col--sm-offset-1`, `grid__col--sm-offset-2`, …
* `grid__col--md-offset-0`, `grid__col--md-offset-1`, `grid__col--md-offset-2`, …
* `grid__col--lg-offset-0`, `grid__col--lg-offset-1`, `grid__col--lg-offset-2`, …
* `grid__col--xl-offset-0`, `grid__col--xl-offset-1`, `grid__col--xl-offset-2`, …
