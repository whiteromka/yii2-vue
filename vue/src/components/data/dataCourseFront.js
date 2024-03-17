let frontend = {
    part1: {
        name: 'Основы JS',
        lessons: '2-3',
        descr: `Можно все узнать самому где-то <a class="description-link" target="_blank" href="https://clck.ru/39AnZ3"> тут </a>. Рекомендую этого автора, все его уроки полезные!`,
        courses: [
            {
                name: 'Переменные',
                desc: 'Самае простые вещи для самых маленьких... ',
                difficulty: 1, need: 10, isFree: 1, state: false
            },
            {
                name: 'Типы',
                desc: 'Самае простые вещи для самых маленьких... ',
                difficulty: 1, need: 10, isFree: 1, state: false
            },
            {
                name: 'Операторы',
                desc: 'Самае простые вещи для самых маленьких... ',
                difficulty: 1, need: 10, isFree: 1, state: false
            },
            {
                name: 'Массивы и объекты',
                desc: 'Самае простые вещи для самых маленьких... ',
                difficulty: 1, need: 10, isFree: 1, state: false
            },
            {name: 'Циклы', desc: 'for, while', difficulty: 1, need: 10, isFree: 1,  state: false},
            {name: 'Пользовательские функции', desc: 'Простые вещи для самых маленьких... ', difficulty: 1, need: 10, isFree: 1, state: false},
            {
                name: 'Объекты и прототипное наследование',
                desc: 'Тут будет про ООП в JS',
                difficulty: 1, need: 10, state: false
            },
            {
                name: 'Функции для работы с массивами',
                desc: 'push, unshift, shift, pop, reverse, sort, splice, indexOf, map, итд', difficulty: 2, need: 10, state: false},
            {
                name: 'Функции для работы со строками',
                desc: 'console.log, length, toLowerCase, charAt, startsWith, indexOf, trim, итд', difficulty: 1, need: 10, state: false},
            {name: 'Асинхронность', desc: `Cинхронность и асинхронность`, difficulty: 3, need: 10, state: false},
            {name: 'Работа с сервером', desc: 'На примере Axios и JSON Placeholder', difficulty: 3, need: 10, state: false},
            {name: 'Адаптивная верстка', desc: 'Сверстаем что-то для общего понимания', difficulty: 1, need: 10, state: false},
        ],
    },
    part2: {
        name: 'Знакомство Vue',
        lessons: '2-5',
        //descr: `Можно все узнать самому где-то : <a class="description-link" target="_blank" href="https://clck.ru/39BYpk"> тут </a>`,
        descr: `Я все буду показывать и рассказывать на примере Options API, т.к. этот подход считаю наиболее простым, понятным и востребованным.`,
        courses: [
            {name: 'Настройка окружения. Node, npm, vue cli', desc: 'Настраиваем окружение для работы', difficulty: 2, need: 8, state: false},
            {name: 'Компоненты', desc: 'Начнем сразу с компонентов! Это самое важное на мой счет!', difficulty: 2, need: 8, state: false},
            {name: 'Слоты', desc: 'Vue слоты', difficulty: 2, need: 7, state: false},
            {name: 'Пропсы и data()', desc: '', difficulty: 2, need: 10, state: false},
            {name: 'Директивы', desc: '', difficulty: 2, need: 10, state: false},
            {name: 'Methods', desc: '', difficulty: 2, need: 10, state: false},
            {name: 'Computed', desc: '', difficulty: 2, need: 10, state: false},
            {name: 'Watch', desc: '', difficulty: 2, need: 10, state: false},
            {name: 'Mixins', desc: '', difficulty: 3, need: 4, state: false},
            {name: 'Events (хуки)', desc: '', difficulty: 4, need: 8, state: false},
            {name: 'Взаимодействие с сервером', desc: 'Я буду объяснять на примере с JSON Placeholder', difficulty: 2, need: 8, state: false},
            {name: 'Vue Router', desc: 'Работа с Vue Router', difficulty: 2, need: 8, state: false},
        ]
    },
    part3: {
        name: 'Практика Vue',
        lessons: '5-8',
        descr: `Тут мы будем писать интерактивное резюме true frontend разработчика для устройства на работу. Будем много мучать vue, js, html и css. Верстки будет довольно много.`,
        courses: [
            {name: 'Определяем структуру проекта', desc: 'Структура проекта',difficulty: 2, need: 5, state: false},
            {name: 'Разбиваем на проект на блоки', desc: 'Весь проект состоит из блоков. Визуальных и логических.',difficulty: 3, need: 8, state: false},
            {name: 'Пишем блоки отвечающие за отрисовку данных', desc: '',difficulty: 3, need: 9, state: false},
            {name: 'Мучаем логику для компонентов', desc: '',difficulty: 5, need: 8, state: false},
            {name: 'Неожиданный поворот - Google Firebase', desc: 'Мучаем Firebase Realtime Database. Где-то же надо ваши данные хранить...', difficulty: 3, need: 3, state: false},
            {name: 'Пишем блоки на прием данных', desc: 'Создаем формы для генерации данных', difficulty: 5, need: 8, state: false},
            {name: 'Собираем все в единую форму', desc: '', difficulty: 5, need: 6, state: false},
        ]
    }
}
export {frontend};