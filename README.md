# webpack-1
webpack lesson 1 Посмотрим как работают модули js без webpack

https://frontend200tb.github.io/webpack-1/

Проект 1
без webpack
Посмотрим как работают модули js без webpack

1. В папке проекта лежат файлы index.html, favicon.svg, style.css, index.js
2. Модули js (файлы a.js, b.js, sum.js) лежат в папке js
3. В файле index.js делаем импорты из файлов a.js, b.js, sum.js (в которых делаем экспорты)
4. В файле index.html подключены favicon.svg, style.css и index.js
5. В следующем проекте посмотрим как работает webpack без настроек
Важно ! Запускаем проект с сервера, так как локально модули не работают

Запускаем проект с сервера, так как локально модули не работают
Плюсом является разработка функционала в отдельных файлах
Минусом является загрузка множества файлов js при открытии страницы в браузере
Чтобы избежать этого минуса нужно собрать все эти файлв в один main.js
Плюсом будет загрузка всего одного файла js при открытии страницы в браузере
При этом разработка продолжается с множеством файлов, что очень удобно

# Иван Каширин frontend200tb
