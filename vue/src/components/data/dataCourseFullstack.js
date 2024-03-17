let fullstack = {
    part1: {
        name: 'Основы',
        lessons: '2-3',
        descr: `Можно все узнать самому где-то <a class="description-link" target="_blank" href="https://clck.ru/397699"> тут </a>.  
                 Записывайтесь на этот раздел только если сомневайтесь в ваших знаниях или совсем ничего не понимаете, т.к. позавчера начали учить PHP и под корень решили изменить свою жизнь)`,
        courses: [
            {
                name: 'Переменные, типы, операторы',
                desc: 'Самае простые вещи для самых маленьких... ',
                difficulty: 1, need: 10, isFree: 1, state: false
            },
            {name: 'Циклы', desc: 'Foreach, for, while', difficulty: 1, need: 10, isFree: 1, state: false},
            {name: 'Пользовательские функции', desc: 'Простые вещи для самых маленьких... ', difficulty: 1,isFree: 1, need: 10, state: false},
            {name: 'Конструкции языка', desc: 'if else, switch, require, try catch, namespace, use',difficulty: 1, need: 10, isFree: 1, state: false},
            {name: 'Функции для работы с массивами',
                desc: 'var_dump, explode, implode, unset, array_key_exists, array_merge, count, array_push, array_shift, array_unique, sort ...', difficulty: 2, need: 10, state: false},
            {name: 'Функции для работы со строками', desc: 'echo, str_replace, trim, strlen, str_split, strpos, substr ...', difficulty: 1, need: 10, state: false},
            {name: 'Работа с файлами', desc: 'Чтение из файла, запись в файл', difficulty: 1,isFree: 0, need: 10, state: false},
            {name: 'Основы JS', desc: 'Все тоже самое только для JS. В курсе будет не много JS-а поэтому будет ускоенный курс молодого бойца', difficulty: 1, need: 10, state: false},
            {name: 'Jquery Ajax', desc: 'Jquery Ajax офгительная штука, нужно занть: $.post, $.get. Axios тоже подойдет', difficulty: 2, need: 10, state: false},
            {name: 'Адаптивная верстка (bootstrap)', desc: 'Как работает сиситема сеток, что-то простое сверстаем для общего понимания', difficulty: 1, need: 10, state: false},
        ],
    },
    part2: {
        name: 'PHP ООП',
        lessons: '1-3',
        descr: `Можно все узнать самому где-то : <a class="description-link" target="_blank" href="https://clck.ru/3983fu"> тут </a>. 
                Очень рекомендую этого автора! Он хорош в ООП! Old school!!! Этот раздел один из самых важных! Без него не получится освоить основной курс! Уделите ему наибольшее кол-во времени при самостоятельной подготовке!`,
        courses: [
            {name: 'Принципы ООП', desc: 'Вся теория по ООП все о классах, объектах, интерфейсах, трейтах...', isFree: 1, difficulty: 2, need: 8, state: false},
            {name: 'ООП на минималках', desc: 'Практика ООП. Решаем простые задачи на понимание ООП', difficulty: 3, need: 10, state: false},
            {name: 'ООП. Абстрактные классы интерфейсы', desc: 'Использование абстрактые классов, интерфейсов', difficulty: 4, need: 9, state: false},
            {name: 'ООП', desc: 'Задачи на ООП. Хорошее знание ООП позволяет быстро разбираться в остальных технологиях', difficulty: 4, need: 9, state: false},
        ]
    },
    part3: {
        name: 'Основы SQL',
        lessons: '2-3',
        descr: `Можно все узнать самому где то <a class="description-link" target="_blank" href="https://clck.ru/3977Y7"> тут </a>.`,
        courses: [
            {
                name: 'Установка OpenServer', desc: 'В OpenServer уже все есть для работы с SQL установим его, настроим',
                difficulty: 0, need: 0, state: false
            },
            {name: 'Select, insert, update', desc: '-',difficulty: 2, need: 10, state: false},
            {name: 'Связи, отношения между таблицами, Join-ы', desc: '-',difficulty: 3, need: 10, state: false},
            {name: 'Группировка, сортировка', desc: '-',difficulty: 3, need: 10, state: false},
            {name: 'Агрегатные функции', desc: '-',difficulty: 2, need: 10, state: false},
            {name: 'Ключи, индексы', desc: '-',difficulty: 3, need: 10, state: false},
        ]
    },
    // START COURSE HERE
    part4: {
        name: 'Yii2 Детский сад',
        lessons: '5-8',
        descr: 'Курс по фулстеку начинается отсюда! Тут будем проходить самые основы Yii2',
        courses: [
            {name: 'ООП в Yii2', desc: 'ООП ключ к освоению фреймворка Yii2', isFree: 1, difficulty: 4, need: 9, state: false},
            {
                name: 'Настройка окружения',
                desc: 'OpenServer, phpstorm(по желанию, но я буду работать в нем), composer, Yii2, XDebug',
                isFree: 1, difficulty: 2, need: 10, state: false
            },
            {
                name: 'Общие принципы, MVC, настройки, роуты',
                desc: 'Точка входа, откуда все начинается. Конфиги, маршрутизатор, модель вид контроллер',
                isFree: 1, difficulty: 2, need: 10, state: false
            },
            {name: 'Котроллер, вид', desc: 'Базоввые классы  как с ними работать', isFree: 1, difficulty: 2, need: 10, state: false},
            {name: 'Подключаем БД', desc: 'Подкючаем в фреймворк и в phpstorm', isFree: 1, difficulty: 2, need: 10, state: false},
            {
                name: 'Базовые миграции', desc: 'createTable, renameTable, dropTable, truncateTable, addColumn, dropColumn',
                difficulty: 3, need: 9, state: false, isFree: 1
            },
            {
                name: 'Базовая модель',
                desc: 'Что такое модель. И что такое слой модели',
                difficulty: 2, isFree: 1,
                need: 10, state: false
            },
            {name: 'Работа с формами', desc: '', difficulty: 4, need: 10, state: false},
            {name: 'request', desc: 'request Yii2', difficulty: 4, need: 10, state: false},
            {name: 'Базовая валидация', desc: 'Метод валидации на уровне фреймворка', difficulty: 1, need: 10, state: false},
            {name: 'Model load. ', desc: 'load() vs attributes()', difficulty: 4, need: 10, state: false},
            {name: 'Базовый query builder', desc: 'Yii2 работа с БД', difficulty: 2, need: 10, state: false},
            {name: 'Вывод данных на страницу', desc: 'Отображение данных', difficulty: 2, need: 9, state: false},
            {name: 'UrlHelper', desc: 'Правильное создание ссылок', difficulty: 2, need: 9, state: false},
            {name: 'Assets', desc: 'Ассеты, зависимости для компонента', difficulty: 2, need: 9, state: false},
            {name: 'Виджеты', desc: 'Кастомные виджеты', difficulty: 3, need: 8, state: false},
            {name: 'Компоненты', desc: 'Кастомные виджеты', difficulty: 3, need: 8, state: false},
            {name: 'Yii Debugger', desc: 'Что это за штука и как с ней взаимодействовать', difficulty: 2, need: 10, state: false},
            {name: 'Unit тесты', desc: 'Codeception, Phpunit. Напишем пару тестов.', difficulty: 2, need: 4, state: false},
            {name: 'Пагинация', desc: 'Разбивка данных на страницы', difficulty: 2, need: 9, state: false},
            {name: 'ArrayHelper', desc: 'Мегаполезная штука в Yii2', difficulty: 3, need: 10, state: false},
            {name: 'Работа с формами, загрузка файлов', desc: 'Файлы, картинки', difficulty: 6, need: 10, state: false},
            {name: 'Прикрепляем картинку к модели', desc: 'Файлы', difficulty: 5, need: 9, state: false},
            {name: 'Session', desc: 'Управление сессиями в фреймворке', difficulty: 2, need: 5, state: false},
            {name: 'Yii2 компоненты фреймворка', desc: 'база, юзер, кеш, urlManager, лог', difficulty: 5, need: 9, state: false},
            {name: 'Повторяем, закрепляем', desc: 'Повоторяем все что прошли, разбираем сложные моменты еще раз', difficulty: 4, isFree:1, need: 1, state: false},
        ]
    },
    part5: {
        name: 'Yii2 Школа',
        lessons: '8-12',
        descr: '-',
        courses: [
            {
                name: 'Миграции: связанные таблицы, ключи, индексы',
                desc: 'addPrimaryKey, dropPrimaryKey, dropPrimaryKey, addForeignKey, dropForeignKey, createIndex, alterColumn, renameColumn',
                difficulty: 4, need: 7, state: false
            },
            {
                name: 'Yii DB', desc: 'alterColumn, execute, insert, batchInsert, update, delete',
                difficulty: 4, need: 7, state: false
            },
            {name: 'Тренируемся с проектировкой БД', desc: 'Сочиняем базу для тренировок', difficulty: 5, need: 8, state: false},
            {name: 'Связи: hasOne', desc: 'Люди и паспорта. Автомобили и двигатели', difficulty: 3, need: 8, state: false},
            {name: 'Связи: hasMany', desc: 'Люди и квартиры. Хозяева и питомы', difficulty: 5, need: 7, state: false},
            {name: 'Связи: manyToMany', desc: 'Книги и авторы. Посты и теги',  difficulty: 8, need: 4, state: false},
            {
                name: 'Модели: CRUD, GII',
                desc: 'Yii2 генерация кода для базовых классов',
                difficulty: 3, need: 9, state: false
            },
            {
                name: 'Фильтры в контроллерах',
                desc: 'behaviors, beforeAction, afterAction',
                difficulty: 3, need: 9, state: false
            },

            {
                name: 'Датапровайдеры',
                desc: 'ActiveDataProvider, ArrayDataProvider',
                difficulty: 6, need: 10, state: false
            },
            {
                name: 'Виджеты: GridView, ListView',
                desc: 'Виджеты фреймворка для отображения данных',
                difficulty: 4, need: 10, state: false
            },
            {
                name: 'Поисковые модели, жадная загрузка',
                desc: 'Простая оптимизация запросов к БД',
                difficulty: 5, need: 9, state: false
            },
            {name: 'Кастомная валидация', desc: 'Создание своих кастомных валидаторов', difficulty: 4, need: 7,  state: false},
            {name: 'Сценарии валидации', desc: 'Эксперименты с формами и их сценариями', difficulty: 4, need: 5,  state: false},
            {name: 'Faker, создаем данные', desc: 'Мучаем Faker, что бы не лазить руками в БД', difficulty: 3, need: 3, state: false},
            {
                name: 'Консольные команды. Консольные контроллеры',
                desc: 'Пробуем подкорректировать базу. Номера телефонов, фио, итд', difficulty: 5, need: 6, state: false
            },
            {
                name: 'Пакетная вставка',
                desc: 'Через консольную команду. Миграцию вставляем данные',
                difficulty: 3, need: 7, state: false
            },
            {
                name: 'Insert vs batchInsert',
                desc: 'Пишем логику на пакетну вставку и сравниваем результаты с обычной', difficulty: 4, need: 3, state: false
            },
            {
                name: 'Транзакции',
                desc: 'SQL транзакции через Yii2',
                difficulty: 3, need: 8, state: false
            },
            {name: 'Кэширование данных', desc: 'Работа с кэшем. Yii2 кэш или редис', difficulty: 2, need: 4, state: false},
            {name: 'Вывод связанных данных', desc: 'Вывод данных на траницу с использование связей между объектами', difficulty: 1, need: 10, state: false},
            {name: 'Повторяем, закрепляем', desc: 'Повоторяем все что прошли, разбираем сложные моменты еще раз', difficulty: 5, isFree:1, need: 1, state: false},
        ]
    },
    part6: {
        name: 'Yii2 Универ',
        lessons: '4-7',
        descr: '-',
        courses: [
            {
                name: 'Виджеты + Ajax',
                desc: 'Кастомные виджеты с обновление через Ajax. Подгрузка данных без перезагрузки странц',
                difficulty: 5, need: 8, state: false
            },
            {
                name: 'Подключаем DatePicker',
                desc: 'Ставим сторониий виджет DatePicker',
                difficulty: 5, need: 7, state: false
            },
            {
                name: 'Кастомизация: GridView, ListView', desc: 'Кнопка изменить статус и редактирование прямо в виджете',
                difficulty: 7, need: 3, state: false
            },
            {name: 'Кастомные Query', desc: 'class UserQuery extends ActiveQuery. Вынесение сложных или частых запросов', difficulty: 6, need: 5, state: false},
            {name: 'Модули', desc: 'Разбивка приложения на части', difficulty: 2, need: 8, state: false},
            {name: 'Аутентификация', desc: 'Регистрация, авторицация', difficulty: 4, need: 5, state: false},
            {name: 'События', desc: 'Система событий в Yii2', difficulty: 7, need: 5, state: false},
            {name: 'Модуль админка', desc: 'Добавляем простую админку', difficulty: 4, need: 5, state: false},
            {name: 'Пишем простое Апи', desc: 'Создаем простое АПИ', difficulty: 2, need: 10, state: false},
            {name: 'Rest контроллеры', desc: 'АПИ на уровне фреймворка.', difficulty: 5, need: 8, state: false},
            {name: 'Yii2 очереди', desc: 'Работа с очередями', difficulty: 4, need: 7, state: false},
            {name: 'Повторяем, закрепляем', desc: 'Повоторяем все что прошли, разбираем сложные моменты еще раз', difficulty: 6, isFree:1, need: 1, state: false},
        ]
    },

    part7: {
        name: 'Yii2 Теперь ты в армии, сынок!',
        lessons: '20-35',
        descr: `До этого были тренировки и обучалки. Это целиком практический раздел. Тут я буду много думать вслух и писать код. 
            А потом Вы... только думать нужно будет про себя и писать код тоже для себя... Здесь все что мы прошли ранее на примере суровых боевых задач!`,
        courses: [
            {name: 'Модуль пользователи', desc: '', difficulty: 3, need: 8, state: false},
            {name: 'Миграции модуля пользователи', desc: 'Проектируем БД. Для модуля. Пользователи, паспорта, имущество, страны итд', difficulty: 7, need: 10, state: false},
            {name: 'Создаем модели и контроллеры', desc: 'Создаем модели и контроллеры для модуля пользователи', difficulty: 4, need: 10, state: false},
            {name: 'Расширяем слой модели пользователей', desc: 'Создаем доп. компоненты и сущности выносим логику', difficulty: 6, need: 10, state: false},
            {name: 'Подготавливаем фейк данные', desc: 'Заполняем наши таблицы, через консольные скрипты и фейкер', difficulty: 6, need: 4, state: false},
            {
                name: 'Отображаем пользователей со связанными данными',
                desc: 'Вывод пользователей и данных о них',
                difficulty: 3,
                need: 8, state: false
            },
            {name: 'Виджет пользователь', desc: 'Оборачиваем в виджет данные о пользователе', difficulty: 5, need: 9, state: false},
            {name: 'Редактирование пользователя в виджете', desc: 'Отображение и изменение данных прямо в виджете', difficulty: 6, need: 5, state: false},
            {name: 'Редактирование паспорта в виджете', desc: 'Отображение и изменение данных прямо в виджете', difficulty: 6, need: 5, state: false},
            {name: 'Редактирование данных через Ajax', desc: 'Изменение данных прямо в виджете без перезагрузки страницы', difficulty: 6, need: 8, state: false},
            {name: 'Взаимодействие с апи погоды', desc: 'Помучаем Yandex погоду', difficulty: 6, need: 8, state: false},
            {name: 'Поисковая форма', desc: 'Создаем поисковую форму', difficulty: 6, need: 8, state: false},
            {name: 'Поисковая форма по связанным данным', desc: 'Поиск по всем характеристикам. Поиск по связанным данным', difficulty: 9, need: 8, state: false},
            {name: 'Индексы. Оптимизация скорости', desc: 'Помучаем БД индексами, определим какие колонки их заслуживают', difficulty: 7, need: 8, state: false},

            {name: 'Модуль криптовалюты', desc: 'Новый раздел с криптовалютами', difficulty: 3, need: 8, state: false},
            {
                name: 'Миграции для криптовалют ',
                desc: 'Проектируем БД. Для модуля. Альткойн, альткойн_хистори, альткойн_дате ...',
                difficulty: 7,
                need: 9, state: false
            },
            {name: 'Создаем модели и контроллеры', desc: '-', difficulty: 4, need: 8, state: false},
            {name: 'Расширяем слой модели по крипте', desc: 'Создаем доп. комопненты и сущности выносим сложную логику', difficulty: 6, need: 10, state: false},
            {name: 'Создаем форму запроса альткойна', desc: 'Визуальный интерфейс для работы с криптой', difficulty: 4, need: 8, state: false},
            {name: 'Пишем логику крипто апи', desc: 'Вывод данных по запросу пользователя', difficulty: 5, need: 8, state: false},
            {name: 'Получение исторических данных о крипте', desc: 'Взаимодействие а АПИ', difficulty: 5, need: 8, state: false},
            {name: 'Консольный контроллер апи', desc: 'Пишем алгоритм для бесконечного опроса внешних апи', difficulty: 7, need: 8, state: false},
            {name: 'Использование очередей', desc: 'Запускаем долгие консольные команды через web интерфейс', difficulty: 6, need: 6, state: false},
            {name: 'Фоновый сбор данных', desc: 'Запускаем долгие консольные команды через web интерфейс', difficulty: 6, need: 6, state: false},
            {name: 'Отображение данных в таблице', desc: '-', difficulty: 4, need: 8, state: false},
            {name: 'Отображение данных в графике', desc: 'Прикручиваем интерактивный график', difficulty: 7, need: 6, state: false},
            {name: 'Курс молодого бойца vueJs', desc: 'Краткий курс по Vue (1-2 урока)', difficulty: 5, need: 8, state: false},
            {name: 'Эксперименты с vue', desc: 'Заменяем части приложения на VueJs', difficulty: 6, need: 7, state: false},
            {name: 'Yii2 виджеты vs Vue', desc: '-', difficulty: 6, need: 4, state: false},
            {name: 'Помощь с резюме. Что делать дальше.', desc: 'Не обязатльное занятие, но возможно кому то понадобится', difficulty: 1,  need: 1, isFree:1, state: false},
        ]
    },

}
export {fullstack};