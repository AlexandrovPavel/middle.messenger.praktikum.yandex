### Мессенджер
Учебное задание

- **За основу взят предоставленный дизайн**

https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?type=design&node-id=1-2&mode=design&t=wXjfarhhVYXgOi76-0

- **Проект доступен по ссылке**

https://tourmaline-rabanadas-37fd36.netlify.app/

### Сборка и запуск

npm install - устанавливает зависимости;

npm run start - билд проекта + раздача статики на express;

npm run build - билд проекта;

npm run dev - запуск дев окружения;

npm run lint:ts - Проверка ts файлов линтером(с учетом проверки типов);

npm run lint:ts:fix - Исправление ts файлов линтером;

npm run lint:less - Проверка less файлов style линтером;

npm run lint:less:fix - Исправление less файлов style линтером;

npm run prepare - прекоммит хуки;


## Структура проекта

public:
    тут вся статика (шрифты, иконки и тп)

src:
    app - общая настройка проекта(роутинг, стили переменных);

    common - часто переиспользуемые вещи (функции, стили);

    components - часто переиспользуемые компоненты;

    pages - страницы;

    widgets - это отдельне части модулей, которые используются только на определенных страницах;

## Линтеры

в eslint используется правила airbnb-base;

в stylelint используется правила stylelint-config-standard-less;


